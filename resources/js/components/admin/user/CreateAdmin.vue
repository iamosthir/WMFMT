<template>
    <section class="section">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h4 class="text-muted">Create new admin</h4>
                        <router-link class="raise-button" :to="{name: 'admin-list'}"><i class="fas fa-arrow-left"></i> Go back</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">

                            <!-- Profile Edit -->
                            <div class="col-md-8">
                                <legend>Create admin</legend>
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
                                            <label for="">Password</label>
                                            <input type="password" class="form-control" :class="{'is-invalid':profileForm.errors.has('password')}" placeholder="Password" required
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
                                                <input :checked="profileForm.allowEmail" 
                                                type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" v-model="profileForm.allowEmail">
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">Allow to Recieve Emails For New Bookings</span>
                                            </label>
                                        </div>

                                        <div class="col-md-12 form-group">
                                            <label for="">Change Photo</label>
                                            <input type="file" class="form-control-file" accept="image/*" @change="profilePictureChange">
                                            <HasError :form="profileForm" field="photo" />
                                        </div>

                                        

                                        

                                        <div class="col-md-12 form-group">
                                            <Button :form="profileForm" class="btn btn-success">Create</Button>
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
                photo: '',
                password: "",
                allowEmail: false,
            }),
        }
    },
    methods:{
        getProfileInfo(){
            axios.get("/admin/api/get-admin-info")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.role != "super"){
                    this.$router.push({
                        name: "admin-home"
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        profilePictureChange(e){
            const file = e.target.files[0];

            if(file){
                this.profileForm.photo = file;
            } else{
                this.profileForm.photo ='';
            }
        },
        async createProfile(){
            await this.profileForm.post("/admin/api/create-admin").then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                if(data.status == "ok"){
                    swal.fire("Success","New admin was created successfully","success");
                    this.profileForm.reset();
                    $('input[type="file"]').val("");
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