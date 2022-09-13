<?php

namespace App\Http\Controllers;

use App\Models\Machines;
use App\Models\Parts;
use App\Models\ServiceHistory;
use App\Models\ServicePicture;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceHistoryController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function add(Request $req)
    {
        $this->validate($req,[
            "machineId" => "required|exists:machines,id",
            "serviceDate" => "required",
            "serviceType" => "required",
            "techName" => "required",
            "desc" => "required",
        ],[
            "techName.required" => "Please provide the technician name",
            "desc.required" => "Provide some description"
        ]);

        $data = new ServiceHistory();

        $data->machine_id = $req->machineId;
        $data->customer_id = Machines::find($req->machineId)->customer_id;
        $data->serviceDate = $req->serviceDate;
        $data->serviceType = $req->serviceType;
        $data->description = $req->desc;
        $data->techName = $req->techName;

        if($req->needParts == true)
        {
            $data->needParts = "yes";
        }

        $data->save();

        if($req->hasFile("photos"))
        {
            $photos = $req->file("photos");

            foreach($photos as $file)
            {
                $new_name = "service_photo_$req->machineId"."_".rand().".".$file->getClientOriginalExtension();
                
                $file->storeAs("service",$new_name,"privateUpload");

                ServicePicture::insert([
                    "service_id" => $data->id,
                    "img" => $new_name,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now()
                ]);
            }
        }

        return [
            "status" => "ok",
            "msg" => "Service Record Added successfully"
        ];
    }


    public function historyList(Request $req)
    {
        if($req->ajax() && $data = Machines::find($req->machineId))
        {
            $history = ServiceHistory::where("machine_id",$req->machineId)->orderBy("id","desc")->paginate(9);

            return [
                "status" => "ok",
                "data" => $history,
            ];
        }
        else
        {
            return [
                "status" => "fail",
                "msg" => "Access denied"
            ];
        }
    }

    public function delete(Request $req)
    {
        $this->validate($req,[
            "historyId" => "required|exists:service_histories,id",
        ]);

        $data = ServiceHistory::find($req->historyId);

        $photos = ServicePicture::where("service_id",$req->historyId)->get();

        foreach($photos as $photo)
        {
            if(Storage::disk("privateUpload")->exists("/service/$photo->img"))
            {
                Storage::disk("privateUpload")->delete("/service/$photo->img");
            }
            $photo->delete();
        }

        $data->delete();

        return [
            "status" => "ok",
            "msg" => "History record was deleted",
        ];
    }

    public function details(Request $req)
    {
        if($req->machineId && $req->historyId)
        {
            if(Machines::find($req->machineId) && $service = ServiceHistory::with("photos")->find($req->historyId))
            {
                $machine = Machines::find($req->machineId);
                $parts = Parts::where("service_id",$req->historyId)->get();
                return [
                    "status" => "ok",
                    "machine" => $machine,
                    "service" => $service,
                    "parts" => $parts
                ];
            }
            else
            {
                return [
                    "status" => "fail",
                    "msg" => "data not found"
                ];
            } 
        }
        else
        {
            return [
                "status" => "fail",
                "msg" => "param missing"
            ];
        }
    }

    public function deletePhoto(Request $req)
    {
        $this->validate($req,[
            "photoId" => "required|numeric|exists:service_pictures,id"
        ]);

        $photo = ServicePicture::find($req->photoId);

        if(Storage::disk("privateUpload")->exists("/service/$photo->img"))
        {
            Storage::disk("privateUpload")->delete("/service/$photo->img");
        }

        $photo->delete();

        return [
            "status" => "ok",
            "msg" => "Photo was removed"
        ];
    }

    public function update(Request $req)
    {
        $this->validate($req, [
            "machineId" => "required|exists:machines,id",
            "serviceId" => "required|numeric|exists:service_histories,id",
            "serviceDate" => "required",
            "serviceType" => "required",
            "techName" => "required",
            "desc" => "required",
        ], [
            "techName.required" => "Please provide the technician name",
            "desc.required" => "Provide some description"
        ]);

        $data = ServiceHistory::find($req->serviceId);

        $data->machine_id = $req->machineId;
        $data->serviceDate = $req->serviceDate;
        $data->serviceType = $req->serviceType;
        $data->description = $req->desc;
        $data->techName = $req->techName;

        if ($req->needParts == true) 
        {
            $data->needParts = "yes";
        }
        else
        {
            $data->needParts = "no";
        }

        $data->save();

        if ($req->hasFile("photos")) {
            $photos = $req->file("photos");

            foreach ($photos as $file) {
                $new_name = "service_photo_$req->machineId" . "_" . rand() . "." . $file->getClientOriginalExtension();

                $file->storeAs("service", $new_name, "privateUpload");

                ServicePicture::insert([
                    "service_id" => $data->id,
                    "img" => $new_name,
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now()
                ]);
            }
        }

        return [
            "status" => "ok",
            "msg" => "Service Record updated successfully"
        ];
    }


    public function getResult(Request $req)
    {
        $history = ServiceHistory::with("machine:id,label_number");

        $startDate = $req->startDate!=""?Carbon::parse($req->startDate):null;
        $endDate = $req->endDate!=""?Carbon::parse($req->endDate):null;

        if($req->startDate == "" && $req->endDate == "")
        {
            $history = $history->paginate(20);
        }

        // Show result before the date
        else if($req->startDate == "" && $req->endDate != "")
        {
            $history->whereDate("serviceDate", "<=", $endDate)
            ->orderBy("serviceDate", "desc");
            $history = $history->paginate(20);
        }

        // Show result after the starting date
        else if ($req->startDate != "" && $req->endDate == "")
        {
            $history->whereDate("serviceDate", ">=", $startDate)
            ->orderBy("serviceDate", "asc");
            $history = $history->paginate(20);
        }

        // Show results between two dates
        else if($req->startDate != "" && $req->endDate != "")
        {
            $history->whereBetween("serviceDate",[$startDate,$endDate])
            ->orderBy("serviceDate", "asc");
            $history = $history->paginate(20);
        }
        
        return response()->json($history);

    }
}
