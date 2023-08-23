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
		return redirect()->back()->with('success', 'Add to cart successfully');
	}
	public function update($id, Cart $cart) {
		$quantity = request()->quantity;
		$cart->update($id, $quantity);
		
		return redirect()->route('cart')->with('success', 'Update cart successfully');
	}
	public function delete($id, Cart $cart) {
		$cart->delete($id);
		return redirect()->back()->with('success', 'Delete from cart successfully');
	}
	public function clear() {

	}
}
