@extends('customer.layouts.master')

@section('title')
    <title>My machines</title>
@endsection

@section('content')
    <section class="section" id="myMachines">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="custom-card">
                        <h4 class="text-center table-title">My Machines</h4>

                        <div class="search-container">
                            <div class="w-100">
                                <button title="Cancel search" @click="closeSearchBox()" class="close-search"><i class="fas fa-times"></i></button>
                            </div>
                            <div class="input-box">

                                <input @focus="openSearchBox()" @keyup="search"
                                type="search" placeholder="Type model name, label or serial numbers to search..." v-model="searchText">

                                <div class="mt-2 text-center" v-cloak v-if="isSearching">
                                    <div class="spinner-grow  spinner-grow-sm text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-secondary" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-success" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-danger" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-warning" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-info" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-light" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <div class="spinner-grow spinner-grow-sm text-dark" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>
                                      <p>Search in progress...</p>
                                </div>
                            </div>
                            
                            <div class="search-item-box" v-cloak>



                                <template v-if="searchedMachines.length > 0">

                                    <div class="search-item" v-for="(item,i) in searchedMachines" :key="i">
                                        <h6><b>@{{ item.title }}</b></h6>
                                        <p>Manufacturer : @{{ item.manufacturer }}</p>
                                        <p>Model : @{{ item.model }}</p>
                                        <div class="tags">
                                            <span class="bg-success badge badge-pill">Label : @{{ item.label_number }}</span>
                                            <span class="bg-secondary badge badge-pill">Top Sl. : @{{ item.top_sl }}</span>
                                            <span class="bg-warning badge badge-pill">Bottom Sl. : @{{ item.bottom_sl }}</span>
                                        </div>
                                    </div>

                                </template>

                                <template v-else>
                                    <div class="text-center" v-if="searchText=='' && !isSearching">
                                        <p class="text-muted">Type something to start searching</p>
                                    </div>

                                    <div class="text-center" v-if="searchText!='' && !isSearching">
                                        <p class="text-muted"><b>0</b> results found for "@{{ searchText }}"</p>
                                    </div>

                                </template>


                            </div>
                        </div>

                        <div class="table-responsive mt-5">
                            <table class="table table-hover table-bordered custom-table-padding">
                                <thead>                                   
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Manufacturer</th>
                                        <th>Model</th>
                                        <th>Machine Label</th>
                                        <th>Top SL.</th>
                                        <th>Bottom Sl.</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody v-if="!isLoading" v-cloak>
                                    <template v-if="machines.length > 0">
                                        <tr v-for="(machine,i) in machines">
                                            <td>@{{ i+1 }}</td>
                                            <td>@{{ machine.title }}</td>
                                            <td>@{{ machine.manufacturer }}</td>
                                            <td>@{{ machine.model }}</td>
                                            <td><span class="badge bg-secondary">@{{ machine.label_number }}</span></td>
                                            <td><span class="badge bg-info">@{{ machine.top_sl }}</span></td>
                                            <td><span class="badge bg-warning">@{{ machine.bottom_sl }}</span></td>
                                            <td><a :href="'/query/label='+machine.label_number" class="btn btn-sm btn-primary">Ask for service <i class="fas fa-arrow-circle-right"></i></a></td>
                                        </tr>
                                    </template>

                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center text-muted">No machine records found</td>
                                        </tr>
                                    </template>

                                </tbody>
                            </table>
                        </div>

                        <div class="d-flex justify-content-center">
                            <pagination :data="paginateData"  @pagination-change-page="getMachineList" />
                        </div>

                        <div class="text-center" class="mt-5" v-cloak v-if="isLoading">
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <p>Loading data...</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection