<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Dashboard</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
                        <li class="breadcrumb-item active">Parts Request</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h4>Parts Requests</h4>
            </div>
            <div class="card-body">
                <div class="row" v-if="isLoading">
                    <div class="col-md-12" v-for="n in 15" :key="n">
                        <skeleton width="100%" height="25px" />
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Service ID</th>
                                    <th>Machine Label</th>
                                    <th>Comments from tech</th>
                                    <th>Request Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(req,i) in requests" :key="i">
                                    <td><b>{{ req.id }}</b></td>
                                    <td><span class="badge badge-pill badge-primary">{{ req.machine.label_number }}</span></td>
                                    <td>{{ req.description }}</td>
                                    <td>{{ moment(req.created_at).format("DD MMM YYYY - hh:mm A") }}</td>
                                    <td>
                                        <router-link :to="{name: 'add-parts', params: {serviceId: req.id}}" class="btn btn-sm btn-primary">Add parts</router-link>
                                        <button @click="cancelPartRequest(req.id,i)" class="btn btn-danger btn-sm">Cancel</button>
                                        <button @click="changeStatus(req.id,i)" class="btn btn-sm btn-success">Mark as completed <i class="fas fa-check-circle"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
            requests: [],
            moment: moment,
        }
    },
    methods : {
        getPartsRequest(page = 1) {
            axios.get(`/admin/api/get-parts-request-data?page=${page}`)
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.requests = data;
                this.isLoading = false;
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        cancelPartRequest(id,index) {
            
            axios.post("/admin/api/cancel-part-request",{
                serviceId: id,
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok" )
                {
                    this.requests.splice(index,1);
                    swal.fire("Canceled",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        changeStatus(id,index) {
            axios.post('/admin/api/complete-part-request',{
                historyId: id
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    swal.fire("Success",data.msg,"success");
                    this.requests.splice(index,1);
                    if($("#partReqCount").text() == 1)
                    {
                        $("#partReqCount").remove();
                    }
                    else
                    {
                        $("#partReqCount").text($("#partReqCount").text()-1);
                    }
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },

    mounted() {
        this.getPartsRequest();
    }
}
</script>

<style>

</style>