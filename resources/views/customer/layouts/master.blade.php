@php
    $route = request()->route()->getName();
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="{{ asset("img/favicon.ico") }}">
    <link rel="stylesheet" href="{{ asset("css/bs/bootstrap.min.css") }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset("css/customer/main.css") }}">
    @yield("title")
</head>
<body>
    {{-- Navbar --}}
    <nav class="navbar navbar-expand-lg bg-light shadow">
        <div class="container">
          <a class="navbar-brand" href="#">
              <img src="{{ asset("img/logo-sm.jpg") }}" alt="" class="logo-img">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                <a class="nav-link @if($route=='customer.home') active @endif" aria-current="page" href="{{ route("customer.home") }}">Dashboard</a>
              </li>

              <li class="nav-item">
                <a class="nav-link @if($route=='customer.machine') active @endif" href="{{ route("customer.machine") }}">My Machines</a>
              </li>
              
              <li class="nav-item">
                <a href="#" class="nav-link @if($route=='customer.service') active @endif">My Services</a>
              </li>

            </ul>
            <div class="d-flex">
                <div class="nav-item dropdown p-0">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Md Sazzad
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Change password</a></li>
                      <li><a class="dropdown-item" href="#">Edit profile</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item text-danger" href="#" onclick="event.preventDefault();document.getElementById('customerLogoutForm').submit();">Logout</a></li>
                      <form action="{{ route("customer.logout") }}" method="POST" id="customerLogoutForm" class="d-none">
                        @csrf
                      </form>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </nav>
    @yield("content")

    <footer class="wm-footer">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="text-white">© WMFMT | All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="{{ asset("js/bs/jquery3.6.js") }}"></script>
    <script src="{{ asset("js/bs/bootstrap.min.js") }}"></script>
    <script src="{{ asset("js/app.js") }}"></script>
</body>
</html>