<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">All Machines List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Machine List</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <form @submit.prevent="searchMachine()" class="col-md-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" 
                            placeholder="Search by machine title, top sl, bottom sl, label, customer name, phone..." v-model="searchText">
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-success"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                        <div class="form-group" v-if="searchMode">
                            <p>
                                Search Result for : &nbsp; <span class="text-primary">{{ searchText }}</span>
                                <button type="button" @click="cancelSearch" class="btn text-danger" title="Cancel Search"><i class="fas fa-times"></i></button>
                            </p>
                        </div>
                    </form>

                    <div class="col-md-12 mt-3">
                        <h4>List</h4>

                        <div class="row" v-if="isLoading">
                            <div class="col-12 mb-2" v-for="n in 10" :key="n">
                                <skeleton width="100%" height="30px" />
                            </div>
                        </div>

                        <template v-else>
                            <div class="table-responsive">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Manufacturer</th>
                                            <th>Model</th>
                                            <th>Bottom SL</th>
                                            <th>Top SL</th>
                                            <th>Label Number</th>
                                            <th>Customer Name</th>
                                            <th>Last Service Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <template v-if="machines.data.length == 0">
                                            <tr>
                                                <td colspan="10" class="text-center text-danger">No listed machine was found</td>
                                            </tr>
                                        </template>

                                        <template v-else>
                                            <tr v-for="(machine,i) in machines.data" :key="i">
                                                <td>{{ i+1 }}</td>
                                                <td>{{ machine.title }}</td>
                                                <td>{{ machine.manufacturer }}</td>
                                                <td><span class="badge badge-pill badge-warning">{{ machine.model }}</span></td>
                                                <td><span class="badge badge-pill badge-primary">{{ machine.bottom_sl }}</span></td>
                                                <td><span class="badge badge-pill badge-secondary">{{ machine.top_sl }}</span></td>
                                                <td><span class="badge badge-pill badge-success">{{ machine.label_number }}</span></td>
                                                <td>{{ machine.customer_name }}</td>
                                                
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

                                                        <router-link :to="{name: 'machine.service-record.add', params: {machineId: machine.id}}" class="dropdown-item" href="#"><i class="fas fa-plus"></i> Add Service Record</router-link>
                                                    
                                                        
                                                        <router-link :to="{name: 'machine.edit', params: {id: machine.id}}" 
                                                        class="dropdown-item text-warning"><i class="fas fa-edit"></i> Edit Machine Info</router-link>
                                                    </div>

                                                    <button @click="deleteMachine(i,machine.id)" class="mb-2 btn btn-sm btn-danger"><i class="fas fa-trash"></i> Delete</button>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </template>

                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <pagination :data="machines" @pagination-change-page="getAllMachineList"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            machines: {},
            moment: moment,
            searchText: "",
            searchMode: false,
        }
    },

    methods : {
        getAllMachineList(page=1) {
            this.isLoading = true;
            axios.get("/admin/api/get-all-machine-list?page="+page+"&q="+this.searchText).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.machines = data;
                this.isLoading = false;
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
                            this.machines.data.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                     
                }
            })
        },
        searchMachine() {
            if(this.searchText != "") {
                this.searchMode = true;
            }
            else {
                this.searchMode = false;
            }

            this.getAllMachineList();
        },
        cancelSearch() {
            this.searchText = "";
            this.searchMode = false;
            this.getAllMachineList();
        }
    },

    mounted() {
        this.getAllMachineList();
    }
}
</script>

<style>

</style>