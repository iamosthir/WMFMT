<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Machines;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Importer;

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
            $file = $req->file("excel");
            $new_name = "temp_excel_".rand().".".$file->getClientOriginalExtension();
            $file->move(public_path("temp_uploads/excel/"),$new_name);

            // Excel import
            $excel = Importer::make("Excel");
            $excel->load(public_path("temp_uploads/excel/$new_name"));
            
            $isSheet = true;
            $i=1;

            $sheet = array();

            while($isSheet) {
                try {
                    $excel->setSheet($i);
                    $sheetData = $excel->getCollection();
                    array_push($sheet,[
                        "sheet$i" => $sheetData
                    ]);
                    $i++;
                }
                catch(Exception $e) {
                    $isSheet = false;
                }
            }


            return [
                "status" => "ok",
                "data" => $sheet,
                "sheetName" => $new_name
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

    public function importSheet(Request $req)
    {
        $this->validate($req,[
            "customerId" => "required|numeric|exists:customers,id",
            "sheetName" => "required",
        ]);

        $customer = Customer::find($req->customerId);
        if(file_exists(public_path("temp_uploads/excel/".$req->sheetName)))
        {
            $file = public_path("temp_uploads/excel/".$req->sheetName);

            // Excel import
            $excel = Importer::make("Excel");
            $excel->load($file);

            $isSheet = true;
            $i=1;

            $sheet = array();

            while($isSheet) {
                try {
                    $excel->setSheet($i);
                    $sheetData = $excel->getCollection();
                    array_push($sheet,$sheetData);
                    $i++;
                }
                catch(Exception $e) {
                    $isSheet = false;
                }
            }

            $insertQuery = array();

            foreach($sheet as $sh)
            {
                foreach($sh as $i=>$data)
                {
                    if($i != 0)
                    {
                        if($data[0] != "")
                        {
                            array_push($insertQuery,[
                                "title" => $data[1],
                                "manufacturer" => $data[2],
                                "model" => $data[1],
                                "bottom_sl" => $data[3],
                                "label_number" => $data[0],
                                "customer_name" => $customer->name,
                                "customer_location" => $customer->address,
                                "customer_phone" => $customer->phone,
                                "created_at" => Carbon::now(),
                                "updated_at" => Carbon::now()
                            ]);
                        }
                            
                    }
                }
            }

            Machines::insert($insertQuery);

            unlink(public_path("temp_uploads/excel/".$req->sheetName));
            
            return [
                "status" => "ok",
                "msg" => "All the data was imported successfully"
            ];
        }
        else
        {
            return[
                "status" => "ok",
                "msg" => "File couldn't be found on the server"
            ];
        }

    }

    public function getMachine(Request $req)
    {
        $customerPhone = Customer::find($req->customerId)->phone;

        $machines = Machines::where("customer_phone",$customerPhone)
        ->orderBy("id","desc")->paginate(15);

        return response()->json($machines);
    }
}
