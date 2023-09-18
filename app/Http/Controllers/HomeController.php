<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Blog;

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
        $bestProduct = Product::where(['status' => 'AVAILABLE'])->limit(10)->get();
        $newProduct = Product::where(['status' => 'AVAILABLE'])->orderBy('id', 'DESC')->limit(10)->get();
        $featuredProduct = Product::where(['status' => 'AVAILABLE'])->orderBy('id', 'DESC')->limit(10)->get();
        $combined = $bestProduct->concat($newProduct)->concat($featuredProduct);
        $blog = Blog::where(['status' => 'SHOW'])->limit(4)->get();


        return view('home', compact('bestProduct', 'newProduct', 'featuredProduct', 'blog','combined'));
    }

    public function product(Request $request)
    {

        $newProduct = Product::where(['status' => 'AVAILABLE'])->orderBy('id', 'DESC')->limit(3)->get();
        // Get the sort query parameter from the URL, default to 'default' if not provided
        $sort = $request->query('sort', 'default');

        // Define your default sorting option
        $defaultSort = 'default';

        // Query the products based on the sorting option
        if ($sort === $defaultSort) {
            $product = Product::where(['status' => 'AVAILABLE'])->paginate(9);
        } else {
            // Handle other sorting criteria here
            if ($sort === 'name') {
                $product = Product::where(['status' => 'AVAILABLE'])->orderBy('name', 'ASC')->paginate(9);
            } elseif ($sort === 'name:desc') {
                $product = Product::where(['status' => 'AVAILABLE'])->orderBy('name', 'DESC')->paginate(9);
            } elseif ($sort === 'price') {
                $product = Product::where(['status' => 'AVAILABLE'])->orderBy('price', 'ASC')->paginate(9);
            } elseif ($sort === 'price:desc') {
                $product = Product::where(['status' => 'AVAILABLE'])->orderBy('price', 'DESC')->paginate(9);
            }
        }

        return view('product.index', compact('product', 'sort', 'newProduct'));
    }

    public function view($slug)
    {
        $product = Product::where(['slug' => $slug])->get();
        $bestSeller = Product::where(['status' => 'AVAILABLE'])->orderBy('id', 'DESC')->limit(4)->get();
        $products = Product::where(['status' => 'AVAILABLE'])->get();

        return view('product.view', compact('product', 'bestSeller', 'products'));
    }

    public function search()
    {
        $key = request()->key;
        $newProduct = Product::where(['status' => 'AVAILABLE'])->orderBy('id', 'DESC')->limit(3)->get();
        $product = Product::where('name', 'LIKE', '%' . $key . '%')->where(['status' => 'AVAILABLE'])->paginate(9);
        return view('search', compact('newProduct', 'product'));
    }

    public function about()
    {
        return view('about');
    }

    public function blog()
    {
        $blogs = Blog::orderBy('id', 'DESC')->paginate(10);
        return view('blog.index', compact('blogs'));
    }

    public function blogView($slug)
    {
        $blog = Blog::where(['slug' => $slug])->get();
        return view('blog.view', compact('blog'));
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

    public function error()
    {
        return view('error.404');
    }
}
