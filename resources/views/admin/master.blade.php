<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dashboard</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset("backend/plugins/fontawesome-free/css/all.min.css") }}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset("backend/dist/css/adminlte.min.css") }}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{ asset("backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css") }}">

  {{-- Custom css --}}
  <link rel="stylesheet" href="{{ asset("backend/dist/css/custom.css") }}">

  <link rel="icon" type="image/x-icon" href="{{ asset("img/favicon.ico") }}">

</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper" id="admin">
  <vue-progress-bar></vue-progress-bar>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu"
         href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

      {{-- Notification --}}
      <admin-notification></admin-notification>
      {{-- End --}}

      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">

        <a class="nav-link" data-toggle="dropdown" href="#">
          @if(auth()->user()->photo != "")
          <img class="profile-thumb" src="{{ asset("uploads/admin/".auth()->user()->photo) }}" alt="">
          @else
          <img class="profile-thumb" src="{{ asset("img/portrait-placeholder.png") }}" alt="">
          @endif
        </a>
        
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">

          <router-link :to="{name: 'profile'}" class="dropdown-item"><i class="fas fa-user"></i> &nbsp;Profile</router-link>
          
          @if(auth()->user()->role == "super")
          <router-link :to="{name: 'admin-list'}" class="dropdown-item"><i class="fas fa-user-friends"></i> &nbsp;User List</router-link>
          @endif

          <a href="#" class="dropdown-item text-danger" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i class="fas fa-sign-out-alt"></i> &nbsp;Logout</a>

          <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
              @csrf
          </form>
        </div>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" 
        data-controlsidebar-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link :to="{name: 'dashboard'}" class="brand-link">
      <img src="{{ asset("backend/dist/img/AdminLTELogo.png") }}" 
      alt="AdminLTE Logo" class="brand-image img-circle elevation-3" 
      style="opacity: .8">
      <span class="brand-text font-weight-light">Dashboard</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          @if(auth()->user()->photo != "")
          <img src="{{ asset("uploads/admin/".auth()->user()->photo) }}" class="img-circle elevation-2" alt="User Image">
          @else
          <img src="{{ asset("img/portrait-placeholder.png") }}" class="img-circle elevation-2" alt="User Image">
          @endif
        </div>
        <div class="info">
          <router-link :to="{name: 'profile'}" class="d-block">{{ auth()->user()->name }}</router-link>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <!-- <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> -->


          <li class="nav-header">Dashboard</li>

          <li class="nav-item">
            <router-link :to="{name: 'dashboard'}" class="nav-link">
              <i class="nav-icon fas fa-home"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'add-machine'}" class="nav-link">
              <i class="nav-icon fas fa-plus"></i>
              <p>
                New Machine
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'list-machine'}" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
                Listed Machines
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'recent-service'}" class="nav-link">
              <i class="nav-icon far fa-clock"></i>
              <p>
                Recent Maintanance
              </p>
            </router-link>
          </li>

          @php
              $countPartsReq = count(\App\Models\ServiceHistory::where("needParts","yes")->where("partsInstalled","no")->get());
          @endphp
          <li class="nav-item">
            <router-link :to="{name: 'parts-request'}" class="nav-link">
              <i class="nav-icon far fa-clock"></i>
              <p>
                Parts Request @if($countPartsReq > 0) <span id="partReqCount" class="badge badge-danger">{{ $countPartsReq }}</span> @endif
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'parts-list'}" class="nav-link">
              <i class="nav-icon fas fa-list"></i>
              <p>
                All Parts
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name: 'customer.list'}" class="nav-link">
              <i class="nav-icon fas fa-user"></i>
              <p>
                Customers
              </p>
            </router-link>
          </li>


        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2022 <a href="{{ url("/") }}">WMFMT.com</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> {{ env("APP_VERSION") }}
    </div>
    <div>
      Developed By <a target="_blank" href="https://www.freelancer.com.bd/u/mdeasinislam6">Md Sazzad</a>
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="{{ asset("backend/plugins/jquery/jquery.min.js") }}"></script>
<script src="{{ asset("js/app.js") }}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ asset("backend/plugins/jquery-ui/jquery-ui.min.js") }}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="{{ asset("backend/plugins/bootstrap/js/bootstrap.bundle.min.js") }}"></script>

<!-- overlayScrollbars -->
<script src="{{ asset("backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js") }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset("backend/dist/js/adminlte.js") }}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{ asset("backend/dist/js/demo.js") }}"></script>
<script>
  window.authUserName = "{{ auth()->user()->name }}";
</script>
</body>
</html>