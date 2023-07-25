<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\FlowerController;
use App\Http\Controllers\LoginController;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/policy/delivery', [HomeController::class, 'delivery'])->name('policy.delivery');
Route::get('/policy/warranty', [HomeController::class, 'warranty'])->name('policy.warranty');
Route::get('/policy/corporation', [HomeController::class, 'corpo'])->name('policy.corpo');
Route::get('/product', [HomeController::class, 'product'])->name('product.index');
Route::get('/product/view', [FlowerController::class, 'view'])->name('product.view');

Route::get('/redirect', [LoginController::class, 'redirectFacebook'])->name('login.facebook');
Route::get('/callback', [LoginController::class, 'facebookCallback']);

