<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">{{ machineData.title }}</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'machine.all-list'}">Listed Machine</router-link></li>
                        <li class="breadcrumb-item active">Information</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="card">
            <div class="card-header d-flex justify-content-end">
                <router-link :to="{name: 'machine.service-record.add', params: {machineId: $route.params.id}}" class="btn btn-sm btn-primary mr-2"><i class="fas fa-plus"></i> Add Service Record</router-link>
                <router-link :to="{name: 'machine.edit', params: {id: $route.params.id}}" class="btn btn-sm btn-warning mr-2"><i class="fas fa-edit"></i> Edit</router-link>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 p-4">
                        <div class="form-group">
                            <h5>Machine Info</h5>
                            <hr>
                        </div>
                        <div class="form-group" v-if="machineData.machine_photo">
                            <img class="machine-thumb" :src="`/admin/api/resources/photos/machines/${machineData.machine_photo}`" alt="">
                        </div>
                        <div class="row">
                            <div class="col-6 mt-4">
                                <h6 class="title">Title</h6>
                                <p>{{ machineData.title }}</p>
                            </div>
                            <div class="col-6 mt-4">
                                <h6 class="title">Manufacturer</h6>
                                <p>{{ machineData.manufacturer }}</p>
                            </div>
                            <div class="col-6 mt-4">
                                <h6 class="title">Model</h6>
                                <p>{{ machineData.model }}</p>
                            </div>
                            <div class="col-6 mt-4">
                                <h6 class="title">Bottom SL</h6>
                                <p>{{ machineData.bottom_sl }}</p>
                            </div>
                            <div class="col-6 mt-4">
                                <h6 class="title">Top SL</h6>
                                <p>{{ machineData.top_sl }}</p>
                            </div>

                            <div class="col-6 mt-4">
                                <h6 class="title">Label Number</h6>
                                <p>{{ machineData.label_number }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 p-4">
                        <div class="form-group text-center">
                            <h5>Customer Info</h5>
                            <hr>
                        </div>
                        <div class="form-group text-center" v-if="machineData.customer_photo">
                            <img class="customer-thumb" :src="`/admin/api/resources/photos/customer/${machineData.customer_photo}`" alt="">
                        </div>
                        <div class="row">
                            <div class="col-12 mt-4 text-center">
                                <h6 class="title">Customer Name</h6>
                                <p>{{ machineData.customer_name }}</p>
                            </div>
                            <div class="col-12 mt-4 text-center">
                                <h6 class="title">Customer Location</h6>
                                <p>{{ machineData.customer_location }}</p>
                            </div>
                            <div class="col-12 mt-4 text-center">
                                <h6 class="title">Customer Number</h6>
                                <p>{{ machineData.customer_phone }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <h5>Service History</h5>
                    <hr>
                </div>

                <div class="row" v-if="isLoading">
                    <div class="col-12" v-for="n in 10" :key="n">
                        <skeleton width="100%" height="35px" />
                    </div>
                </div>

                <div class="row" v-else>
                    <div class="col-12">
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Tech Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <template v-if="serviceHistory.data.length <= 0">
                                    <tr>
                                        <td colspan="4" class="text-center text-danger">No service record</td>
                                    </tr>
                                </template>

                                <template v-else>
                                    <tr v-for="(history,i) in serviceHistory.data" :key="i">
                                        <td>{{ moment(history.serviceDate).format("MM / DD / YYYY") }}</td>
                                        <td>{{ history.serviceType }}</td>
                                        <td><b>{{ history.techName }}</b></td>
                                        <td>
                                            <router-link :to="{
                                                name: 'machine.serviceHistory',
                                                params: {machineId: $route.params.id, serviceId: history.id}
                                            }" title="View" class="btn btn-sm btn-primary"><i class="fas fa-eye"></i></router-link>
                                            <button @click="deleteServiceHistory(i,history.id)" title="Delete" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12 d-flex mt-3 justify-content-center">
                        <pagination :data="serviceHistory" @pagination-change-page="getServiceHistory" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-7">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <h4><i class="fas fa-check-circle"></i> &nbsp; Installed Parts</h4>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Part name</th>
                                <th>Part number</th>
                                <th>vendor</th>
                                <th>status</th>
                                <th>Installation date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="parts.length <= 0">
                                <tr>
                                    <td colspan="6" class="text-center"><span class="text-muted">No parts were assigned</span></td>
                                </tr>
                            </template>

                            <template v-else>
                                <tr v-for="(part,i) in parts" :key="i">
                                    <td>{{ i+1 }}</td>
                                    <td><b>{{ part.name }}</b></td>
                                    <td>{{ part.part_number }}</td>
                                    <td>{{ part.vendor }}</td>
                                    <td>
                                        <span v-if="part.status=='need_to_order'" class="badge badge-warning"> <i class="fas fa-clock"></i> Need to order</span>
                                        <span v-else-if="part.status=='ordered'" class="badge badge-pending"><i class="fas fa-check"></i> Ordered</span>
                                        <span v-else-if="part.status=='shipped'" class="badge badge-shipped"><i class="fas fa-truck"></i> Shipped</span>
                                        <span v-else-if="part.status=='installed'" class="badge badge-success"><i class="fas fa-check-circle"></i> Installed</span>
                                    </td>
                                    <td>
                                        <span v-if="part.status == 'installed'">{{ moment(part.updated_at).format("MM-DD-YYYY") }}</span>
                                        <span v-else>Not installed yet</span>
                                    </td>
                                    <td><router-link class="btn btn-sm btn-secondary" :to="{name: 'edit-part', params: {partId: part.id}}">View / Edit</router-link></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
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

            machineData: {},

            serviceHistory:{},

            moment: moment,

            parts: [],

        }
    },

    methods : {

        getMachineInfo() {
            axios.get("/admin/api/get-machine-data",{
                params : {
                    machineId: this.$route.params.id
                }
            }).then(resp=>{

                return resp.data;

            }).then(data=>{

                this.machineData = data.machineData;
                this.parts = data.parts;

            }).catch(err=>{

                console.error(err.response.data);

            });
        },

        getServiceHistory(page = 1) {

            this.isLoading = true;
            axios.get(`/admin/api/service-history-list?machineId=${this.$route.params.id}&page=${page}`)
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.isLoading = false;
                if(data.status == "ok") {
                    this.serviceHistory = data.data;
                    
                }

            }).catch(err=>{
                console.error(err.response.data);
            })

        },

        deleteServiceHistory(index,id) {
            
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                     axios.post("/admin/api/delete-service-history",{
                         historyId: id
                     }).then(resp=>{
                        return resp.data;
                    }).then(data=>{

                        if(data.status == "ok") {
                            swal.fire("Success", data.msg,"success");
                            this.serviceHistory.data.splice(index,1);
                        }

                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            })

        }

    },

    mounted() {
        this.getMachineInfo();
        this.getServiceHistory();

    },
}
</script>

<style>

</style>