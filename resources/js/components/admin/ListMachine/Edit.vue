<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0"><router-link :to="{name: 'machine.info', params: {id: $route.params.id}}"><b>{{ form.title }}</b></router-link> - Edit Information</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'machine.all-list'}">Listed Machines</router-link></li>
                        <li class="breadcrumb-item active">Edit Information</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-8">
        <div class="card">
            
            <div class="card-body">
                <form @submit.prevent="updateForm">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <h5>Machine Info</h5>
                                <hr>
                            </div>
                            <div class="form-group">
                                <label>Machine Title</label>
                                <input :class="{'is-invalid' : form.errors.has('title')}" type="text" class="form-control" placeholder="Machine Title..." v-model="form.title">
                                <HasError :form="form" field="title" />
                            </div>

                            <div class="form-group">
                                <label>Mnufacturer</label>
                                <input :class="{'is-invalid' : form.errors.has('manufacturer')}" type="text" class="form-control" placeholder="Manufacturer Name..." v-model="form.manufacturer">
                                <HasError :form="form" field="manufacturer" />
                            </div>

                            <div class="form-group">
                                <label>Model Number</label>
                                <input :class="{'is-invalid' : form.errors.has('model')}" type="text" class="form-control" placeholder="Model Number..." v-model="form.model">
                                <HasError :form="form" field="model" />
                            </div>

                            <div class="form-group">
                                <label>Bottom Serial</label>
                                <input :class="{'is-invalid' : form.errors.has('bottom')}" type="text" class="form-control" placeholder="Bottom Serial Number..." v-model="form.bottom">
                                <HasError :form="form" field="bottom" />
                            </div>

                            <div class="form-group">
                                <label>Top Serial Number</label>
                                <input :class="{'is-invalid' : form.errors.has('top')}" type="text" class="form-control" placeholder="Top Serial Number..." v-model="form.top">
                                <HasError :form="form" field="top" />
                            </div>

                            <div class="form-group">
                                <label>Label Number</label>
                                <input :class="{'is-invalid' : form.errors.has('label')}" type="text" class="form-control" placeholder="Label Number..." v-model="form.label">
                                <HasError :form="form" field="label" />
                            </div>

                            <div class="form-group">
                                <label>Machine Photograph <small>(optional)</small></label>
                                <input type="file" class="form-control-file" accept="image/*" @change="machinePhoto">
                            </div>

                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <h5>Customer Info</h5>
                                <hr>
                            </div>

                            <div class="form-group">
                                <label>Customer Name</label>
                                <input :class="{'is-invalid' : form.errors.has('customerName')}" type="text" class="form-control" placeholder="Customer name..." v-model="form.customerName">
                                <HasError :form="form" field="customerName" />
                            </div>

                            <div class="form-group">
                                <label>Customer Location / Address</label>
                                <input :class="{'is-invalid' : form.errors.has('customerLocation')}" type="text" class="form-control" placeholder="Location / Address..." v-model="form.customerLocation">
                                <HasError :form="form" field="customerLocation" />
                            </div>

                            <div class="form-group">
                                <label>Contact Number</label>
                                <input :class="{'is-invalid' : form.errors.has('customerNumber')}" type="text" class="form-control"
                                 placeholder="Customer name..." v-model="form.customerNumber">
                                <HasError :form="form" field="customerNumber" />
                            </div>

                            <div class="form-group">
                                <label>Customer Photograph <small>(optional)</small></label>
                                <input type="file" class="form-control-file" accept="image/*" @change="customerPhoto">
                            </div>

                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <Button :form="form" class="btn btn-success">Update</Button>
                            </div>
                        </div>

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

            form: new Form({

                machineId: this.$route.params.id,

                title: '',

                manufacturer: '',

                model: '',

                bottom: '',

                top: '',

                label: '',

                machinePhoto: '',

                customerName: '',

                customerLocation: '',

                customerNumber: '',

                customerPhoto: '',
            })

        }
    },

    methods : {

        checkData() {
            axios.get("/admin/api/get-machine-data",{
                params : {
                    machineId: this.$route.params.id
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=> {

                if(data.status == "ok") {


                    this.form.title = data.machineData.title;
                    this.form.manufacturer = data.machineData.manufacturer;
                    this.form.model = data.machineData.model;
                    this.form.top = data.machineData.top_sl;
                    this.form.bottom = data.machineData.bottom_sl;
                    this.form.label = data.machineData.label_number;
                    this.form.customerName = data.machineData.customer_name;
                    this.form.customerLocation = data.machineData.customer_location;
                    this.form.customerNumber = data.machineData.customer_phone;


                }
                else {
                    this.$router.push({
                        name: 'machine.all-list'
                    });
                }

            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: 'machine.all-list'
                });
            });
        },

        machinePhoto(e) {

            let file = e.target.files[0];

            if(file) {
                this.form.machinePhoto = file;
            }
            else {
                this.form.machinePhoto = null;
            }
        },

        customerPhoto(e) {

            let file = e.target.files[0];

            if(file) {

                this.form.customerPhoto = file;

            }
            else {

                this.form.customerPhoto = null;
            }
        },

        updateForm() {

            this.form.post("/admin/api/update-machine-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){ 
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