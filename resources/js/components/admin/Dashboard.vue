<template>
<section>
    <div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h4>Service Requests</h4>
            </div>
            <div class="card-body">
                <div class="row">
                        <div class="col-12 mb-4">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn bg-secondary active">
                                    <input @change="getBookings" type="radio" name="options" autocomplete="off" checked value="pending" v-model="bookingType"> Pendings
                                </label>
                                <label class="btn bg-secondary">
                                    <input @change="getBookings" type="radio" name="options" autocomplete="off" value="accepted" v-model="bookingType"> Accepted
                                </label>
                            </div>
                        </div>
                    </div>
                <div class="row" v-if="isLoading">
                    <div class="col-12" v-for="n in 15" :key="n">
                        <skeleton width="100%" height="30px" />
                    </div>
                </div>

                <template v-else>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered tabler-hover">
                            <thead>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Customer Name</th>
                                    <th>Machine ID</th>
                                    <th>Subject</th>
                                    <th>Created At</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="bookings.length > 0">
                                    <tr v-for="(booking,i) in bookings" :key="i">
                                        <td>#{{ booking.id }}</td>
                                        <td>{{ booking.customerName }}</td>
                                        <td>{{ booking.machine.id }}</td>
                                        <td>{{ booking.subject }}</td>
                                        <td>{{ moment(booking.created_at).format("MM-DD-YYYY hh:mm a") }}</td>
                                        <td>
                                            <span v-if="booking.status=='pending'" class="badge badge-pill badge-warning">Pending</span>
                                            <span v-if="booking.status=='accepted'" class="badge badge-pill badge-success">Approved</span>
                                        </td>
                                        <td>
                                            <button @click="openSlide(booking,i)" class="btn btn-sm btn-primary mb-2">Show Details</button>
                                            <button v-if="booking.status == 'pending'" @click="approvePending(booking.id,i)" class="btn btn-sm btn-success mb-2">Approve</button>
                                            <button @click="deleteService(booking.id,i)" class="btn btn-sm btn-danger mb-2">Cancel & Delete</button>
                                            <router-link :to="{name: 'machine.info', params: {id: booking.machineId}}" class="btn btn-sm btn-warning mb-2">View Machine</router-link>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="7" class="text-center">No available service requests</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <div class="d-flex justify-content-center">
                        <pagination :data="paginateData" @pagination-change-page="getBookings"/>
                    </div>
                </template>
            </div>
        </div>
    </div>
</div>

<RequestSlide></RequestSlide>

</section>
</template>

<script>
import RequestSlide from "../partials/RequestSlide.vue";
export default {
    components: {
        RequestSlide,
    },
    data() {
        return {
            isLoading: true,
            bookings: [],
            paginateData: {},
            moment: moment,
            bookingType: "pending",
        }
    },

    methods: {
        getBookings(page = 1){ 
            this.isLoading = true;
            axios.get(`/admin/api/get-pending-services-all?page=${page}&bookingType=${this.bookingType}`).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.isLoading = false;
                if(data.status == "ok") {
                    this.bookings = data.bookingData.data;
                    this.paginateData = data.bookingData;
                }

            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        
        approvePending(id,index) {
            axios.post("/admin/api/approve-pending-service", {
                serviceId: id
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    $(".request-details").removeClass("slide-opened");
                    swal.fire("Success",data.msg,"success");
                    this.bookings.splice(index,1);
                }
                else {
                    swal.fire("Failed",data.msg,"error");
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },

        deleteService(id,index) {

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
                    axios.post("/admin/api/cancel-pending-service",{
                        serviceId: id,
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok") {
                            $(".request-details").removeClass("slide-opened");
                            swal.fire("Success",data.msg,"success");
                            this.bookings.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })                     
                }
            })
        },

        openSlide(booking) {
            this.$root.$refs.detailsSlider.triggerSlide(booking);
        }
    },

    mounted() {
        this.getBookings();
    },

    created() {
        this.$root.$refs.DashboardComponent = this;
    },
}
</script>

<style>

</style>