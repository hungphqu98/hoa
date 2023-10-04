<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;

class OrderController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $order = Order::search($request->search)->paginate(11);
        } else {
            $order = Order::orderBy('id', 'DESC')->paginate(11);
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

        $order->status = $request->status;
        $order->save();

        return redirect()->route('admin.order.index')->with('success', 'Cập nhật thành công');
    }

    public function destroy($id)
    {
        Order::destroy($id);
        return redirect()->route('admin.order.index')->with('success', 'Xóa thành công');
    }
}
