<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    //
    public function redirectFacebook()
    {
        return Socialite::driver('facebook')->stateless()->redirect();
    }

    public function facebookCallback()
    {
        $facebookUser = Socialite::driver('facebook')->stateless()->user();

        $user = User::where('email', $facebookUser->email)->first();

        if ($user) {
            // If the user with the same email exists, update their Facebook ID and name
            $user->update([
                'facebook_id' => $facebookUser->id,
                'name' => $facebookUser->name,
            ]);
        } else {
            // If no user exists with the same email, create a new user
            $user = User::create([
                'facebook_id' => $facebookUser->id,
                'name' => $facebookUser->name,
                'email' => $facebookUser->email,
                'password' => Hash::make(Str::random(20)), // Generate a random password for the user
            ]);
        }
        Auth::guard('web')->login($user);
        return redirect()->route('home');
    }
    public function redirectGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function googleCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();

        $user = User::where('email', $googleUser->email)->first();

        if ($user) {
            // If the user with the same email exists, update their Facebook ID and name
            $user->update([
                'google_id' => $googleUser->id,
                'name' => $googleUser->name,
            ]);
        } else {
            // If no user exists with the same email, create a new user
            $user = User::create([
                'google_id' => $googleUser->id,
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'password' => Hash::make(str_random(20)), // Generate a random password for the user
            ]);
        }
        Auth::guard('web')->login($user);
        return redirect()->route('home');
    }
}
