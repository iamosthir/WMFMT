<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!DB::table("users")->where("email","super@admin.com")->first())
        {
            DB::table("users")->insert([
                "name" => "Super Admin",
                "email" => "super@admin.com",
                "password" => bcrypt("wmfmtadmin123"),
                "role" => "super",
            ]);
        }
    }
}
