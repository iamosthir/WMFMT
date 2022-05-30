<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_histories', function (Blueprint $table) {
            $table->id();
            $table->integer("machine_id");
            $table->longText("serviceDate")->nullable();
            $table->string("serviceType");
            $table->longText("description");
            $table->string("techName");
            $table->string("needParts")->default("no");
            $table->string("partsInstalled")->default("no");
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
        Schema::dropIfExists('service_histories');
    }
}
