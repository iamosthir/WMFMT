@php
    $booking = $data["bookingData"];
    $admin = $data["admin"];
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body{
            font-family: 'Arial', sans-serif;
        }
        p{
            line-height: 1.5;
        }
        .container{
            width: 600px;
            margin: 0 auto;
            padding: 10px;
        }
        .header{
            display: flex;
            justify-content: space-between;
        }
        .notify-head p{
            font-size: 14px;
            margin: 2px;
        }
        .notify-body{
            border: 1px solid rgba(0,0,0,0.2);
            padding: 30px;
            margin-top: 5px;
        }
        .notify-body p {
            font-size: 16px
        }
        .name {
            font-size: 18px;
            color: #333333;
        }
        .mt-4{
            margin-top: 2rem;
        }
        a.btn{
            text-decoration: none;
            background-color: rgb(212, 0, 46);
            color: white;
            padding: 15px 10px;
            text-align: center;
            display: block;
        }
        .copy{
            color: #757575;
            font-size: 12px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <p>
                WMFMT
            </p>
            <div class="notify-head">
                <p><b>Notification</b></p>
                <p><span class="text-muted">{{ \Carbon\Carbon::now()->format("d F Y, h:i a") }}</span></p>
            </div>
        </div>
        <div class="notify-body">
            <h4 class="name">Hi {{ $admin->name }},</h4>
            <p>There is a new maintanance request you may check.</p>
            <div class="mt-4">
                <p><b>Details</b></p>
                <hr>
                <p>Ticket ID : #{{ $booking->id }}</p>
                <p>Customer name : {{ $booking->customerName }}</p>
                <p>Contact : {{ $booking->phone }}</p>
                <p>Email : {{ $booking->email??"N/A" }}</p>
                <p>Address : {{ $booking->address }}</p>
                <p style="margin-top: 5px">Machine Label : {{ $booking->machine["label_number"] }}</p>
                <p><b>Subject</b> : {{ $booking->subject }}</p>
                <p><b>Description :</b></p>
                <p>{{ $booking->description }}</p>
                <div class="" style="text-align: center;margin-top: 15px;">
                    <a href="{{ url("/admin/home") }}" class="btn">Go to admin panel</a>
                </div>
            </div>
        </div>
        <div class="footer">
            <p class="copy">© 2022 your company name</p>
        </div>
    </div>
</body>
</html>