<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Login your WFMT customer account">
    <title>WFMT - Customer Login</title>
    <link rel="stylesheet" href="{{ asset("css/bs/bootstrap.min.css") }}">
    <link rel="stylesheet" href="{{ asset("css/auth.css") }}">
</head>
<body>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                
                

                <div class="login-card">
                    @if(session()->has("success"))
                        <div class="alert alert-success">
                            {{ session()->get("success") }}
                        </div>    
                    @endif
                    
                    <div class="logo">
                        <img src="{{ asset("img/logo.jpeg") }}" alt="Site Logo">
                    </div>

                    <h4 class="title">Customer Login</h4>
                    <div class="mt-3 login-form">
                        <form action="{{ route("customer.login") }}" method="POST">
                            @csrf
                            <div class="row justify-content-center">
                                <div class="col-md-10 mb-4">
                                    <label for="">Email</label>
                                    <input type="email" class="form-control @error("email") is-invalid @enderror" name="email" placeholder="Email..." value="{{ old("email") }}">
                                    @error("email")
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-10 mb-4">
                                    <label for="">Password</label>
                                    <input type="password" class="form-control @error("password") is-invalid @enderror" name="password" placeholder="Password...">
                                    @error("password")
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-10 mb-4">
                                    <input type="checkbox" name="remember" id="remember"><label for="remember" class="ms-2">Remember me</label>
                                </div>
                                <div class="col-md-10 mb-4">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                                <div class="col-md-10 mb-4">
                                    <a href="#">Forgot password ?</a>
                                    <div class="text-center mt-5">
                                        <a href="{{ route("customer.registration") }}" class="btn btn-outline-secondary">Don't have an account? Register here</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="{{ asset("js/bs/jquery3.6.js") }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" 
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="{{ asset("js/bs/bootstrap.min.js") }}"></script>

</body>
</html>