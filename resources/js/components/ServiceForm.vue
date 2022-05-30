<template>
  <form class="myForm" @submit.prevent="submitForm">

        <div class="row" v-if="!formSubmitted">
            <div class="col-12 mb-4">
                <p class="title2">* Please fill all the required fields properly</p>
            </div>
            <div class="col-md-4 mb-4">
                <label for=""><b>Model Number</b></label>
                <input type="text" class="form-control" placeholder="Label Number..." disabled :value="machine.model">
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Manufacturer</b></label>
                <input type="text" class="form-control" placeholder="Manufcaturer name..." disabled :value="machine.manufacturer">
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Label Number *</b></label>
                <input type="text" class="form-control" placeholder="Label Number" disabled :value="machine.label_number">
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Bottom Serial *</b></label>
                <input type="text" class="form-control" placeholder="Bottom Serial ..." disabled :value="machine.bottom_sl">
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Top Serial *</b></label>
                <input type="text" class="form-control" placeholder="Top Serial ..." disabled :value="machine.top_sl">
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Label Number *</b></label>
                <input type="text" class="form-control" placeholder="Label Number..." disabled :value="machine.label_number">
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Your full name *</b></label>
                <input :class="{'is-invalid': form.errors.has('customerName')}" type="text" class="form-control" placeholder="Your name..." v-model="form.customerName">
                <HasError :form="form" field="customerName" />
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Contact Number *</b></label>
                <input :class="{'is-invalid': form.errors.has('customerPhone')}" type="tel" class="form-control" placeholder="Your phone number..." v-model="form.customerPhone">
                <HasError :form="form" field="customerPhone" />
            </div>

            <div class="col-md-4 mb-4">
                <label for=""><b>Email <small>(optional)</small></b></label>
                <input type="email" class="form-control" placeholder="Your email address..." v-model="form.customerEmail">
                
            </div>

            <div class="col-md-6 mb-4">
                <label for=""><b>Your address *</b></label>
                <textarea :class="{'is-invalid': form.errors.has('customerAddress')}" class="form-control" rows="2" placeholder="Your address..." v-model="form.customerAddress"></textarea>
                <HasError :form="form" field="customerAddress" />
            </div>

            <div class="col-md-8 mb-4">
                <label for=""><b>Subject *</b></label>
                <input :class="{'is-invalid': form.errors.has('subject')}" type="text" class="form-control" placeholder="Subject..." v-model="form.subject">
                <HasError :form="form" field="subject" />
            </div>

            <div class="col-md-8 mb-4">
                <label for=""><b>Description *</b></label>
                <textarea :class="{'is-invalid': form.errors.has('desc')}" class="form-control" rows="8" placeholder="Please describe about your request..." v-model="form.desc"></textarea>
                <HasError :form="form" field="desc" />
            </div>

            <div class="col-md-12 mb-4">
                <Button :form="form" type="submit" class="btn btn-success">Submit</Button>
            </div>
        </div>

        <div class="row" v-if="formSubmitted">
            <div class="col-12 text-center success">
                <img src="/img/succeess.png" alt="">
                <h3 class="mt-5">{{ msg }}</h3>
            </div>
        </div>
    </form>
</template>

<script>
export default {

    props: ["machine"],
    data() {
        return {
            form: new Form({
                machineId: this.machine.id,
                customerName: "",
                customerPhone: "",
                customerEmail: "",
                customerAddress: "",
                subject: "",
                desc: "",
            }),

            formSubmitted: false,
            msg: "",
        }
    },
    methods: {

        submitForm() {
            this.form.post("/submit-service-request-form").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    this.formSubmitted = true;
                    this.form.reset();
                    this.msg = data.msg;
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        }

    }
}
</script>

<style>

</style>