<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helper\Cart;
use App\Models\Product;

class CartController extends Controller
{
    public function index(Cart $cart) {
		$bestSeller = Product::where(['status' => 'AVAILABLE'])->orderBy('id','DESC')->limit(4)->get();
		return view('cart', compact('bestSeller'));
	}
	public function add(Cart $cart, $id) {
		$product = Product::find($id);
		$cart->add($product);
		return redirect()->back()->with('success', 'Thêm vào giỏ hàng thành công');
	}
	public function update($id, Cart $cart) {
		$quantity = request()->quantity;
		$cart->update($id, $quantity);
		
		return redirect()->route('cart')->with('success', 'Cập nhật giỏ hàng thành công');
	}
	public function delete($id, Cart $cart) {
		$cart->delete($id);
		return redirect()->back()->with('success', 'Xóa khỏi giỏ hàng thành công');
	}
	public function clear() {

	}
}
