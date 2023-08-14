<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\Rule;

class CustomerController extends Controller
{
    //
    public function index()
    {
        $user = Auth::user();
        return view('user.account', compact('user'));
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
