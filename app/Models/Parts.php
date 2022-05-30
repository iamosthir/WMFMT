<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parts extends Model
{
    use HasFactory;


    public function machine()
    {
        return $this->hasOne(Machines::class,"id","machine_id");
    }
}
