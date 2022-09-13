<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Machines;
use App\Models\ServiceHistory;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Importer;
use PDF;
use Swift_Attachment;

class CustomerDataController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    // Get list
    public function getList(Request $req)
    {
        if($req->count_customer == "all")
        {
            $customers = Customer::orderBy("name","asc")->get(["id","name","phone","address"]);
        }
        else
        {
            $customers = Customer::orderBy("id","desc")
            ->withCount("machine")
            ->paginate(15);
        }

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

    public function createPartsReport($id)
    {
        if($customer = Customer::find($id))
        {
            $datas = ServiceHistory::where("customer_id",$id)->where("needParts","yes")
            ->where("partsInstalled","no")->with("machine:id,title,manufacturer,model,bottom_sl,top_sl,label_number")->get();

            return view("admin.parts-report")->with(compact(
                "customer",
                "datas"
            ));
        }
        else
        {
            abort(404);
        }
    }

    public function sendPdf($id)
    {
        if($customer = Customer::find($id))
        {
            if($customer->email != "" || filter_var($customer->email,FILTER_VALIDATE_EMAIL))
            {
                try {
                    $datas = ServiceHistory::where("customer_id",$id)->where("needParts","yes")
                    ->where("partsInstalled","no")->with("machine:id,title,manufacturer,model,bottom_sl,top_sl,label_number")->get();

                    $pdfData = [
                        "customer" => $customer,
                        "datas" => $datas
                    ];
                    $name = "Parts_report_".$customer->name."_".Carbon::now()->format("Y-m-d").".pdf";
                    $pdf = PDF::loadView("admin.parts-pdf-report",$pdfData)->save(public_path("uploads/pdf/$name"));

                    $html = "<p>Hello $customer->name,</p><p>We have created a report for your machines which needs maintanance and parts. Kindly check the attached report</p>";

                    Mail::send(array(), array(), function($msg) use($customer,$html,$name){
                        $msg->to($customer->email)
                        ->subject("Parts report")
                        ->setBody($html,'text/html')
                        ->attach(Swift_Attachment::fromPath(public_path("uploads/pdf/$name")));
                    });

                    unlink(public_path("uploads/pdf/$name"));
                    
                    session()->flash("success","Email sent");
                    return redirect()->back();

                }
                catch(Exception $e) {
                    session()->flash("error",$e->getMessage());
                    return redirect()->back();
                }
            }
            else
            {
                session()->flash("error","Client email is not valid");
                return redirect()->back();
            }
            
        }
        else
        {
            abort(404);
        }
    }

}
