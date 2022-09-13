<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Parts Report - {{ $customer->name }}</title>
    <style>
        html {
            font-family: 'Segoe Ui'
        }
        .container {
            max-width: 70%;
            margin: 0 auto;
        }
        .brand {
            text-align: center;
            font-size: 35px;
            color: rgb(15, 139, 63);
            margin: 0;
        }
        .info {
            text-align: center;
        }
        .info p {
            margin: 0;
        }
        .info h4{
            margin: 0; 
        }
        table {
            width: 100%;
            margin-top: 15px;
        }
        tr:nth-child(1){
            background-color: #175ad8;
            color: white;
        }
        tbody tr{
            text-align: center;
        }
        table tbody tr:nth-child(odd) {
            background-color: #d1d1d1;
        }
        .control {
            position: fixed;
            bottom: 0;
            width: 100%;
            border: 1px solid rgba(0,0,0,0.5);
            left: 0;
            padding: 50px 50px;
            background-color: #d1d1d1;
            z-index: 9;
        }
        .mt-500 {
            margin-top: 300px;
        }
        .print, .email {
            border: none;
            outline: none;
            padding: 10px 25px;
            cursor: pointer;
            border-radius: 50px;
        }
        @media print {
            .container {
                max-width: 100%;
            }
            .mt-500 {
                margin-top: 0;
            }
            .control {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="brand">WHFMT</h2>
        <div class="info">
            <h4>Customer : PM</h4>
            <p>The report shows the list of machine which needs part</p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Machine Name</th>
                    <th>Model</th>
                    <th>Label</th>
                    <th>Service Type</th>
                    <th>Description</th>
                    <th>Tech name</th>
                    <th>Request date</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($datas as $data)
                    <tr>
                        <td>{{ $data->machine->title }}</td>
                        <td>{{ $data->machine->model }}</td>
                        <td>{{ $data->machine->label_number }}</td>
                        <td>{{ $data->serviceType }}</td>
                        <td>{{ $data->description }}</td>
                        <td>{{ $data->techName }}</td>
                        <td>{{$data->serviceDate }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="mt-500"></div>
    <div class="control">
        <button onclick="printPage()" class="print">Print</button>
        <a href="/admin/api/customer/5/send-parts-report" class="email">Email this to customer</a>
    </div>
    <script>
        function printPage()
        {
            window.print();
        }
    </script>
</body>
</html>