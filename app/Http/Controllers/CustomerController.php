<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Validation\Rule;

class CustomerController extends Controller
{
    //
    public function index()
    {
        $user = Auth::user();
        return view('user.account', compact('user'));
    }

    public function order()
    {
        $user = Auth::user();
        $orders = Order::orderBy('id', 'DESC')->where('email', $user->email)->get();
        $detail = OrderItem::whereIn('order_id', $orders->pluck('id'))->join('products','order_items.product_id','products.id')->get();
        return view('user.order', compact('user','orders','detail'));
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        if (!$user instanceof User) {
            return redirect()->back()->with('error', 'User not found.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id),
            ],
            'phone' => 'string|max:255',
            'address' => 'string|max:255'
            // Add other validation rules for other fields if needed
        ]);

        $user->update($request->only(['name', 'email', 'phone', 'address']));
        // Add other fields to update if needed

        return redirect()->back()->with('success', 'User details updated successfully!');
    }
}
