<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Machines;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
        $this->middleware("guest:customer");
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function customerRegistrationForm()
    {
        return view("customer.auth.register");
    }

    public function verifyCustomerPhone(Request $req)
    {
        if($req->ajax())
        {
            $this->validate($req,[
                "phone" => "required|numeric|unique:customers,phone"
            ],[
                "phone.required" => "Give your phone number",
                "phone.numeric" => "Invalid phone number",
                "phone.unique" => "There is already an account with this phone number"
            ]);

            $customerInfo = [
                "customer_name" => "",
                "customer_location" => "",
            ];

            $data = Machines::where("customer_phone",$req->phone)->orderBy("id","desc")
            ->first(["customer_name","customer_location"]);

            if(!empty($data))
            {
                $customerInfo["customer_name"] = $data->customer_name;
                $customerInfo["customer_location"] = $data->customer_location;
            }
            
            return [
                "status" => "ok",
                "customer" => $customerInfo
            ];
        }
        else
        {
            return [
                "status" => "failed",
                "msg" => "Access forbidden"
            ];
        }
    }

    public function registerCustomer(Request $req)
    {
        $this->validate($req,[
            "name" => "required",
            "email" => "required|email|unique:customers,email",
            "phone" => "required|numeric|unique:customers,phone",
            "pswrd" => "required|min:8|confirmed",
            "address" => "required"
        ],[
            "name.required" => "Full name is required",
            "email.required" => "Email is required",
            "email.unique" => "This email is already taken",
            "pswrd.required" => "Please set your password",
            "pswrd.min" => "Password must be 8 digit",
            "pswrd.confirmed" => "Password doesn't mactch",
            "address.required" => "Address is required"
        ]);

        $customer = new Customer();
        $customer->name = $req->name;
        $customer->email = $req->email;
        $customer->phone = $req->phone;
        $customer->password = bcrypt($req->pswrd);
        $customer->address = $req->address;
        $customer->save();

        session()->flash("success","Registration was succesfull");

        return [
            "status" => "ok"
        ];


        
    }
}
