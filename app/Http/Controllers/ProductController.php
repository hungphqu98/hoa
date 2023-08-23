<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $product = Product::search($request->search)->paginate(11);
        } else {
            $product = Product::paginate(11);
        }
        return view('admin.product.index', compact('product'));
    }

    public function create()
    {
        $cat = Category::get();
        return view('admin.product.create', compact('cat'));
    }

    // public function view()
    // {
    //     $Product = Product::where(['status' => 'visible'])->get();
    //     return view('Product.view', compact('Product'));
    // }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif',
            'description' => 'required|string',
            'details' => 'required|string',
            'price' => 'required|numeric|min:0',
            'sale_price' => 'nullable|numeric|min:0',
            'status' => 'required|in:AVAILABLE,UNAVAILABLE',
        ]);

        $image = $request->file('image');
        $getimage = $image->getClientOriginalName();
        $destinationPath = public_path('assets/product');
        $image->move($destinationPath, $getimage);

        $product = new Product();
        $product->name = $request->name;
        $product->slug = $request->slug;
        $product->image = $getimage;
        $product->description = $request->description;
        $product->details = $request->details;
        $product->price = $request->price;
        $product->sale_price = $request->sale_price;
        $product->status = $request->status;
        $product->save();

        // Get the selected category IDs from the form
        $selectedCategoryIds = $request->input('category_ids');

        // Loop through the selected category IDs and create new records in ProductCategory
        foreach ($selectedCategoryIds as $categoryId) {
            ProductCategory::create([
                'product_id' => $product->id,
                'category_id' => $categoryId,
            ]);
        }

        return redirect()->route('admin.product.index')->with('success', 'Product created successfully!');
    }



    public function edit($id)
    {
        $product = Product::where('id', $id)->get();
        $cat = Category::get();
        return view('admin.product.edit', compact('product', 'cat'));
    }

    public function update(Request $request, $id)
    {

        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products,slug,' . $id,
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
            'description' => 'required|string',
            'details' => 'required|string',
            'price' => 'required|numeric|min:0',
            'sale_price' => 'nullable|numeric|min:0',
            'status' => 'required|in:AVAILABLE,UNAVAILABLE',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $getimage = $image->getClientOriginalName();
            $destinationPath = public_path('assets/product');
            $image->move($destinationPath, $getimage);
            $product->image = $getimage;
        }

        $product->name = $request->name;
        $product->slug = $request->slug;
        $product->description = $request->description;
        $product->details = $request->details;
        $product->price = $request->price;
        $product->sale_price = $request->sale_price;
        $product->status = $request->status;
        $product->save();

        // Get the selected category IDs from the form
        $selectedCategoryIds = $request->input('category_ids');

        // Sync the selected category IDs with the existing product-category associations
        $product->productCategory()->sync($selectedCategoryIds);

        return redirect()->route('admin.product.index')->with('success', 'Product updated successfully!');
    }


    public function destroy($id)
    {
        Product::destroy($id);
        return redirect()->route('admin.product.index')->with('success', 'Xóa thành công');
    }
}
