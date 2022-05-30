<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">All Parts List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
                        <li class="breadcrumb-item active">Parts List</li>
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
                            placeholder="Search by tacking number..." v-model="searchText">
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
                                            <th>Part Name</th>
                                            <th>Part Number</th>
                                            <th>Vendor</th>
                                            <th>PO</th>
                                            <th>Track Number</th>
                                            <th>Service ID</th>
                                            <th>Assigned Machine Label</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <template v-if="parts.data.length == 0">
                                            <tr>
                                                <td colspan="10" class="text-center text-danger">No listed parts was found</td>
                                            </tr>
                                        </template>

                                        <template v-else>
                                            <tr v-for="(part,i) in parts.data" :key="i">
                                                <td>{{ part.name }}</td>
                                                <td>{{ part.part_number }}</td>
                                                <td>{{ part.vendor }}</td>
                                                <td>{{ part.po }}</td>
                                                <td>{{ part.track_number }}</td>
                                                <td><span class="badge badge-secondary">{{ part.service_id }}</span></td>
                                                <td><span class="badge badge-primary">{{ part.machine.label_number }}</span></td>
                                                <td>
                                                    <span v-if="part.status=='need_to_order'" class="badge badge-warning"> <i class="fas fa-clock"></i> Need to order</span>
                                                    <span v-else-if="part.status=='ordered'" class="badge badge-pending"><i class="fas fa-check"></i> Ordered</span>
                                                    <span v-else-if="part.status=='shipped'" class="badge badge-shipped"><i class="fas fa-truck"></i> Shipped</span>
                                                    <span v-else-if="part.status=='installed'" class="badge badge-success"><i class="fas fa-check-circle"></i> Installed</span>
                                                </td>
                                                <td>
                                                    <button v-if="part.status=='need_to_order'" @click="changeStatus(part.id,i)" class="btn btn-sm btn-primary">Mark as ordered</button>
                                                    <button v-else-if="part.status=='ordered'" @click="changeStatus(part.id,i)" class="btn btn-sm btn-secondary">Mark as shipped</button>
                                                    <button v-else-if="part.status=='shipped'" @click="changeStatus(part.id,i)" class="btn btn-sm badge-shipped">Mark as installed</button>
                                                    <router-link :to="{name: 'edit-part', params: {partId: part.id}}" 
                                                    class="btn btn-sm btn-success" title="Edit"><i class="fas fa-edit"></i></router-link>
                                                    <button @click="deletePart(part.id,i)" class="btn btn-sm btn-danger" title="Delete"><i class="fas fa-trash"></i></button>
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
                    <pagination :data="parts" @pagination-change-page="getAllPartsList"/>
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
            parts: {},
            moment: moment,
            searchText: "",
            searchMode: false,
        }
    },

    methods : {
        getAllPartsList(page=1) {
            this.isLoading = true;
            axios.get("/admin/api/get-all-parts-list?page="+page+"&q="+this.searchText).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.parts = data;
                this.isLoading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },

        deletePart(id,index) {
            swal.fire({
                title: 'Are you sure?',
                text: "This will delete the part data from server",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {

                    axios.post("/admin/api/delete-part",{
                        partId: id
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        console.log(data);
                        if(data.status == "ok") {
                            swal.fire("Success",data.msg,"success");
                            this.parts.data.splice(index,1);
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

            this.getAllPartsList();
        },
        cancelSearch() {
            this.searchText = "";
            this.searchMode = false;
            this.getAllPartsList();
        },
        changeStatus(id,index) {
            axios.post('/admin/api/update-part-status',{
                partId: id,
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
               if(data.status == "ok") {
                   swal.fire("Success",data.msg,"success");
                   this.parts.data[index].status = data.new_status;
               } 
            }).catch(err=>{
                console.error(err.response.data);
            });
        }
    },

    mounted() {
        this.getAllPartsList();
    }
}
</script>

<style>

</style>