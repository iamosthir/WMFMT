<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');
        $this->middleware("guest:customer")->except("logout");
    }

    public function showCustomerLoginForm()
    {
        return view("customer.auth.login");
    }

    public function customerLogin(Request $req)
    {
        $this->validate($req,[
            "email" => "required|email|exists:customers,email",
            "password" => "required"
        ],[
            "email.required" => "Email is field is missing",
            "email.exists" => "No account exists with this account",
            "password.required" => "Password field is required"
        ]);

        $data = Customer::where("email",$req->email)->first();

        if(Hash::check($req->password,$data->password))
        {
            $credentials = [
                "email" => $req->email,
                "password" => $req->password
            ];

            if(Auth::guard("customer")->attempt($credentials,$req->remember))
            {
                return redirect()->intended("/customer");
            }
            else
            {
                return redirect()->back()->withErrors(["email"=>"Something went wrong. Failed to login"]);
            }
        }
        else
        {
            return redirect()->back()->withErrors(["password"=>"Password is not matching"]);
        }
        
    }

    // public function customerLogout(Request $req)
    // {
    //     Auth::guard("customer")->logout();
    //     return redirect("/");
    // }
}
