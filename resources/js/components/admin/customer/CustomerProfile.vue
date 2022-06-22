<template>
  <div class="row">

    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Customer Profile</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
                        <li class="breadcrumb-item active">Customer Profile</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h4 class="text-muted">Profile</h4>
            </div>
            <div class="card-body">
                <p><b>Customer Name : &nbsp;</b> {{ customerData.name }}</p>
                <p><b>Email : &nbsp;</b> {{ customerData.email||"Didn't set" }}</p>
                <p><b>Customer phone : &nbsp;</b> {{ customerData.phone }}</p>
                <p><b>Customer address : &nbsp;</b> {{ customerData.address }}</p>
            </div>
        </div>
    </div>

    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h4 class="text-muted float-left">Machine List</h4>
                <router-link :to="{name: 'customer.import-sheet', params: { customerId: customerData.id }}" class="btn btn-sm btn-secondary float-right">Import machines <small>(excel files)</small></router-link>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Manufacturer</th>
                                <th>Model</th>
                                <th>Bottom SL</th>
                                <th>Top SL</th>
                                <th>Label Number</th>
                                <th>Last Service Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="machineData.data.length > 0">
                                <tr v-for="(machine,i) in machineData.data" :key="i">
                                    <td>{{ machine.title }}</td>
                                    <td>{{ machine.manufacturer }}</td>
                                    <td><span class="badge badge-pill badge-warning">{{ machine.model }}</span></td>
                                    <td><span class="badge badge-pill badge-primary">{{ machine.bottom_sl }}</span></td>
                                    <td><span class="badge badge-pill badge-secondary">{{ machine.top_sl }}</span></td>
                                    <td><span class="badge badge-pill badge-success">{{ machine.label_number }}</span></td>
                                    <template>
                                        <td v-if="machine.last_service == null">Never</td>
                                        <td v-else>{{ moment(machine.last_service.created_at).format("MM / DD / YYYY") }}</td>
                                    </template>

                                    <td>
                                        <button class="mb-2 btn btn-sm btn-secondary dropdown-toggle" type="button" 
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                            <router-link :to="{name: 'machine.info', params: {id: machine.id}}" 
                                            class="dropdown-item"><i class="fas fa-eye"></i> Details</router-link>

                                            <router-link v-if="machine.last_service" :to="{name: 'machine.serviceHistory', 
                                            params: { machineId: machine.last_service.machine_id, serviceId: machine.last_service.id }}" 
                                            class="dropdown-item"><i class="fas fa-eye"></i> Last Service Details</router-link>

                                            <router-link :to="{name: 'machine.service-record.add', params: {machineId: machine.id}}" class="dropdown-item"><i class="fas fa-plus"></i> Add Service Record</router-link>
                                        
                                            
                                            <router-link :to="{name: 'machine.edit', params: {id: machine.id}}" 
                                            class="dropdown-item text-warning"><i class="fas fa-edit"></i> Edit Machine Info</router-link>
                                        </div>

                                        <button @click="deleteMachine(i,machine.id)" class="mb-2 btn btn-sm btn-danger"><i class="fas fa-trash"></i> Delete</button>
                                    </td>
                                </tr>
                            </template>

                            <template v-else>
                                
                            </template>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center">
                        <pagination :data="machineData" @pagination-change-page="getCustomerMachines"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            customerData: {},
            machineData: {},
        }
    },
    methods :  {
        verifyCustomerId(){
            axios.get("/admin/api/check-customer-info",{
                params: {
                    customerId: this.$route.params.customerId
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                
                if(data.status == "ok")
                {
                    this.customerData = data.customer;
                    this.getCustomerMachines();
                }
                else
                {
                    this.$router.push({
                        name: "customer.list"
                    });
                }

            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: "customer.list"
                });
            })
        },
        getCustomerMachines(page=1) {
            axios.get("/admin/api/get-customer-machines?page="+page,{
                params: {
                    customerId: this.$route.params.customerId,
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.machineData = data;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deleteMachine(index,id) {
            swal.fire({
                title: 'Are you sure?',
                text: "This will delete all service records as well",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {

                    axios.post("/admin/api/delete-machine",{
                        machineId: id
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        console.log(data);
                        if(data.status == "ok") {
                            swal.fire("Success",data.msg,"success");
                            this.machineData.data.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                     
                }
            })
        },
    },

    mounted() {
        this.verifyCustomerId();
    }
}
</script>

<style>

</style>