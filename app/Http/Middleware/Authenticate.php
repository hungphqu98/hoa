<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        $guard = $request->route()->getAction('guard');
    \Log::info("Guard: $guard");

    if ($guard === 'admin') {
        \Log::info("Redirecting to admin.login");
        return route('admin.login');
    } else {
        \Log::info("Redirecting to login");
        return route('login');
    }
    }
}
