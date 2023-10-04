<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Blog;
use App\Models\Banner;

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
        $banner = Banner::get();


        return view('home', compact('bestProduct', 'newProduct', 'featuredProduct', 'blog', 'combined','banner'));
    }

    public function product(Request $request)
{
    // Get the filter and sort query parameters from the URL
    $filters = $request->query('filters', []);
    $sort = $request->query('sort', 'default');

    // Define your default sorting and filtering options
    $defaultSort = 'default';

    // Query the products based on the sorting option
    $query = Product::where('status', 'AVAILABLE');

    if (in_array('on_sale', $filters)) {
        $query->where('sale_price', '>', 0);
    }

    // Get the selected price range from the request
    $priceFilter = $request->input('price_filter');

    // Define price range values based on user input
    $minPrice = null;
    $maxPrice = null;

    // Set the price range values based on the selected filter option
    if ($priceFilter == '1') {
        $minPrice = 0;
        $maxPrice = 500000;
    } elseif ($priceFilter == '2') {
        $minPrice = 500000;
        $maxPrice = 1000000;
    } elseif ($priceFilter == '3') {
        $minPrice = 1000000;
        $maxPrice = 2000000;
    } elseif ($priceFilter == '4') {
        $minPrice = 2000000;
        $maxPrice = 99999999;
    }

    if ($minPrice !== null && $maxPrice !== null) {
        $query->whereBetween('price', [$minPrice, $maxPrice]);
    }

    // Apply sorting based on the sort option
    if ($sort !== $defaultSort) {
        // Handle sorting criteria here
        if ($sort === 'name') {
            $query->orderBy('name', 'ASC');
        } elseif ($sort === 'name:desc') {
            $query->orderBy('name', 'DESC');
        } elseif ($sort === 'price') {
            $query->orderBy('price', 'ASC');
        } elseif ($sort === 'price:desc') {
            $query->orderBy('price', 'DESC');
        }
    }

    // Paginate the results
    $product = $query->paginate(9);

    // Load your newProduct data
    $newProduct = Product::where(['status' => 'AVAILABLE'])->orderBy('id', 'DESC')->limit(3)->get();

    $banner = Banner::where(['position' => '4'])->get();

    return view('product.index', compact('product', 'sort', 'filters', 'newProduct','banner'));
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

    public function quickview(Request $request)
    {
        $product_id = $request->product_id;
        $product = Product::find($product_id);
        $output['product_quickview_name'] = $product->name;
        if ($product->sale_price > 0) {
            $output['product_quickview_price'] = '<span itemprop="price" class="price">' . number_format($product->sale_price, 0, ',', '.') . 'đ</span> <s class="price text-muted">' . number_format($product->price, 0, ',', '.') . 'đ</s>';
        } else {
            $output['product_quickview_price'] = '<span itemprop="price" class="price">' . number_format($product->price, 0, ',', '.') . 'đ</span>';
        }
        $output['product_quickview_slug'] = $product->slug;
        $output['product_quickview_image'] = '<a href="' . route('product.view', ['slug' => $product->slug]) . '" >
    <img class="js-qv-product-cover-qview" src="' . asset('assets/product/' . $product->image) . '" alt="" title="" itemprop="image">
</a>';
        $output['product_quickview_description'] = $product->description;
        $output['product_quickview_details'] = $product->details;
        $output['product_quickview_cart'] = '<form action="' . route('cart.add', ['id' => $product->id]) . '" class="add-to-cart-or-refresh"> <input value="1" type="hidden">
        <div class="product-add-to-cart">
          <div class="product-quantity">
            <div class="add"> <a href=""><button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit"> Thêm vào giỏ hàng </button></a> </div>
          </div>
          <div class="clearfix"></div>
          <p class="product-minimal-quantity"> </p>
        </div>
      </form>';

        echo json_encode($output);
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
