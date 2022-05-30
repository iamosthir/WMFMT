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