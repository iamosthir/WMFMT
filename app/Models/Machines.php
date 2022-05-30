<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Machines extends Model
{
    use HasFactory;

    public function lastService()
    {
        return $this->hasOne(\App\Models\ServiceHistory::class,"machine_id")->orderBy("id","desc");
    }
}
