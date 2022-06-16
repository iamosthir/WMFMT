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
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            customerData: {}
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
        }
    },

    mounted() {
        this.verifyCustomerId();
    }
}
</script>

<style>

</style>