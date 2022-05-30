<?php

namespace App\Http\Controllers;

use App\Models\Parts;
use App\Models\ServiceHistory;
use Illuminate\Http\Request;

class PartsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function getRequest()
    {
        $data = ServiceHistory::where("needParts","yes")
        ->where("partsInstalled","no")
        ->with("machine:id,top_sl,bottom_sl,label_number")
        ->get();

        return response()->json($data);
    }

    public function cancelReq(Request $req)
    {
        $this->validate($req,[
            "serviceId"=>"required|numeric|exists:service_histories,id",
        ]);

        $data = ServiceHistory::find($req->serviceId);

        $data->needParts = "no";
        $data->save();

        return [
            "status" => "ok",
            "msg" => "Part request is canceled"
        ];
    }

    public function getServiceData(Request $req)
    {
        if($req->ajax())
        {
            $service = ServiceHistory::with("machine:id,label_number")->find($req->serviceId);
            if($service)
            {
                return [
                    "status" => "ok",
                    "data" => $service
                ];
            }
            else
            {
                return [
                    "status" => "fail"
                ];
            }
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }

    public function addPart(Request $req)
    {
        $this->validate($req,[
            "partName" => "required",
            "status" => "required",
            "serviceId" => "required|numeric|exists:service_histories,id",
            "machineId" => "required|numeric|exists:machines,id"
        ]);

        $part = new Parts();

        $part->name = $req->partName;
        $part->part_number = $req->partNumber;
        $part->service_id = $req->serviceId;
        $part->machine_id = $req->machineId;
        $part->vendor = $req->vendor;
        $part->price = $req->price;
        $part->shipping_cost = $req->shippingCost;
        $part->po = $req->po;
        $part->track_number = $req->trackingNumber;
        $part->status = $req->status;

        $part->save();

        return [
            "status" => "ok",
            "msg" => "Part was added successully"
        ];

    }


    public function getList(Request $req)
    {
        $data = Parts::orderBy("id","desc");

        if($req->q != "")
        {
            $q = $req->q;
            $data->where("track_number",$q);
        }

        $data = $data->with("machine:id,label_number")->paginate(15);

        return response()->json($data);
    }

    public function updatePartStatus(Request $req)
    {
        $this->validate($req,[
            "partId" => "required|numeric|exists:parts,id",
        ]);

        $part = Parts::find($req->partId);

        if($part->status == "need_to_order")
        {
            $part->status = "ordered";
            $msg = "Ordered";
        }
        else if($part->status == "ordered")
        {
            $part->status = "shipped";
            $msg = "Shipped";
        }
        else if($part->status == "shipped")
        {
            $part->status = "installed";
            $msg = "Installed";
        }
        $part->save();

        return [
            "status" => 'ok',
            "msg" => "Part status was changed to $msg",
            "new_status" => $part->status
        ];
    }

    public function delete(Request $req)
    {
        $this->validate($req, [
            "partId" => "required|numeric|exists:parts,id",
        ]);

        $part = Parts::find($req->partId);

        $part->delete();

        return [
            "status" => "ok",
            "msg" => "Part was deleted"
        ];
    }

    public function getData(Request $req)
    {
        if($req->ajax())
        {
            if($data = Parts::with("machine:id,label_number")->find($req->partId))
            {
                return [
                    "status" => "ok",
                    "data" => $data,
                ];
            }
            else
            {
                return [
                    "status" => "fail1"
                ];
            }
        }
        else
        {
            return [
                "status" => "fail2"
            ];
        }
    }

    public function update(Request $req)
    {
        $this->validate($req, [
            "partId" => "required|numeric|exists:parts,id",
            "partName" => "required",
            "status" => "required",
            "serviceId" => "required|numeric|exists:service_histories,id",
        ]);

        $part = Parts::find($req->partId);

        $part->name = $req->partName;
        $part->part_number = $req->partNumber;
        $part->vendor = $req->vendor;
        $part->price = $req->price;
        $part->shipping_cost = $req->shippingCost;
        $part->po = $req->po;
        $part->track_number = $req->trackingNumber;
        $part->status = $req->status;

        $part->save();

        return [
            "status" => "ok",
            "msg" => "Part data was updated"
        ];
    }

    public function completeRequest(Request $req)
    {
        $this->validate($req,[
            "historyId" => "required|numeric|exists:service_histories,id",
        ]);

        $history = ServiceHistory::find($req->historyId);
        $history->partsInstalled = "yes";
        $history->save();

        return [
            "status" => "ok",
            "msg" => "Request updated successfully"
        ];
    }

}
