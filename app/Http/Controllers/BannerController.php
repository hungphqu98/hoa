<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;

class BannerController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $banner = Banner::search($request->search)->paginate(11);
        } else {
            $banner = Banner::orderBy('position', 'ASC')->paginate(11);
        }
        return view('admin.banner.index', compact('banner'));
    }

    public function create()
    {
        return view('admin.banner.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'path' => 'nullable',
            'images' => 'required|image|mimes:jpeg,png,jpg,gif',
            'position' => 'required',
        ]);

        $image = $request->file('images');
        $getimage = $image->getClientOriginalName();
        $destinationPath = public_path('assets/banner');
        $image->move($destinationPath, $getimage);

        $banner = new Banner();
        $banner->images = $getimage;
        $banner->path = $request->path;
        $banner->position = $request->position;
        $banner->save();

        return redirect()->route('admin.banner.index')->with('success', 'Tạo thành công');
    }



    public function edit($id)
    {
        $banner = Banner::where('id', $id)->get();
        return view('admin.banner.edit', compact('banner'));
    }

    public function update(Request $request, $id)
    {

        $banner = Banner::findOrFail($id);

        $request->validate([
            'path' => 'nullable',
            'images' => 'required|image|mimes:jpeg,png,jpg,gif',
            'position' => 'required',
        ]);

        if ($request->hasFile('images')) {
            $image = $request->file('images');
            $getimage = $image->getClientOriginalName();
            $destinationPath = public_path('assets/banner');
            $image->move($destinationPath, $getimage);
            $banner->images = $getimage;
        }

        $banner->images = $getimage;
        $banner->path = $request->path;
        $banner->position = $request->position;
        $banner->save();

        return redirect()->route('admin.banner.index')->with('success', 'Cập nhật thành công');
    }


    public function destroy($id)
    {
        Banner::destroy($id);
        return redirect()->route('admin.banner.index')->with('success', 'Xóa thành công');
    }
}
