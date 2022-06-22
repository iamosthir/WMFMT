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
                        <li class="breadcrumb-item active">Import Machine</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h4><i class="fas fa-plus"></i> Import Excel Sheet</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="importSheet">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="">Customer Name</label>
                            <input type="text" class="form-control" :value="customerData.name" placeholder="Customer name" disabled>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="">Contact number</label>
                            <input type="text" class="form-control" :value="customerData.phone" placeholder="Contact number" disabled>
                        </div>

                        <div class="col-md-12 form-group mt-5" v-if="uploadProgress>0">
                            <label v-if="uploadProgress < 100" for="">Progress &nbsp;{{ uploadProgress }}%</label>
                            <p v-else class="text-success"> <i class="fas fa-check-circle"></i> Upload complete &nbsp; 100%</p>
                            <div class="progress" v-if="uploadProgress < 100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
                                :aria-valuenow="uploadProgress" aria-valuemin="0" aria-valuemax="100"
                                :style="{width: uploadProgress+'%'}"
                                ></div>
                            </div>
                        </div>

                        <div class="col-md-12 form-group" v-if="!fileErrors.isExcel">
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Invalid File !</strong> You should upload a xls or xlsx file.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="">Upload Excel File</label>
                            <input type="file" class="form-control-file" accept=".xls,.xlsx" @change="uploadExcel" id="excelFile">
                        </div>
                    </div>

                    <div class="row mt-2" v-if="sheetData">
                        <div class="col-md-12">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">

                                <label class="btn btn-outline-primary" v-for="(sheet,i) in sheetData.data" :key="i" :class="{'active' : i==0}">
                                    <input @change="changeSheet(`sheet${i+1}`,i)" type="radio" name="options" :id="'option'+i+1" checked> Sheet {{ i+1 }}
                                </label>

                            </div>
                        </div>
                        <div class="col-md-12 mt-2">
                            <div class="sheet-table">
                                <h5 class="mt-2"><b>Sheet1</b></h5>
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Label number</th>
                                                <th>Model</th>
                                                <th>Name</th>
                                                <th>Manufacturer</th>
                                                <th>Bottom Serial</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(data,i) in tableSheet" :key="i">
                                            <template v-if="i!=0">
                                                <tr v-if="data[0] != ''">
                                                    <td><b>{{ i }}</b></td>
                                                    <td>{{ data[0] }}</td>
                                                    <td>{{ data[1] }}</td>
                                                    <td>{{ data[1] }}</td>
                                                    <td>{{ data[2] }}</td>
                                                    <td>{{ data[3] }}</td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-2" v-if="sheetData">
                        <div class="col-12">
                            <Button :form="importForm" class="btn btn-success" type="submit">Import Data</Button>
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
            customerData: {},

            fileErrors: {
                isExcel: true,
                invalidExcelStructure: false,
            },

            form: new Form({
                excel: null,
            }),

            uploadProgress: 0,

            sheetData: null,

            tableSheet: [],

            importForm: new Form({
                sheetName: "",
                customerId: this.$route.params.customerId,
            }),
        }
    },

    methods: {
        verifyCustomerId(){
            axios.get("/admin/api/check-customer-info",{
                params: {
                    customerId: this.$route.params.customerId
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                
                if(data.status == "ok")
                {
                    this.customerData = data.customer;
                }
                else
                {
                    this.$router.push({
                        name: "customer.list"
                    });
                }

            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: "customer.list"
                });
            })
        },
        uploadExcel(e) {
            var excel = e.target.files[0];
            let allowedExec = ["xls","xlsx"];

            if(excel) {

                let fileType = excel.name.split(".").pop();

                if(allowedExec.includes(fileType))
                {
                    this.form.excel = excel;
                    this.fileErrors.isExcel = true;
                    this.submitForm();
                }
                else
                {
                    this.fileErrors.isExcel = false;
                    $("#excelFile").val("");
                }
            }
            else {
                this.excel = null;
            }
        },

        submitForm(){
            var _self = this;

            this.form.post("/admin/api/upload-excel-sheet",{
                onUploadProgress: function(progressEvent) {
                    var percentCompleted = (progressEvent.loaded * 100) / progressEvent.total

                    _self.uploadProgress=percentCompleted.toFixed(2);
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.sheetData = data;
                this.tableSheet = this.sheetData.data[0].sheet1;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },

        changeSheet(sheet,dataIndex) {
            this.tableSheet = this.sheetData.data[dataIndex][sheet];
        },

        importSheet() {
            this.importForm.sheetName = this.sheetData.sheetName;

            this.importForm.post("/admin/api/import-from-sheet").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok") {
                    swal.fire("Success",data.msg,"success").then(()=>{
                        window.location.reload();
                    });
                }
                else {
                  swal.fire("Failed",data.msg,"error");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    mounted() {
        this.verifyCustomerId();
    }
}
</script>

<style>

</style>