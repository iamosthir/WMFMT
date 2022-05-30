@extends('customer.layouts.master')

@section('title')
    <title>WMFMT - Customer dashboard</title>
@endsection

@section('content')
    <section class="section">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-md-4 col-sm-4 col-4 mb-4">
                    <a href="{{ route("customer.machine") }}" class="dashboard-item">
                        <div class="holder">
                            <span><i class="fas fa-wrench"></i></span>
                            <p>Machines</p>
                        </div>
                    </a>
                </div>

                <div class="col-md-4 col-sm-4 col-4 mb-4">
                    <a href="#" class="dashboard-item">
                        <div class="holder">
                            <span><i class="fas fa-clock"></i></span>
                            <p>Service Histories</p>
                        </div>
                    </a>
                </div>

                <div class="col-md-4 col-sm-4 col-4 mb-4">
                    <a href="#" class="dashboard-item">
                        <div class="holder">
                            <span><i class="fas fa-user"></i></span>
                            <p>My Profile</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="row justify-content-center mb-5">
                <div class="col-md-6">
                    <a href="#" class="service-request-button">Make a service request</a>
                </div>
            </div>
        </div>
    </section>
@endsection