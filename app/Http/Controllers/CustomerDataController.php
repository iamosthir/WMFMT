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
}
