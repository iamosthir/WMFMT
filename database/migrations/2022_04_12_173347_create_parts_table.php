<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parts', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->integer("service_id");
            $table->integer("machine_id");
            $table->string("part_number")->nullable();
            $table->string("vendor")->nullable();
            $table->string("price")->nullable();
            $table->string("shipping_cost")->nullable();
            $table->string("po")->nullable();
            $table->string("track_number")->nullable();
            $table->string("status")->default("need_to_order");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parts');
    }
}
