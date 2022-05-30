<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Wmfmt - Login</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ ("backend/plugins/fontawesome-free/css/all.min.css") }}">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="{{ ("backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css") }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ ("backend/dist/css/adminlte.min.css") }}">
  <style>
    .login-logo{
        width: 200px;
        height: auto;
    }
  </style>
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      {{-- <a href="#" class="h1"><b>Wmft</b></a> --}}
      <img class="login-logo" src="{{ asset("img/logo.jpeg") }}" alt="">
    </div>
    <div class="card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="input-group mb-3">
          <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" 
          required autocomplete="email" autofocus placeholder="Email / User name">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
        <div class="input-group mb-3">
          <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" 
          required autocomplete="current-password" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <label type="checkbox" id="remember" {{ old('remember') ? 'checked' : '' }}>
                <input type="checkbox" name="remember" id="remember"> Remember Me
              </label>
            </div>
          </div>
        </div>
        <div class="social-auth-links text-center mt-2 mb-3">
            <button type="submit" class="btn btn-block btn-primary">
                Log in
            </button>
        </div>
      </form>

      
      <!-- /.social-auth-links -->

        @if (Route::has('password.request'))
            <p class="mb-1">
                <a href="{{ route("password.request") }}">I forgot my password</a>
            </p>
        @endif

    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="{{ asset("backend/plugins/jquery/jquery.min.js") }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset("backend/plugins/bootstrap/js/bootstrap.bundle.min.js") }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset("backend/dist/js/adminlte.min.js") }}"></script>
</body>
</html>