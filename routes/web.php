<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/setup-db",function(){
    Artisan::call("migrate");
    Artisan::call("db:seed");
    dd("Database is now up");
});

Route::get("/",function(){
    return redirect("/customer");
})->name("home");

Route::get("/query/label={label}","ScanController@scan")->name("qr-scan");

// Customer auth
Route::get("/customer-login","Auth\LoginController@showCustomerLoginForm")->name("customer.login");
Route::post("/customer-login","Auth\LoginController@customerLogin");

Route::get("/customer-registration","Auth\RegisterController@customerRegistrationForm")->name("customer.registration");

Route::post("/customer-verify-phone","Auth\RegisterController@verifyCustomerPhone");
Route::post('/customer-register',"Auth\RegisterController@registerCustomer");

Route::post("/customer-logout",function(){
    Auth::guard("customer")->logout();
    return redirect("/");
})->name("customer.logout");
// 

// Customer route API
Route::group(["prefix"=> "customer","middleware"=>"auth:customer"],function(){

    Route::get("/", "CustomerController@index")->name('customer.home');

    Route::get("/my-machines","CustomerController@machinePage")->name("customer.machine");


    // Customer actions
    Route::group(["prefix"=>"api"],function(){

        // Get customer machines list
        Route::get("/customer-machine-list","CustomerController@getMachineList");

        // search customer machines
        Route::get('/search-machines',"CustomerController@searchMachines");

    });
    
});
// 

Auth::routes(["register"=>false]);
Route::get("/admin", function () {
    return redirect()->to("/admin/home");
});


Route::post("/submit-service-request-form","ScanController@submitForm");

// Admin API
Route::group(["prefix"=>"admin", "middleware" => "auth"],function(){

    Route::any("{any}", "HomeController@admin")->where("any", "^(?!api/.*$).*$");

    
    Route::group(["prefix" => "api"], function (){

        // File request
        Route::get('/resources/photos/{type}/{fileName}',"UploadFileController@showFile")->name("privateFiles");

        // Machine
        Route::post("/add-new-machine-data","MachinesController@addMachine");

        Route::get("/get-all-machine-list","MachinesController@getMachine");

        Route::get("/get-machine-data","MachinesController@getData");

        Route::post("/update-machine-data","MachinesController@update");

        Route::post("/delete-machine","MachinesController@delete");

        // Service histroy
        Route::post("/add-service-record","ServiceHistoryController@add");

        Route::get("/service-history-list","ServiceHistoryController@historyList");

        Route::post("/delete-service-history","ServiceHistoryController@delete");

        Route::get("/service-history-details","ServiceHistoryController@details");

        Route::post("/delete-service-photo","ServiceHistoryController@deletePhoto");

        Route::post("/update-service-record","ServiceHistoryController@update");

        // ##############

        ######## Admin #########
        Route::get("/get-admin-info", "AdminController@adminInfo");
        Route::get("/get-admin-data", "AdminController@getAdminData");
        Route::post("/update-my-profile", "AdminController@updateMyProfile");
        Route::post("/change-my-password", "AdminController@changePass");
        Route::post("/create-admin", "AdminController@create");
        Route::post("/update-admin", "AdminController@update");
        Route::post("/delete-admin", "AdminController@delete");
        Route::get('/get-admin-list', "AdminController@list");
        ######### END ##########


        // Service request
        Route::get("/get-pending-services-limited","ServiceRequestController@getPending");
        Route::get("/get-pending-services-all", "ServiceRequestController@getPendingAll");
        Route::post("/approve-pending-service","ServiceRequestController@approve");
        Route::post("/cancel-pending-service", "ServiceRequestController@cancel");
        // End

        // Service History
        Route::get("/get-service-history","ServiceHistoryController@getResult");
        // End


        // Parst
        Route::get('/get-parts-request-data',"PartsController@getRequest");

        Route::post('/cancel-part-request',"PartsController@cancelReq");

        Route::get("/get-service-data","PartsController@getServiceData");

        Route::post("/add-parts","PartsController@addPart");

        Route::get("/get-all-parts-list","PartsController@getList");

        Route::post("/update-part-status","PartsController@updatePartStatus");

        Route::post("/delete-part","PartsController@delete");

        Route::get("/get-part-data","PartsController@getData");

        Route::post("/update-part-data","PartsController@update");

        Route::post('/complete-part-request',"PartsController@completeRequest");
        // 


        // Customer
        Route::get("/get-all-customers-list", "CustomerDataController@getList");

    });

});
// End
