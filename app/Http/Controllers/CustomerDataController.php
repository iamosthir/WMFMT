<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerDataController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    // Get list
    public function getList(Request $req)
    {
        $customers = Customer::orderBy("id","desc")
        ->withCount("machine")
        ->paginate(15);

        return response()->json($customers);
    }

    public function checkData(Request $req)
    {
        $this->validate($req,[
            "customerId" => "required|numeric|exists:customers,id"
        ]);

        if($customer = Customer::find($req->customerId))
        {
            return [
                "status" => "ok",
                "customer" => $customer
            ];
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }

    public function uploadExcel(Request $req)
    {
        if($req->hasFile("excel"))
        {
            return [
                "status" => "ok",
                "data" => $req->file("excel")
            ];
        }
        else
        {
            return response([
                "status" => "fail",
                "msg" => "File not found"
            ],422);
        }
    }
}
