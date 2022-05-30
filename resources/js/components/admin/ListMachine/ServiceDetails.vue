<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Service History</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'machine.info', params: {id: $route.params.machineId}}">{{ machineData.title }}</router-link></li>
                        <li class="breadcrumb-item active">Service History</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-7">
        <div class="card">
            <div class="card-header d-flex justify-content-end">
                <router-link :to="{name: 'machine.edit-service', params: {serviceId: $route.params.serviceId, machineId: $route.params.machineId}}" class="btn btn-sm btn-primary">Edit <i class="fas fa-edit"></i></router-link>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <h4>Service Details</h4>
                    <hr>
                </div>

                <div class="form-group">
                    <div class="mb-4 ml-2 badge badge-primary">Bottom SL : {{ machineData.bottom_sl }}</div>
                    <div class="mb-4 ml-2 badge badge-secondary">Top SL : {{ machineData.top_sl }}</div>
                    <div class="mb-4 ml-2 badge badge-warning">Label Number : {{ machineData.label_number }}</div>
                </div>

                <!-- Loader -->
                <div class="row mt-5" v-if="isLoading">
                    <div class="col-md-4 mb-4" v-for="n in 9" :key="n">
                        <skeleton width="40%" height="25px" />
                        <skeleton width="100%" height="20px" />
                        <skeleton width="100%" height="20px" />
                    </div>
                </div>
                <!-- End -->
                <div class="row mt-5" v-else>
                    <div class="col-4 mb-4">
                        <h5><b>Service Date</b></h5>
                        <p class="text-muted">{{ moment(historyData.serviceDate ).format('MM/DD/YYYY') }}</p>
                    </div>
                    <div class="col-4 mb-4">
                        <h5><b>Service Type</b></h5>
                        <p class="text-muted">{{ historyData.serviceType }}</p>
                    </div>

                    <div class="col-4 mb-4">
                        <h5><b>Technician Name</b></h5>
                        <p class="text-muted">{{ historyData.techName }}</p>
                    </div>

                    <div class="col-md-12 mb-4">
                        <h5><b>Service Description</b></h5>
                        <p class="text-muted">{{ historyData.description }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="col-md-5">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <h4>Service Photos</h4>
                    <hr>
                </div>

                <div class="row mt-5" v-if="isLoading">
                    <div class="col-md-6 mb-4" v-for="n in 4" :key="n">
                        <skeleton width="100%" height="200px" />
                    </div>
                </div>

                <div class="row mt-5" v-else>

                    <template v-if="historyData.photos.length <= 0">
                        <div class="col-md-12 text-center">
                            <h4 class="text-danger">No photos available</h4>
                        </div>
                    </template>

                    <template v-else>

                        <div class="col-md-6 mb-4" v-for="(photo,i) in historyData.photos" :key="i">
                            <img :src="`/admin/api/resources/photos/service/${photo.img}`" alt="" class="service-photo">
                            <button @click="deleteServicePhoto(i,photo.id)" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                        </div>

                    </template>

                    

                </div>

            </div>
        </div>
    </div>

    <div class="col-md-7" v-if="historyData.needParts=='yes'">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <h4>Parts List</h4>
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
            historyData: {},
            machineData: {},
            isLoading: true,
            moment: moment,
            parts: [],
        }
    },

    methods : {
        getHistoryData() {
            axios.get(`/admin/api/service-history-details?machineId=${this.$route.params.machineId}&historyId=${this.$route.params.serviceId}`).then(resp => {
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    this.isLoading = false;
                    this.historyData = data.service;
                    this.machineData = data.machine;
                    this.parts = data.parts;
                }
                else {
                    this.$router.go(-1);
                }
            }).catch(err=>{
                this.$router.go(-1);
                console.error(err.response.data);
            });
        },

        deleteServicePhoto(index,photoId) {
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
                    axios.post("/admin/api/delete-service-photo",{
                        photoId: photoId
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok") {
                            swal.fire("Success",data.msg,"success");
                            this.historyData.photos.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            })
        }
    },
    
    mounted() {
        this.getHistoryData();
    }
}
</script>

<style>

</style>