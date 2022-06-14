<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Machines;
use App\Models\Parts;
use App\Models\ServiceHistory;
use App\Models\ServicePicture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class MachinesController extends Controller
{
    public function addMachine(Request $req)
    {
        $this->validate($req,[
            "title" => "required",
            "manufacturer" => "required",
            "model" => "required",
            "bottom" => "required|unique:machines,bottom_sl",
            "top" => "nullable|unique:machines,top_sl",
            "label" => "required|unique:machines,label_number",
            "customerName" => "required",
            "customerLocation" => "required",
            "customerNumber" => "required",
        ]);

        $machine = new Machines();

        $machine->title = $req->title;
        $machine->manufacturer = $req->manufacturer;
        $machine->model = $req->model;
        $machine->bottom_sl = $req->bottom;
        $machine->top_sl = $req->top;
        $machine->label_number = $req->label;
        $machine->customer_name = $req->customerName;
        $machine->customer_location = $req->customerLocation;
        $machine->customer_phone = $req->customerNumber;

        if($req->hasFile("machinePhoto"))
        {
            $machinephoto = $req->file("machinePhoto");
            $machine_photo_file_name = $req->model."_".$req->label.".".$machinephoto->getClientOriginalExtension();
            $file_path = $machinephoto->storeAs("machines",$machine_photo_file_name, "privateUpload");
            $machine->machine_photo = $machine_photo_file_name;
        }

        if($req->hasFile("customerPhoto"))
        {
            $customerPhoto = $req->file("customerPhoto");
            $customer_photo_file_name = $req->customerName."_".rand().".".$customerPhoto->getClientOriginalExtension();
            $file_path = $customerPhoto->storeAs("customer",$customer_photo_file_name,"privateUpload");
            $machine->customer_photo = $customer_photo_file_name;
        }

        if(!Customer::where("phone",$req->customerNumber)->first())
        {
            $customer = new Customer();
            $customer->name = $req->customerName;
            $customer->phone = $req->customerNumber;
            $customer->password = bcrypt("password##123");
            $customer->save();
        }
        
        $machine->save();
        

        return [
            "status" => "ok",
            "msg" => "Data was added successfully"
        ];
    }

    public function getMachine(Request $req)
    {
        if($req->ajax())
        {
            $search = $req->q;

            if($search == "")
            {
                $machines = Machines::orderBy("id", "desc")->with("lastService:id,machine_id,created_at")->paginate(20);
            }
            else
            {
                $machines = Machines::orderBy("id", "desc")
                ->where("top_sl",$search)->orWhere("bottom_sl",$search)
                ->orWhere("label_number")->orWhere("model",$search)
                ->orWhere("customer_name","%$search%")
                ->orWhere("customer_phone")
                ->with("lastService:id,machine_id,created_at")
                ->paginate(20);
            }

            return response()->json($machines);
        }
        else
        {
            return [
                "status" => "fail",
                "message" => "Request denied from the server"
            ];
        }
    }

    public function getData(Request $req)
    {
        if($data = Machines::find($req->machineId))
        {

            $parts = Parts::where("machine_id",$req->machineId)->where("status","installed")->get();

            return [
                "status" => "ok",
                "machineData" => $data,
                "parts" => $parts,
            ];
        }
        else
        {
            return [
                "status" => "fail" 
            ];
        }
    }

    public function update(Request $req)
    {
        $this->validate($req,[
            "machineId" => "required|numeric|exists:machines,id",
            "title" => "required",
            "manufacturer" => "required",
            "model" => "required",
            "bottom" => "required|unique:machines,bottom_sl,$req->machineId,id",
            "top" => "required|unique:machines,top_sl,$req->machineId,id",
            "label" => "required|unique:machines,label_number,$req->machineId,id",
            "customerName" => "required",
            "customerLocation" => "required",
            "customerNumber" => "required",
        ]);

        $data = Machines::find($req->machineId);

        $data->title = $req->title;
        $data->manufacturer = $req->manufacturer;
        $data->model = $req->model;
        $data->bottom_sl = $req->bottom;
        $data->top_sl = $req->top;
        $data->label_number = $req->label;
        $data->customer_name = $req->customerName;
        $data->customer_location = $req->customerLocation;
        $data->customer_phone = $req->customerNumber;

        if($req->hasFile("machinePhoto"))
        {
            if($data->machine_photo != "")
            {
                if(Storage::disk("privateUpload")->exists("/machines/$data->machine_photo"))
                {
                    Storage::disk("privateUpload")->delete("/machines/$data->machine_photo");
                }
            }

            $machinephoto = $req->file("machinePhoto");
            $machine_photo_file_name = $req->model . "_" . $req->label . "." . $machinephoto->getClientOriginalExtension();
            $file_path = $machinephoto->storeAs("machines", $machine_photo_file_name, "privateUpload");
            $data->machine_photo = $machine_photo_file_name;
        }

        if ($req->hasFile("customerPhoto")) {

            if($data->customer_photo != "")
            {
                if(Storage::disk("privateUpload")->exists("/customer/$data->customer_photo"))
                {
                    Storage::disk("privateUpload")->delete("/customer/$data->customer_photo");
                }
            }

            $customerPhoto = $req->file("customerPhoto");
            $customer_photo_file_name = $req->customerName . "_" . rand() . "." . $customerPhoto->getClientOriginalExtension();
            $file_path = $customerPhoto->storeAs("customer", $customer_photo_file_name, "privateUpload");
            $data->customer_photo = $customer_photo_file_name;
        }
        
        $data->save();

        return [
            "status" => "ok",
            "msg" => "Data was updated successfull"
        ];
    }


    public function delete(Request $req)
    {
        if($req->ajax())
        {
            $this->validate($req,[
                "machineId" => "required|numeric|exists:machines,id"
            ]);

            $machine = Machines::find($req->machineId);

            if(Storage::disk("privateUpload")->exists("/machines/$machine->machine_photo"))
            {
                Storage::disk("privateUpload")->delete("/machines/$machine->machine_photo");
            }

            if(Storage::disk("privateUpload")->exists("/customer/$machine->customer_photo"))
            {
                Storage::disk("privateUpload")->delete("/customer/$machine->customer_photo");
            }

            // Delete service Records
            $services = ServiceHistory::where("machine_id",$machine->id)->get();
            foreach($services as $service)
            {
                $serviceImages = ServicePicture::where("service_id",$service->id)->get();
                // Delete Images
                foreach($serviceImages as $img)
                {
                    if(Storage::disk("privateUpload")->exists("/service/$img->img"))
                    {
                        Storage::disk("privateUpload")->delete("/service/$img->img");
                    }
                    $img->delete();
                }
                $service->delete();
            }

            $machine->delete();

            return [
                "status" => "ok",
                "msg" => "Machine was deleted"
            ];

        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }
}
