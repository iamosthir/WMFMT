<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Service & Maintanance Request Form</title>
    <link rel="stylesheet" href="{{ asset("css/app.css") }}">
    <link rel="stylesheet" href="{{ asset("css/main.css") }}">
</head>
<body>
    <div class="container" id="customer">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <h4 class="title text-center">Repair & Maintanence Request Form</h4>
            </div>
            <div class="col-md-12">
                <div class="custom-form-card">
                    <service-form :machine="{{ json_encode($data) }}" :user="{{ json_encode(auth('customer')->user()) }}"></service-form>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset("js/app.js") }}"></script>
</body>
</html>