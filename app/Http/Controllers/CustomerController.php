<?php

namespace App\Http\Controllers;

use App\Models\Machines;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:customer");
    }

    // Customer dashboard
    public function index()
    {
        return view("customer.pages.index");
    }

    public function machinePage()
    {
        return view("customer.pages.my-machines");
    }

    public function getMachineList(Request $req)
    {
        $customerPhone = auth("customer")->user()->phone;

        $machines = Machines::where("customer_phone",$customerPhone)
        ->orderBy("id","desc")->paginate(15);

        return response()->json($machines);
    }


}
