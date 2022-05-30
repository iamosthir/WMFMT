<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadFileController extends Controller
{
    public function showFile(Request $req)
    {
        $folder = $req->type;
        $fileName = $req->fileName;
        $filePath = "uploads/$folder/$fileName";

        if(Storage::exists($filePath))
        {
            return Storage::response($filePath);
        }
        else
        {
            return "FILE NOT FOUND";
        }
    }
}
