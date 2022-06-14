<template>
<div class="row">
    
    <div class="col-12">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Customer List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Home</router-link></li>
                        <li class="breadcrumb-item active">Customer List</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <form class="col-md-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" 
                            placeholder="Search customer..." v-model="searchText">
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-success"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>

                    <div class="col-md-12 mt-3">
                        <h4>List</h4>

                        <div class="row" v-if="isLoading">
                            <div class="col-12 mb-2" v-for="n in 10" :key="n">
                                <skeleton width="100%" height="30px" />
                            </div>
                        </div>

                        <template v-else>
                            <div class="table-responsive">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Customer Name</th>
                                            <th>Phone number</th>
                                            <th>Email</th>
                                            <th>Company Name</th>
                                            <th>Address</th>
                                            <th>Total Machines</th>
                                            <th>Account Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <template v-if="customers.data.length == 0">
                                            <tr>
                                                <td colspan="10" class="text-center text-danger">No customer was found</td>
                                            </tr>
                                        </template>

                                        <template v-else>
                                            <tr v-for="(customer,i) in customers.data" :key="i">
                                                <td>{{ customer.name }}</td>
                                                <td>{{ customer.phone }}</td>
                                                <td>{{ customer.email||'Email not provided' }}</td>
                                                <td>{{ customer.company }}</td>
                                                <td>{{ customer.address }}</td>
                                                <td><b>{{ customer.machine_count }}</b></td>
                                                <td>
                                                    <span v-if="customer.email != ''" class="badge badge-danger">Accoutn not completed</span>
                                                    <span v-else class="badge badge-success">Active</span>
                                                </td>
                                                <td>
                                                    <button class="btn btn-sm btn-success"><i class="fas fa-eye"></i> View</button>
                                                </td>
                                            </tr>
                                        </template>
                                    </tbody>
                                </table>
                            </div>
                        </template>

                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <pagination :data="customers" @pagination-change-page="getAllcustomersList"/>
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
            customers: {},
            moment: moment,
            searchText: "",
            searchMode: false,
        }
    },

    methods : {
        getAllcustomersList(page=1) {
            this.isLoading = true;
            axios.get("/admin/api/get-all-customers-list?page="+page+"&q="+this.searchText).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.customers = data;
                this.isLoading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },

    },

    mounted() {
        this.getAllcustomersList();
    }
}
</script>

<style>

</style>