<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    //
    public function redirectFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function facebookCallback()
    {
            $facebookUser = Socialite::driver('facebook')->user();

            $user = User::updateOrCreate([
                'facebook_id' => $facebookUser->id,
            ], [
                'name' => $facebookUser->name,
                'email' => $facebookUser->email
            ]);
            Auth::login($user);
            return redirect()->route('home');
    } 
}
