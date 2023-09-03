<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $testimonial = Testimonial::search($request->search)->paginate(11);
        } else {
            $testimonial = Testimonial::orderBy('id', 'DESC')->paginate(11);
        }
        return view('admin.testimonial.index', compact('testimonial'));
    }

    public function create()
    {
        return view('admin.testimonial.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'images' => 'required|image|mimes:jpeg,png,jpg,gif',
            'status' => 'required|in:SHOW,HIDDEN',
        ]);

        $image = $request->file('images');
        $getimage = $image->getClientOriginalName();
        $destinationPath = public_path('assets/');
        $image->move($destinationPath, $getimage);

        $testimonial = new Testimonial();
        $testimonial->name = $request->name;
        $testimonial->images = $getimage;
        $testimonial->status = $request->status;
        $testimonial->save();

        return redirect()->route('admin.testimonial.index')->with('success', 'Tạo thành công');
    }



    public function edit($id)
    {
        $testimonial = Testimonial::where('id', $id)->get();
        return view('admin.testimonial.edit', compact('testimonial'));
    }

    public function update(Request $request, $id)
    {

        $testimonial = Testimonial::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required|in:SHOW,HIDDEN',
        ]);

        if ($request->hasFile('images')) {
            $image = $request->file('images');
            $getimage = $image->getClientOriginalName();
            $destinationPath = public_path('assets/');
            $image->move($destinationPath, $getimage);
            $testimonial->image = $getimage;
        }

        $testimonial->name = $request->name;
        $testimonial->images = $getimage;
        $testimonial->status = $request->status;
        $testimonial->save();

        return redirect()->route('admin.testimonial.index')->with('success', 'Cập nhật thành công');
    }


    public function destroy($id)
    {
        Testimonial::destroy($id);
        return redirect()->route('admin.testimonial.index')->with('success', 'Xóa thành công');
    }
}
