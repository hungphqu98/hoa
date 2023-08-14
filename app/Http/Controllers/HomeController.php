<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flower;

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
        $flower = Flower::with('flowerImages')->limit(4)->get();

        return view('home', compact('flower'));
    }

    public function product()
    {
        $flower = Flower::with('flowerImages')->limit(4)->get();

        return view('product.index', compact('flower'));
    }

    public function about()
    {
        return view('about');
    }

    public function contact()
    {
        return view('contact');
    }

    public function cart()
    {
        return view('cart');
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
