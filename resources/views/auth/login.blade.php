<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Zarasha</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="../../vendors/feather/feather.css">
    <link rel="stylesheet" href="../../vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="../../css/vertical-layout-light/style.css">
    <!-- endinject -->
    <link rel="shortcut icon" href="../../image/logozarashanobg.png" />
</head>

<body>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth px-0">
                <div class="row w-100 mx-0">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div class="brand-logo">
                                <img src="../../image/logozarashanobg.png" alt="logo"
                                    class="align-content-center">
                            </div>
                            <h4 class="text-center">Have An Account?</h4>
                            <h6 class="font-weight-light text-center">Login here !
                            </h6>
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="mb-3 inputan">
                                    <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                    <input type="email" name="email" class="form-control"
                                        @error('email') is-invalid @enderror value="{{ old('email') }}"
                                        id="exampleInputEmail1" aria-describedby="emailHelp">
                                    @error('email')
                                        <div id="emailHelp" class="form-text error" role="alert">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                                <div class="mb-3 inputan">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control"
                                        @error('password') is-invalid @enderror value="{{ old('password') }}"
                                        id="exampleInputPassword1">
                                    @error('password')
                                        <div id="passwordHelp" class="form-text error" role="alert">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                                <div class="text-center mt-3" style="margin-bottom: 100px;">
                                    <a href="{{ route('register') }}">Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="../../vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="../../js/off-canvas.js"></script>
    <script src="../../js/hoverable-collapse.js"></script>
    <script src="../../js/template.js"></script>
    <script src="../../js/settings.js"></script>
    <script src="../../js/todolist.js"></script>
    <!-- endinject -->
</body>

</html>
