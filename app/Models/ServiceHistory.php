<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceHistory extends Model
{
    use HasFactory;

    public function photos()
    {
        return $this->hasMany(ServicePicture::class,"service_id");
    }

    public function machine()
    {
        return $this->hasOne(Machines::class,"id","machine_id");
    }
}
