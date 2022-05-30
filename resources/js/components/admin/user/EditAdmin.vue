<template>
    <section class="section">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h4 class="text-muted">Edit admin</h4>
                        <router-link class="raise-button" :to="{name: 'admin-list'}"><i class="fas fa-arrow-left"></i> Go back</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">

                            <!-- Profile Edit -->
                            <div class="col-md-8">
                                <legend>Edit admin</legend>
                                <form @submit.prevent="createProfile" id="prfForm">
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label for="">Full Name</label>
                                            <input :class="{'is-invalid' : profileForm.errors.has('name')}" type="text" placeholder="Your full name" class="form-control" required v-model="profileForm.name">
                                            <HasError :form="profileForm" field="name" />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="">Email</label>
                                            <input :class="{'is-invalid' : profileForm.errors.has('email')}" type="email" placeholder="Your valid email" class="form-control" required v-model="profileForm.email">
                                            <HasError :form="profileForm" field="email" />
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="">Change Password</label>
                                            <input type="password" class="form-control" :class="{'is-invalid':profileForm.errors.has('password')}" placeholder="Password"
                                             v-model="profileForm.password">
                                            <HasError :form="profileForm" field="password" />
                                        </div>

                                        <div class="col-md-12 form-group">
                                            <label for="">User Type</label>
                                            <select class="form-control" v-model="profileForm.role">
                                                <option value="" hidden disabled>Select User Type</option>
                                                <option value="super">Super Admin</option>
                                                <option value="tech">Technician</option>
                                            </select>
                                            <HasError :form="profileForm" field="role" />
                                        </div>
                                        
                                        <div class="col-md-12 form-group">
                                            <label class="custom-switch p-0">
                                                <input  
                                                type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" v-model="profileForm.allowEmail">
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">Allow to Recieve Emails For New Bookings</span>
                                            </label>
                                        </div>

                                        <div class="col-md-12 form-group">
                                            <Button :form="profileForm" class="btn btn-success">Update</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End -->

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
            profileForm: new Form({
                name: '',
                email : '',
                role: '',
                password: "",
                adminId: this.$route.params.adminId,
                allowEmail: false,
            }),
        }
    },
    methods:{
        getProfileInfo(){
            axios.get("/admin/api/get-admin-data",{
                params:{
                    adminId: this.$route.params.adminId
                }
            })
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.profileForm.name = data.data.name;
                    this.profileForm.email = data.data.email;
                    this.profileForm.role = data.data.role;
                    this.profileForm.allowEmail = data.data.allow_emails=='true'?true:false;
                } else{
                    this.$router.push({
                        name: "admin-list"
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: "admin-list"
                });
            });
        },
        async createProfile(){
            await this.profileForm.post("/admin/api/update-admin").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success","New admin was updated successfully","success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
    },
    created(){
        this.getProfileInfo();
    }
}
</script>

<style>

</style>