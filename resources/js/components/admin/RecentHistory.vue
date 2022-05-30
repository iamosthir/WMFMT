<template>
<div class="row">
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Recent Service Histories</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Recent Service History</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h4>List</h4>
                <div class="col-12 mt-4">
                    <h6 class="mb-4"><b>Show records in a specific date range</b></h6>
                    <hr>
                    <div class="row">
                        <div class="col-6 col-md-3 form-group">
                            <label for="">Date starts from</label>
                            <input type="date" class="form-control" v-model="startDate">
                        </div>
                        <div class="col-6 col-md-3 form-group">
                            <label for="">Date ends at</label>
                            <input type="date" class="form-control" v-model="endDate">
                        </div>

                        <div class="col-12 form-group">
                            <button @click="triggerFilter" class="btn btn-sm btn-secondary"><i class="fas fa-search"></i> Filter</button>
                        </div>
                    </div>
                </div>
                <hr>

                <div class="row" v-if="isLoading">
                    <div class="col-12 mb-2" v-for="n in 10" :key="n">
                        <skeleton width="100%" height="30px" />
                    </div>
                </div>

                <div class="row" v-else>
                    <div class="w-100 text-right">
                        <button @click="clearSearch" v-if="filterMode" class="btn btn-sm btn-danger ml-2 mr-2"><i class="fas fa-times"></i> Clear Search</button>
                        <button class="btn btn-sm btn-info ml-2 mr-2"
                        data-toggle="modal" data-target="#modal-lg"><i class="fas fa-download"></i> Export Excel</button>
                    </div>
                    <p v-if="!filterMode" class="ml-2">Showing recent results</p>

                    <p v-else-if="filterMode && startDate==''&& endDate!=''" class="ml-2">
                        Showing results before - <b>{{ moment(endDate).format("DD MMMM YYYY") }}</b></p>
                    <p v-else-if="filterMode && startDate!=''&& endDate==''" class="ml-2">
                        Showing results after - <b>{{ moment(startDate).format("DD MMMM YYYY") }}</b></p>
                    <p v-else-if="filterMode && startDate!=''&& endDate!=''" class="ml-2">
                        Showing results from <b>{{ moment(startDate).format("DD MMMM YYYY") }}</b>, to 
                        <b>{{ moment(endDate).format("DD MMMM YYYY") }}</b></p>
                    <div class="col-12 mt-3">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Machine Label</th>
                                        <th>Service Type</th>
                                        <th>Tech Name</th>
                                        <th>Service Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(history,i) in histories" :key="i">
                                        <td>{{ history.id }}</td>
                                        <td><span class="badge badge-primary">{{ history.machine.label_number }}</span></td>
                                        <td>{{ history.serviceType }}</td>
                                        <td>{{ history.techName }}</td>
                                        <td>{{ moment(history.serviceDate).format("DD MMMM YYYY") }}</td>
                                        <td>
                                            <router-link :to="{
                                                name: 'machine.serviceHistory',
                                                params: {
                                                    machineId: history.machine.id,
                                                    serviceId: history.id
                                                }
                                            }"
                                             class="mb-2 btn btn-sm btn-success"><i class="fas fa-eye"></i> View</router-link>
                                             
                                            <router-link :to="{
                                                name: 'machine.info',
                                                params: {
                                                    id: history.machine.id,
                                                }
                                            }"
                                            class="mb-2 btn btn-sm btn-primary">Machine Info</router-link>
                                            
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <pagination :data="paginateData" @pagination-change-page="getHistories"/>
                </div>

            </div>
        </div>
    </div>

    <div class="modal fade" id="modal-lg" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Export current records to Excel</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
                <h6><b>Export options :</b></h6>
                <p>Type : &nbsp; 
                    <span v-if="!filterMode" class="text-primary">Recent Records</span>

                    <span v-else-if="filterMode && startDate==''&& endDate!=''" class="text-primary">
                        Records before - <b>{{ moment(endDate).format("DD MMMM YYYY") }}</b></span>
                    <span v-else-if="filterMode && startDate!=''&& endDate==''" class="text-primary">
                        Records after - <b>{{ moment(startDate).format("DD MMMM YYYY") }}</b></span>
                    <span v-else-if="filterMode && startDate!=''&& endDate!=''" class="text-primary">
                        Records from <b>{{ moment(startDate).format("DD MMMM YYYY") }}</b>, to 
                        <b>{{ moment(endDate).format("DD MMMM YYYY") }}</b></span>
                </p>
                <div class="row mt-5">
                    <div class="col-md-6 form-group mb-3">
                        <label for="">Choose how much data you want to export</label>
                        <select class="form-control">
                            <option value="">Only Current page</option>
                            <option value="">Everything</option>
                        </select>
                    </div>
                    <div class="col-12 form-group mb-3 mt-4">
                        <button class="btn btn-success">Download Excel <i class="fas fa-download"></i></button>
                    </div>
                </div>
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
            histories: [],
            paginateData: {},
            moment: moment,
            startDate: '',
            endDate: '',
            filterMode : false,
        }
    },

    methods: {
        getHistories(page = 1) {
            this.isLoading = true;
            axios.get("/admin/api/get-service-history",{
                params: {
                    page: page,
                    startDate: this.startDate,
                    endDate: this.endDate,
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                this.histories = data.data;
                this.paginateData = data;
                this.isLoading = false;
            }).catch(err=>{
                console.error(err.response.data);
            });
        },

        triggerFilter() {
            if(this.startDate != "" || this.endDate != "")
            {
                this.filterMode = true;
                this.getHistories();
            }
            else
            {
                this.filterMode = false;
                this.getHistories();
            }
        },
        clearSearch() {
            this.filterMode = false;
            this.startDate = "";
            this.endDate = "";
            this.getHistories();
        }
    },

    mounted() {
        this.getHistories();
    }
}
</script>

<style>

</style>