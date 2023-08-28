<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $blog = Blog::search($request->search)->paginate(11);
        } else {
            $blog = Blog::orderBy('id', 'DESC')->paginate(11);
        }
        return view('admin.blog.index', compact('blog'));
    }

    public function create()
    {
        return view('admin.blog.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blogs',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif',
            'details' => 'required',
            'status' => 'required|in:SHOW,HIDDEN',
        ]);

        $image = $request->file('thumbnail');
        $getimage = $image->getClientOriginalName();
        $destinationPath = public_path('assets/blog');
        $image->move($destinationPath, $getimage);

        $blog = new Blog();
        $blog->title = $request->title;
        $blog->slug = $request->slug;
        $blog->thumbnail = $getimage;
        $blog->details = $request->details;
        $blog->status = $request->status;
        $blog->save();

        return redirect()->route('admin.blog.index')->with('success', 'Blog created successfully!');
    }



    public function edit($id)
    {
        $blog = Blog::where('id', $id)->get();
        return view('admin.blog.edit', compact('blog'));
    }

    public function update(Request $request, $id)
    {

        $blog = Blog::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blogs,slug,' . $id,
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif',
            'details' => 'required',
            'status' => 'required|in:SHOW,HIDDEN',
        ]);

        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');
            $getimage = $image->getClientOriginalName();
            $destinationPath = public_path('assets/blog');
            $image->move($destinationPath, $getimage);
            $blog->image = $getimage;
        }

        $blog->title = $request->title;
        $blog->slug = $request->slug;
        $blog->thumbnail = $getimage;
        $blog->details = $request->details;
        $blog->status = $request->status;
        $blog->save();

        return redirect()->route('admin.blog.index')->with('success', 'Blog updated successfully!');
    }


    public function destroy($id)
    {
        Blog::destroy($id);
        return redirect()->route('admin.blog.index')->with('success', 'Xóa thành công');
    }
}
