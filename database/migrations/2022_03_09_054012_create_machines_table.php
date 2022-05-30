<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMachinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('machines', function (Blueprint $table) {
            $table->id();
            $table->string("title")->nullable();
            $table->string("manufacturer");
            $table->string("model");
            $table->string("bottom_sl");
            $table->string("top_sl")->nullable();
            $table->string("label_number");
            $table->string("machine_photo")->nullable();
            $table->string("customer_name");
            $table->string("customer_location");
            $table->string("customer_phone")->nullable();
            $table->string("customer_photo")->nullable();
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
        Schema::dropIfExists('machines');
    }
}
