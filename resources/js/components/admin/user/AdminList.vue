<template>
    <section class="section pt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Admin List</h4>
                        <router-link :to="{name: 'admin-new'}" class="btn btn-primary"><i class="fas fa-plus"></i> Create admin</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row" v-if="is_loading">
                            <div class="col-12" v-for="n in 10" :key="n">
                                <skeleton width="100%" height="30px" />
                            </div>
                        </div>
                        <div class="table-responsive" v-if="!is_loading">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Admin Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="admins.length == 0">
                                        <tr>
                                            <td colspan="5" class="text-center text-danger">No admin was created</td>
                                        </tr>
                                    </template>

                                    <template v-else>
                                        <tr v-for="(admin,i) in admins" :key="i">
                                            <td>
                                                <img :src="`/admin/api/resources/photos/user/${admin.photo}`" class="user-round" alt="" v-if="admin.photo">
                                                <img src="/img/portrait-placeholder.png" class="user-round" alt="" v-else>
                                            </td>
                                            <td>{{ admin.name }}</td>
                                            <td>{{ admin.email }}</td>
                                            <td>{{ admin.role=='super'?'Super Admin':'Tech' }}</td>
                                            <td>
                                                <router-link :to="{name: 'admin-edit',params:{adminId: admin.id}}" class="btn btn-success btn-sm" title="Edit"><i class="fas fa-edit"></i></router-link>
                                                <button @click="deleteAdmin(admin.id,i)" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            admins: [],
        }
    },
    methods:{
        getAdminList(){
            axios.get("/admin/api/get-admin-list").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.admins = data.data;
                    this.is_loading = false;
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        getProfileInfo(){
            axios.get("/admin/api/get-admin-info")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.role != "super"){
                    this.$router.push({
                        name: "admin-home"
                    });
                } else{
                    this.getAdminList();
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        deleteAdmin(adminId,index){
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((res) => {
                if (res.isConfirmed) {
                    axios.post("/admin/api/delete-admin",{
                        adminId : adminId
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok"){
                            swal.fire({
                                title: "Success",
                                icon: "success",
                                text : data.msg,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 1000,
                            });
                            this.admins.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            });
            
        }
    },
    created(){
        this.getProfileInfo();
    }
}
</script>

<style>

</style>