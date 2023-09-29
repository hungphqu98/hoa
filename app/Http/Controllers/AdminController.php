<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\Order;
use App\Models\User;
use Spatie\Analytics\Facades\Analytics;
use Spatie\Analytics\Period;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class AdminController extends Controller
{
    use AuthenticatesUsers;

    public function index()
    {
        $last30Days = now()->subDays(30);
        $order_count = Order::where('created_at', '>=', $last30Days)->get();
        $cus_count = User::where('created_at', '>=', $last30Days)->get();
        $revenue_count = Order::where('updated_at', '>=', $last30Days)->where('status','DELIVERED')->sum('total_amount');
        $analyticsData = Analytics::fetchVisitorsAndPageViews(Period::months(1));
        return view('admin.dashboard', compact('order_count','cus_count','revenue_count', 'analyticsData'));
    }

    public function login()
    {
        return view('admin.login');
    }

    public function postLogin(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        $remember = $request->filled('remember');

        if (Auth::guard('admin')->attempt($credentials, $remember)) {
            return redirect()->route('admin.dashboard');
        } else {
            return redirect()->route('admin.login')->with('error', 'Sai thông tin đăng nhập');
        }
    }

    public function register()
    {
        return view('admin.register');
    }

    public function postRegister(Request $request)
    {

        Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('admin.login');
    }

    public function logout()
    {
        //logout user
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
}
