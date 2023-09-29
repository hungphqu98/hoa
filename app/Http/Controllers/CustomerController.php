<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;

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
        $detail = OrderItem::whereIn('order_id', $orders->pluck('id'))->join('products', 'order_items.product_id', 'products.id')->get();
        return view('user.order', compact('user', 'orders', 'detail'));
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        if (!$user instanceof User) {
            return redirect()->back()->with('error', 'Không tìm thấy khách hàng.');
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
            'phone' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255'
            // Add other validation rules for other fields if needed
        ]);

        $user->update($request->only(['name', 'email', 'phone', 'address']));
        // Add other fields to update if needed

        return redirect()->back()->with('success', 'Thông tin khách hàng cập nhật thành công!');
    }

    public function password(Request $request)
    {
        // Validate the form data
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:8',
            'password_confirmation' => 'required|same:new_password',
        ]);

        $user = Auth::user();

        if (!$user instanceof User) {
            return redirect()->back()->with('error', 'Không tìm thấy khách hàng.');
        }

        // Check if the current password matches the one provided
        if (!Hash::check($request->current_password, $user->password)) {
            return redirect()->back()->withErrors(['error' => 'Mật khẩu hiện tại không đúng'])->withInput();
        }

        // Update the user's password
        $user->password = Hash::make($request->new_password);
        $user->save();

        return redirect()->back()->with('success', 'Mật khẩu thay đổi thành công');
    }
}
