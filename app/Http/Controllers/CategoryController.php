<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    //
    public function index(Request $request)
    {
        if($request->filled('search')){
            $category = Category::search($request->search)->paginate(11);
        }else{
            $category = Category::paginate(11);
        }
        return view('admin.category.index', compact('category'));
    }

    public function create()
    {
        return view('admin.category.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'status' => 'required|in:SHOW,HIDDEN',
        ]);
    
        $category = new Category();
        $category->name = $request->name;
        $category->slug = $request->slug;
        $category->status = $request->status;
        $category->save();

        return redirect()->route('admin.category.index')->with('success', 'Category created successfully!');
    }

    public function edit($id)
    {
        $category = Category::where('id', $id)->get();
        return view('admin.category.edit', compact('category'));
    }

    public function update(Request $request, $id)
    {

        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories,slug,' . $id,
            'status' => 'required|in:SHOW,HIDDEN',
        ]);

    $category->name = $request->name;
    $category->slug = $request->slug;
    $category->status = $request->status;
    $category->save();

    return redirect()->route('admin.category.index')->with('success', 'Category updated successfully!');
    }

    public function destroy($id)
    {
        Category::destroy($id);
        return redirect()->route('admin.category.index')->with('success', 'Xóa thành công');
    }
}
