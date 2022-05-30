<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use Illuminate\Http\Request;

class ServiceRequestController extends Controller
{
    
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function getPending(Request $req)
    {
        if($req->ajax())
        {
            $data = ServiceRequest::where("status", "pending")->orderBy("id","desc")->limit(10)->get();

            return [
                "status" => "ok",
                "data" => $data
            ];
        }
        else
        {
            return [
                "status" => "permission_denied",
            ];
        }
    }

    public function getPendingAll(Request $req)
    {
        if($req->ajax())
        {
            $bookingType = $req->bookingType;
            $data = ServiceRequest::where("status",$bookingType)
            ->with("machine:id,label_number,bottom_sl,top_sl,model")
            ->orderBy("id","desc")->paginate(10);

            return [
                "status" => "ok",
                "bookingData" => $data
            ];
        }
        else
        {
            return [
                "status" => "permission_denied"
            ];
        }
    }

    public function approve(Request $req)
    {
        $this->validate($req,[
            "serviceId" => "required|numeric|exists:service_requests,id"
        ]);

        $data = ServiceRequest::find($req->serviceId);

        if($data->status == "pending")
        {

            $data->status = "accepted";
            $data->save();

            return [
                "status" => "ok",
                "msg" => "Service request was accepted"
            ];
        }
        else
        {
            return [
                "status" => "fail",
                "msg" => "Failed to perform this operation"
            ];
        }
    }


    public function cancel(Request $req)
    {
        $this->validate($req,[
            "serviceId" => "required|numeric|exists:service_requests,id"
        ]);

        $data = ServiceRequest::find($req->serviceId);

        $data->delete();

        return [
            "status" => "ok",
            "msg" => "The service request was cancelled"
        ];
    }
}
