<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Login your WFMT customer account">
    <title>WFMT - Customer Registration</title>
    <link rel="stylesheet" href="{{ asset("css/bs/bootstrap.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/auth.css") }}">
</head>
<body>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="login-card">
                    <div class="logo">
                        <img src="{{ asset("img/logo.jpeg") }}" alt="Site Logo">
                    </div>
                    <h4 class="title">Register new account</h4>
                    <div class="mt-5 login-form" id="register-form">
                        {{-- Phone verify --}}
                        <div class="row justify-content-center" v-if="formStep==1">
                            <div class="col-md-10 mb-4">
                                <label for="">Your mobile number</label>
                                <input v-model="verifyPhoneForm.phone" type="tel" class="form-control"
                                :class="{'is-invalid' : verifyPhoneForm.errors.has('phone')}"
                                 name="email" placeholder="Phone number...">
                                <has-error :form="verifyPhoneForm" field="phone"></has-error>
                            </div>
                            <div class="col-md-10 mb-4 text-end">
                                <button :form="verifyPhoneForm" @click="verifyPhone" class="btn btn-success">Next</button>
                            </div>
                        </div>
                        {{-- end --}}

                        {{-- Account info collection --}}
                        <div class="row justify-content-center" v-if="formStep==2" v-cloak>
                            <div class="col-md-10 mb-4">
                                <label for="">Full name</label>
                                <input :class="{'is-invalid' : registerForm.errors.has('name')}"
                                 type="text" class="form-control" placeholder="Full name..." v-model="registerForm.name">
                                <has-error :form="registerForm" field="name"></has-error>
                            </div>
                            <div class="col-md-10 mb-4">
                                <label for="">Email</label>
                                <input :class="{'is-invalid' : registerForm.errors.has('email')}"
                                 type="email" class="form-control" placeholder="Email address..." v-model="registerForm.email">
                                <has-error :form="registerForm" field="email"></has-error>
                            </div>
                            <div class="col-md-10 mb-4">
                                <label for="">Address</label>
                                <input :class="{'is-invalid' : registerForm.errors.has('address')}"
                                 type="text" class="form-control" placeholder="Full address..." v-model="registerForm.address">
                                <has-error :form="registerForm" field="address"></has-error>
                            </div>
                            <div class="col-md-10 mb-4">
                                <label for="">Company / Business name <small>(optional)</small></label>
                                <input :class="{'is-invalid' : registerForm.errors.has('company')}"
                                 type="text" class="form-control" placeholder="Company name..." v-model="registerForm.company">
                                <has-error :form="registerForm" field="company"></has-error>
                            </div>
                            <div class="col-md-10 mb-4">
                                <label for="">Password</label>
                                <input type="password" class="form-control" :class="{'is-invalid' : registerForm.errors.has('pswrd')}" 
                                placeholder="Password..." v-model="registerForm.pswrd">
                                <has-error :form="registerForm" field="pswrd"></has-error>
                            </div>
                            <div class="col-md-10 mb-4">
                                <label for="">Confirm password</label>
                                <input type="password" class="form-control" :class="{'is-invalid' : registerForm.errors.has('pswrd')}" 
                                placeholder="Retype your password..." v-model="registerForm.pswrd_confirmation">
                                <has-error :form="registerForm" field="pswrd"></has-error>
                            </div>
                            <div class="col-md-10 mb-4">
                                <button @click="register" class="btn btn-success">Register</button>
                            </div>
                        </div>
                        {{-- End --}}

                        <div class="row justify-content-center">
                            <div class="col-md-10 mb-4">
                                <div class="text-center mt-5">
                                    <a href="{{ route("customer.login") }}" class="btn btn-outline-secondary">Already have an account? Login here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="{{ asset("js/bs/jquery3.6.js") }}"></script>
    <script src="{{ asset("js/bs/bootstrap.min.js") }}"></script>
    <script src="{{ asset("js/app.js") }}"></script>
</body>
</html>