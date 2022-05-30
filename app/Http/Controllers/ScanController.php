<?php

namespace App\Http\Controllers;

use App\Models\Machines;
use App\Models\ServiceRequest;
use Illuminate\Http\Request;

class ScanController extends Controller
{

    public function scan(Request $req)
    {
        if ($data = Machines::where("label_number", $req->label)->first()) 
        {
            if(auth()->check())
            {
                return redirect()->to("/admin/listed-machine/view-machine-info/$data->id");
            }
            else
            {
                return view("customer-request")->with(compact("data"));
            }
        } 
        else 
        {
            if(auth()->check())
            {
                return redirect()->to("/admin/machine-not-found/$req->label");
            }
            else
            {
                abort(404);
            }
        }


    }

    public function submitForm(Request $req)
    {
        if($req->ajax())
        {
            $this->validate($req,[
                "machineId" => "required|numeric|exists:machines,id",
                "customerName" => "required",
                "customerPhone" => "required",
                "customerAddress" => "required",
                "subject" => "required",
                "desc" => "required",
            ],[
                "customerName.required" => "Please fill your full name properly !",
                "customerPhone.required" => "Please provide your valid phone number !",
                "customerAddress.required" => "Please provide your address !",
                "subject.required" => "Subject is required !",
                "desc" => "Please explain your complain !"
            ]);

            $service = new ServiceRequest();
            $service->machineId = $req->machineId;
            $service->customerName = $req->customerName;
            $service->phone = $req->customerPhone;
            $service->address = $req->customerAddress;
            $service->subject = $req->subject;
            $service->description = $req->desc;

            $service->save();

            event(new \App\Events\ServiceRequestNotification($service));

            return [
                "status" => "ok",
                "msg" => "Your Service Request was submitted successfully. One of our technician will contact you as soon as possible"
            ];
        }
        else
        {
            return [
                "status" => "permission_denied"
            ];
        }
    }
}
