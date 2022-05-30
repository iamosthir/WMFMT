<template>
  <div class="request-details">
    <div class="header">
      <button @click="closeSlide" title="Close" class="close-btn"><i class="fas fa-times"></i></button>
    </div>

    <div class="row mt-5" v-if="isLoading">
        <div class="col-6">
            <skeleton class="mb-2" width="50%" height="20px" />
            <skeleton class="mb-2" width="60%" height="20px" />
            <skeleton class="mb-2" width="70%" height="20px" />
        </div>

        <div class="col-6">
            <skeleton class="mb-2" width="50%" height="20px" />
            <skeleton class="mb-2" width="60%" height="20px" />
            <skeleton class="mb-2" width="70%" height="20px" />
        </div>

        <div class="col-12 mt-5">
            <skeleton class="mb-2" width="50%" height="20px" />
            <skeleton class="mb-2" width="50%" height="20px" />
            <skeleton class="mb-2" width="60%" height="20px" />
            <skeleton class="mb-2" width="60%" height="20px" />
            <skeleton class="mb-2" width="100%" height="20px" />
            <skeleton class="mb-2" width="100%" height="20px" />
            <skeleton class="mb-2" width="80%" height="20px" />
            <skeleton class="mb-2" width="80%" height="20px" />
            <skeleton class="mb-2" width="70%" height="20px" />
            <skeleton class="mb-2" width="70%" height="20px" />
            <skeleton class="mb-2" width="100%" height="20px" />
            <skeleton class="mb-2" width="100%" height="20px" />
        </div>


    </div>

    <div class="details-body" v-else>

      <p v-if="bookingData.status == 'pending'" class="text-warning"><i class="fas fa-circle"></i> Pending</p>
      <p v-if="bookingData.status == 'accepted'" class="text-success"><i class="fas fa-circle"></i> Approved</p>

      <h5 class="title">Ticket #{{ bookingData.id }} <small>
          (Date : {{ moment(bookingData.created_at).format("MM-DD-YYYY hh:mm a") }})</small></h5>
      <div class="info">
        <div class="row">
          <div class="col-6">
            <p><b>Customer Name : </b> {{ bookingData.customerName }}</p>
            <p><b>Phone : </b> {{ bookingData.phone }}</p>
            <p><b>Email : </b> {{ bookingData.email||'N/A' }}</p>
            <p><b>Address : </b> {{ bookingData.address }}</p>
            <p><b>Subject : </b> {{ bookingData.subject }}</p>
          </div>
          <div class="col-6">
            <p><b>Machine Info</b></p>
            <hr>
            <p><b>ID : &nbsp;&nbsp;</b>{{ bookingData.machine.id }}</p>
            <p><b>Top SL. : &nbsp;&nbsp;</b>{{ bookingData.machine.top_sl }}</p>
            <p><b>Bottom SL. : &nbsp;&nbsp;</b>{{ bookingData.machine.bottom_sl }}</p>
            <p><b>Label Number : &nbsp;&nbsp;</b>{{ bookingData.machine.label_number }}</p>
          </div>
          <div class="col-12">
            <p class="mt-5 text-muted"><b>Complain / Description</b></p>
            <hr>
            <p class="details-text">
              {{ bookingData.description }}
            </p>
          </div>
          <div class="col-12 mt-5">
            <button @click="triggerApprove" v-if="bookingData.status == 'pending'" class="btn btn-sm btn-success mb-2">Approve</button>
            <button @click="triggerDelete" class="btn btn-sm btn-danger mb-2">Cancel & Delete</button>
            <router-link :to="{name: 'machine.info', params: {id: bookingData.machineId}}" class="btn btn-sm btn-warning mb-2">View Machine</router-link>
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
            bookingData: {},
            isLoading: true,
            moment: moment,
            bookingIndex: null,
        }
    },
    methods: {
        triggerSlide(data,index) {
            var _slef = this;
            _slef.isLoading = true;
            $(".request-details").addClass("slide-opened");
            var bookingInfo = data;
            _slef.bookingData = bookingInfo;
            _slef.bookingIndex = index;
            setTimeout(()=>{
                _slef.isLoading = false;
            },500);
        },
        
        closeSlide() {
            $(".request-details").removeClass("slide-opened");
        },

        triggerDelete() {
          this.$root.$refs
          .DashboardComponent.deleteService(this.bookingData.id,this.bookingIndex);
        },

        triggerApprove() {
          this.$root.$refs
          .DashboardComponent.approvePending(this.bookingData.id,this.bookingIndex);
        }
    },
    created() {
        this.$root.$refs.detailsSlider = this;
    }
}
</script>

<style>

</style>