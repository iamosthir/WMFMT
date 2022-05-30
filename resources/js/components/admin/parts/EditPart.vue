<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Edit Part</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link :to="{name: 'parts-list'}">Parts List</router-link></li>
                        <li class="breadcrumb-item active">Edit Info</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h4>Edit Informations</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="updatePart">
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <label for="">Service Id</label>
                            <input type="number" class="form-control" disabled
                            v-model="form.serviceId">
                        </div>
                        <div class="col-md-4 form-group">
                            <label for="">Machine Label</label>
                            <input type="text" class="form-control" disabled
                            v-model="form.label">
                        </div>
                    </div>
                    <p>Parts info</p>
                    <hr>
                    <div class="row">
                        <div class="col-md-3 form-group">
                            <label for="">Part name</label>
                            <input :class="{'is-invalid' : form.errors.has('partName')}" type="text" class="form-control" placeholder="Part name..."
                            v-model="form.partName">
                            <HasError :form="form" field="partName" />
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">Part number</label>
                            <input type="text" class="form-control" placeholder="Part number..."
                            v-model="form.partNumber">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">Vendor</label>
                            <input type="text" class="form-control" placeholder="Vendor name..."
                            v-model="form.vendor">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">Price ($)</label>
                            <input type="number" class="form-control" placeholder="Price cost..."
                            v-model="form.price">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">Shipping Cost ($)</label>
                            <input type="text" class="form-control" placeholder="Shippig cost..."
                            v-model="form.shippingCost">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">PO Number</label>
                            <input type="text" class="form-control" placeholder="PO number..."
                            v-model="form.po">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">Tracking Number</label>
                            <input type="text" class="form-control" placeholder="Tracking number..."
                            v-model="form.trackingNumber">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="">Part Status</label>
                            <select :class="{'is-invalid': form.errors.has('status')}" class="form-control"
                            v-model="form.status">
                                <option value="" hidden>Choose Status</option>
                                <option value="need_to_order">Need to order</option>
                                <option value="ordered">Ordered</option>
                                <option value="shipped">Shipped</option>
                                <option value="installed">Installed</option>
                            </select>
                            <HasError :form="form" field="status" />
                        </div>

                        <div class="col-md-12 form-group">
                            <Button :form="form" class="btn btn-success">Update</Button>
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
                partId: null,
                serviceId: null,
                label: null,
                partName: "",
                partNumber: "",
                vendor: "",
                price: "",
                shippingCost: "",
                po: "",
                trackingNumber: "",
                status: "",

            })
        }
    },
    methods : {
        getPartData() {

            axios.get("/admin/api/get-part-data",{
                params: {
                    partId: this.$route.params.partId
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok")
                {
                    this.form.partId = data.data.id;
                    this.form.serviceId = data.data.service_id;
                    this.form.label = data.data.machine.label_number;
                    this.form.partName = data.data.name;
                    this.form.partNumber = data.data.part_number;
                    this.form.vendor = data.data.vendor;
                    this.form.price = data.data.price;
                    this.form.shippingCost = data.data.shipping_cost;
                    this.form.po = data.data.po;
                    this.form.trackingNumber = data.data.track_number;
                    this.form.status = data.data.status;
                } 
                else
                {
                    this.$router.push({
                        name: 'parts-list'
                    });
                }
            }).catch(err=>{
                this.$router.push({
                    name: 'parts-list'
                });
                console.error(err.response.data);
            });

        },

        updatePart() {
            this.form.post("/admin/api/update-part-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok")
                {
                    swal.fire("Success",data.msg,"success");
                    
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    mounted() {
        this.getPartData();
    }
}
</script>

<style>

</style>