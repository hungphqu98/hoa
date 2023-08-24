<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $order = Order::search($request->search)->paginate(11);
        } else {
            $order = Order::paginate(11);
        }
        return view('admin.order.index', compact('order'));
    }

    public function edit($id)
    {
        $order = Order::where('id', $id)->get();
        $detail = OrderItem::where('order_id',$id)->join('products','order_items.product_id','products.id')->get();
        return view('admin.order.edit', compact('order','detail'));
    }

    public function update(Request $request, $id)
    {

        $order = Order::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:orders,slug,' . $id,
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif',
            'details' => 'required',
            'status' => 'required|in:SHOW,HIDDEN',
        ]);

        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');
            $getimage = $image->getClientOriginalName();
            $destinationPath = public_path('assets/order');
            $image->move($destinationPath, $getimage);
            $order->image = $getimage;
        }

        $order->title = $request->title;
        $order->slug = $request->slug;
        $order->thumbnail = $getimage;
        $order->details = $request->details;
        $order->status = $request->status;
        $order->save();

        return redirect()->route('admin.order.index')->with('success', 'Order updated successfully!');
    }
}
