<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helper\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    //
    public function index(Cart $cart)
    {

        $user = Auth::user();
        return view('checkout', compact('user'));
    }

    public function success()
    {
        return view('checkout_success');
    }

    public function submit(Request $request, Cart $cart)
    {
        $check = $cart->total_price;
        if ($check > 0) {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|max:255',
                'delivery_address' => 'required',
                'phone' => 'required|string',
            ]);
            $order = Order::create([
                'name' => $request->name,
                'delivery_address' => $request->delivery_address,
                'phone' => $request->phone,
                'email' => $request->email,
                'note' => $request->note,
                'total_amount' => $cart->total_price,
            ]); 
                $order_id = $order->id;
                foreach ($cart->items as $product_id => $item) {
                    $quantity = $item['quantity'];
                    $item_price = $item['price'];
                    OrderItem::create([
                        'order_id' => $order_id,
                        'product_id' => $product_id,
                        'item_price' => $item_price,
                        'quantity' => $quantity,
                    ]);
                }

                session(['cart' => '']);
				return redirect()->route('checkout.success')->with('success', 'Tạo đơn hàng thành công');
        } else {
            return redirect()->back()->with('error', 'Giỏ hàng trống');
        }
    }
}
