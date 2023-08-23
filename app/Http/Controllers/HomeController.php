<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $product = Product::where(['status' => 'AVAILABLE'])->limit(4)->get();

        return view('home', compact('product'));
    }

    public function product()
    {
        $product = Product::where(['status' => 'AVAILABLE'])->paginate();
        $newProduct = Product::where(['status' => 'AVAILABLE'])->orderBy('id','DESC')->limit(3)->get();

        return view('product.index', compact('product','newProduct'));
    }

    public function view($slug)
    {
        $product = Product::where(['slug' => $slug])->get();
        $bestSeller = Product::where(['status' => 'AVAILABLE'])->orderBy('id','DESC')->limit(4)->get();
        $products = Product::where(['status' => 'AVAILABLE'])->get();
        return view('product.view', compact('product','bestSeller','products'));
    }

    public function about()
    {
        return view('about');
    }

    public function contact()
    {
        return view('contact');
    }

    public function delivery()
    {
        return view('policy.delivery');
    }

    public function warranty()
    {
        return view('policy.warranty');
    }

    public function corpo()
    {
        return view('policy.corporation');
    }

}
