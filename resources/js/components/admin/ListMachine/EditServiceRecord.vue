<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Edit Service Record</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link :to="{name: 'machine.all-list'}">Listed Machine</router-link></li>
                            <li class="breadcrumb-item active">Edit Service Record</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <router-link :to="{name: 'machine.serviceHistory', params: {machineId: $route.params.machineId, serviceId: $route.params.serviceId}}" class="btn btn-sm btn-secondary"><i class="fas fa-arrow-left"></i> Go back</router-link>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <h5>Basic Machine Info</h5>
                        <hr>
                        <div class="form-group">
                            <span class="badge badge-pill badge-success font18px mt-3 mr-3">Label : {{ machineData.label_number }}</span>
                            <span class="badge badge-pill badge-primary font18px mt-3 mr-3">Bottom SL : {{ machineData.bottom_sl }}</span>
                            <span class="badge badge-pill badge-secondary font18px mt-3 mr-3">Top SL : {{ machineData.top_sl }}</span>
                        </div>
                    </div>
                </div>

                <form @submit.prevent="submitForm" class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <h5>Service Data</h5>
                            <hr>
                        </div>
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="">Service Date</label>
                        <input :class="{'is-invalid': form.errors.has('serviceDate')}" type="date" class="form-control" v-model="form.serviceDate">
                        <HasError :form="form" field="serviceDate" />
                    </div>

                    <div class="col-md-4 form-group">
                        <label for="">Service Type</label>
                        <select class="form-control" v-model="form.serviceType">
                            <option value="" disabled hidden>Select Service</option>
                            <option value="Diagnostic">Diagnostic</option>
                            <option value="PM">PM</option>
                            <option value="Repair">Repair</option>
                        </select>
                        <HasError :form="form" field="serviceType" />
                    </div>

                    <div class="col-md-4 form-group">
                        <label for="">Technician Name</label>
                        <input :class="{'is-invalid': form.errors.has('techName')}" type="text" class="form-control" placeholder="Technician name..." v-model="form.techName">
                        <HasError :form="form" field="techName" />
                    </div>

                    <div class="col-md-7 form-group">
                        <label for="">Service Description</label>
                        <textarea :class="{'is-invalid': form.errors.has('desc')}" class="form-control" placeholder="Write here..." rows="8" v-model="form.desc"></textarea>
                        <HasError :form="form" field="desc" />
                    </div>

                    <div class="col-md-7 form-group">
                        <label for="parts-check"><input v-model="form.needParts" type="checkbox" id="parts-check"> &nbsp;Mark this for need parts.</label>
                    </div>

                    <div class="col-md-7 form-group">
                        <label for="">Service Photographs</label>
                        <input type="file" class="form-control-file" accept="image/*" multiple @change="fileChange">
                    </div>

                    <div class="col-md-12 form-group">
                        <Button :form="form" type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> Update</Button>
                    </div>
                    

                </form>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            machineData: {},

            form: new Form({
                machineId: this.$route.params.machineId,
                serviceId: this.$route.params.serviceId,
                serviceDate: "",
                serviceType: "",
                techName: authUserName,
                desc: "",
                photos: null,
                needParts: false,
            })
        }
    },

    methods: {
        checkData() {

            axios.get(`/admin/api/service-history-details?machineId=${this.$route.params.machineId}&historyId=${this.$route.params.serviceId}`).then(resp => {
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    this.machineData = data.machine;
                    this.form.serviceDate = data.service.serviceDate;
                    this.form.serviceType = data.service.serviceType;
                    this.form.techName = data.service.techName;
                    this.form.desc = data.service.description;
                    this.form.needParts = data.service.needParts=='yes'?true:false;
                }
                else {
                    this.$router.go(-1);
                }
            }).catch(err=>{
                this.$router.go(-1);
                console.error(err.response.data);
            });

        },

        fileChange(e) {
            let file = e.target.files;

            if(file) {
                this.form.photos = file;
            }
            else {
                this.form.photos = null;
            }
        },

        async submitForm() {
            await this.form.post("/admin/api/update-service-record").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    swal.fire("Success",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },

    mounted() {
        this.checkData();
    }
}
</script>

<style>

</style>