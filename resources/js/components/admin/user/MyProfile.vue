<template>
    <section class="section pt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="text-muted">My Profile</h4>
                    </div>
                    <div class="card-body" v-if="is_loading">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center">
                                <skeleton width="100px" height="100px" class="user-img"/>
                            </div>
                            <div class="col-md-12 text-center mt-2">
                                <skeleton width="40%" height="20px"/>
                            </div>
                            <div class="col-md-12 text-center mt-2">
                                <skeleton width="50%" height="20px"/>
                            </div>
                        </div>
                    </div>
                    <!-- skeleton end -->
                    <div class="card-body" v-if="!is_loading">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center">
                                <img v-if="profileData.photo" class="user-img" :src="'/uploads/admin/'+profileData.photo">
                                <img v-else class="user-img" src="/img/portrait-placeholder.png">
                            </div>
                            <!-- Show section -->
                            <div class="col-md-8 text-center mt-5" v-if="!profileEditMode && !passwordEditMode">
                                <h4><strong>{{ profileData.name }}</strong> 
                                    <span v-if="profileData.role == 'super'" class="font-13">(Super Admin)</span>
                                    <span v-else class="font-13">(Tech)</span>
                                </h4>
                                <p class="text-muted">{{ profileData.email }}</p>
                                <button class="btn btn-outline-primary btn-sm" @click="profileEditMode=false;passwordEditMode=true">Change password</button>
                                <button class="btn btn-primary btn-sm" @click="profileEditMode=true;passwordEditMode=false">Edit Profile</button>
                            </div>
                            <!-- End -->

                            <!-- Profile Edit -->
                            <div class="col-md-8" v-if="!passwordEditMode && profileEditMode">
                                <legend>Edit Profile</legend>
                                <form @submit.prevent="updateProfile" id="prfForm">
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
                                            <label for="">Change Photo</label>
                                            <input type="file" class="form-control-file" accept="image/*" @change="profilePictureChange">
                                            <HasError :form="profileForm" field="photo" />
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
                                            <button type="button" class="btn btn-danger" @click="profileEditMode=false;passwordEditMode=false;">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End -->

                            <!-- Password Edit Mode -->
                            <div class="col-md-8" v-if="passwordEditMode && !profileEditMode">
                                <form action="#" @submit.prevent="changePass">
                                    <legend>Change Password</legend>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <label for="">Old Password</label>
                                            <input :class="{'is-invalid' : passwordForm.errors.has('oldPass')}" type="password" placeholder="Old Password" class="form-control" required v-model="passwordForm.oldPass">
                                            <HasError :form="passwordForm" field="oldPass"/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="">New Password</label>
                                            <input :class="{'is-invalid' : passwordForm.errors.has('newPass')}" type="password" placeholder="New Password" class="form-control" required v-model="passwordForm.newPass">
                                            <HasError :form="passwordForm" field="newPass"/>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <label for="">Confirm New Password</label>
                                            <input type="password" placeholder="Confirm New Password" class="form-control" required v-model="passwordForm.newPass_confirmation">
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <Button :form="passwordForm" class="btn btn-success">Change</Button>
                                            <button type="button" @click="profileEditMode=false;passwordEditMode=false" class="btn btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- end -->
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
            profileForm: new Form({
                name: '',
                email : '',
                role: '',
                photo: '',
                allowEmail: false,
            }),
            passwordForm: new Form({
                oldPass: '',
                newPass: '',
                newPass_confirmation: '',
            }),
            profileEditMode: false,
            passwordEditMode: false,
            profileData: {},
        }
    },
    methods:{
        getProfileInfo(){
            axios.get("/admin/api/get-admin-info")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.profileData = data;
                this.profileForm.name = data.name;
                this.profileForm.email = data.email;
                this.profileForm.role = data.role;
                this.profileForm.allowEmail = data.allow_emails=='true'?true:false;
                this.is_loading = false;
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
        async updateProfile(){
            await this.profileForm.post("/admin/api/update-my-profile",{

            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                if(data.status == "ok"){
                    swal.fire("Success","Profile was updated successfully","success");
                    this.is_loading = true;
                    this.profileEditMode = false;
                    this.getProfileInfo();
                    if(data.photo){
                        $('#headerUserImg').attr("src",data.photo);
                    }
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        changePass(){
            this.passwordForm.post("/admin/api/change-my-password")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status=="ok"){
                    swal.fire("Success",data.msg,"success");
                    this.passwordEditMode = false;
                    this.passwordForm.oldPass = "";
                    this.passwordForm.newPass = "";
                    this.passwordForm.newPass_confirmation = "";
                }
            }).catch(err=>{
                console.error(err.response.data);
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