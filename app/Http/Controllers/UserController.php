<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index(Request $request)
    {
        if ($request->filled('search')) {
            $user = User::search($request->search)->paginate(11);
        } else {
            $user = User::orderBy('id', 'DESC')->paginate(11);
        }
        return view('admin.user.index', compact('user'));
    }

    public function view($id)
    {
        $user = User::where('id', $id)->get();
        return view('admin.user.edit', compact('user'));
    }
}
