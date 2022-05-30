<template>
  <li class="dropdown dropdown-list-toggle">
    <a href="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg" style="width: 63px;"
      ><i data-feather="bell" class="bell"></i>
      <span v-if="unseenCount > 0" class="dot">{{ unseenCount }}</span>
    </a>
    <div class="dropdown-menu dropdown-list dropdown-menu-right pullDown">
      <div class="dropdown-header">Notifications ({{ unseenCount }})</div>
      <div class="dropdown-list-content dropdown-list-icons" style="height: 500px !important;">
        <template v-for="(notify,n) in notifications">
          <!-- Boarding -->
          <a href="#" 
          v-if="notify.type=='boarding'" :key="n" class="dropdown-item" :class="{'dropdown-item-unread':notify.status=='unseen'}"
          @click.prevent="openNotification(notify.id,n,notify.status,notify.type,notify.booking_id)">
            <span class="dropdown-item-icon bg-white text-white">
              <img src="/images/boarding.png" width="25px" alt="">
            </span>
            <span class="dropdown-item-desc">
              <strong>Boarding | {{ notify.boarding_string }}</strong>
              <from-now :date="notify.created_at" />
            </span>
          </a>

          <!-- Grooming -->
          <a v-if="notify.type=='grooming'" :key="n" href="#" class="dropdown-item" :class="{'dropdown-item-unread':notify.status=='unseen'}"
          @click.prevent="openNotification(notify.id,n,notify.status,notify.type,notify.booking_id)">
            <span class="dropdown-item-icon bg-white text-white">
              <img src="/images/grooming.png" width="25px" alt="">
            </span>
            <span class="dropdown-item-desc">
              <strong>Grooming | {{ notify.grooming_string }}</strong>
              <!-- <span class="time" style="color: black !important;">Bill : 200 USD</span> -->
              <from-now :date="notify.created_at" />
            </span>
          </a>
        </template>

      </div>
      <div class="dropdown-footer text-center">
        <router-link :to="{name: 'admin.notification'}">View All <i class="fas fa-chevron-right"></i></router-link>
      </div>
    </div>
  </li>
</template>

<script>
import Pusher from "pusher-js";
export default {
    data(){
        return{
            unseenCount: 0,
            notifications: [],
        }
    },
    components:{
      "from-now": ()=>import("../partials/FromNowTimer.vue")
    },
    mounted(){
      
      // Pusher setup
      var self = this;
      let pusherAppKey = process.env.MIX_PUSHER_APP_KEY;
      let pusherCluster = process.env.MIX_PUSHER_APP_CLUSTER;

      this.$root.$refs.headerNotification = this;
      var pusher = new Pusher(pusherAppKey,{
            cluster: pusherCluster
        });
        var channel = pusher.subscribe('booking');
        channel.bind('notify', function(data) {
            self.notifications.unshift(data.data);
            self.unseenCount+=1;
            new Audio("/audio/sms_notification.mp3").play();
        });
        // pusher ends

        
    },
    methods:{
        getNotifications(){
            axios.get("/admin/api/get-all-notifications").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.notifications = data.data;
                this.unseenCount = data.unseenCount;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        resetAll(){
          this.notifications = [];
          this.unseenCount = 0;
        },
        makeSeen(id,decreaseUnseen){
          this.notifications.forEach((item,i)=>{
            if(item.id == id){
              item.status = "seen";
              if(decreaseUnseen){
                this.unseenCount -= 1;
              }
              return false;
            }
          })
        },
        openNotification(id,index,status,type,bookingId){
            if(status == "unseen"){
                this.notifications[index].status = "seen";
                this.unseenCount-=1;
                axios.post("/admin/api/seen-notification",{
                    id: id,
                }).catch(err=>{
                    console.error(err.response.data);
                });
            }
            if(type=="boarding"){
                this.$router.push({
                    name: "boarding.edit",
                    params:{
                        id: bookingId,
                    }
                });
            } else{
              this.$router.push({
                name: "grooming.edit",
                params: {
                  id: bookingId,
                }
              });
            }
        },
        deleteIfExists(id){
          this.notifications.forEach((item,i)=>{
            if(item.id == id){
              if(item.status == "unseen")
              {
                this.unseenCount -=1;
              }
              this.notifications.splice(i,1);
            }
          })
        },
    },
    created() {
        this.getNotifications();
    },
};
</script>

<style></style>
