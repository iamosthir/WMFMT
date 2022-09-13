<?php

namespace App\Http\Controllers;

use App\Models\Machines;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function searchMachines(Request $req)
    {
        $searchText = $req->searchText;

        $phone = auth("customer")->user()->phone;

        $machines = Machines::where("customer_phone",$phone)
        ->where("model",$searchText)->orWhere("bottom_sl",$searchText)
        ->orWhere("top_sl",$searchText)->orWhere("label_number",$searchText)
        ->orWhere("manufacturer",$searchText)->get();

        return response()->json($machines);
    }

}
