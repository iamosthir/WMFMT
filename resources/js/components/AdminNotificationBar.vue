<template>
  <!-- Notifications Dropdown Menu -->
<li class="nav-item dropdown" title="Pending Bookings">
    <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-bell"></i>
        <span v-if="bookings.length > 0" class="badge badge-warning navbar-badge">{{ bookings.length }}</span>
    </a>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span class="dropdown-item dropdown-header">{{ bookings.length }} Pedning Tickets</span>

        <template v-if="bookings.length > 0">
            <template v-for="(booking,i) in bookings">
                <a href="#" class="dropdown-item" :key="i">
                    <div class="notification-item">
                        <p><b>Ticket #{{ booking.id }}</b></p>
                        <p>{{ booking.subject }}</p>
                        <vue-moments-ago prefix="" suffix="ago" :date="booking.created_at" lang="en"></vue-moments-ago>
                    </div>
                </a>
            </template>
        </template>

        <template v-else>
            <p class="text-center text-danger mt-4 mb-4">No notifications</p>
        </template>

        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
    </div>
</li>
</template>

<script>
import VueMomentsAgo from 'vue-moments-ago';
import Pusher from "pusher-js";
export default {
    components: {
        VueMomentsAgo
    },
    data() {
        return {
            bookings: [],
        }
    },
    methods : {
        getPendings() {
            axios.get("/admin/api/get-pending-services-limited").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    this.bookings = data.data;
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        }
    },
    created() {

        this.getPendings();
    },

    mounted() {

        var audio = new Audio("/audio/notification.mp3");

        var pusher = new Pusher(process.env.MIX_PUSHER_APP_KEY,{
            cluster: process.env.MIX_PUSHER_APP_CLUSTER
        });

        var channel = pusher.subscribe("ServiceRequest");
        channel.bind("NewServiceRequest",(data)=>{
            audio.play();
            this.bookings.unshift(data.info);
            this.$dtoast.pop({
                preset: "success",
                heading: `New Service Request`,
                content:  `Ticket ID #${data.info.id}`,
                duration: "5000",
            });

        });
    },
}
</script>

<style>

</style>