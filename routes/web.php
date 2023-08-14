<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AdminController;
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
Route::get('/cart', [HomeController::class, 'cart'])->name('cart');
Route::get('/policy/delivery', [HomeController::class, 'delivery'])->name('policy.delivery');
Route::get('/policy/warranty', [HomeController::class, 'warranty'])->name('policy.warranty');
Route::get('/policy/corporation', [HomeController::class, 'corpo'])->name('policy.corpo');
Route::get('/product', [HomeController::class, 'product'])->name('product.index');
Route::get('/product/view', [FlowerController::class, 'view'])->name('product.view');


Route::group(['prefix' => 'user'], function() {
  Route::get('',[CustomerController::class, 'index'])->name('user.account');
  Route::put('',[CustomerController::class, 'update'])->name('user.update');
});

Route::group(['prefix' => 'admin'], function() {
  Route::get('/login',[AdminController::class, 'login'])->name('admin.login');
  Route::post('/login',[AdminController::class, 'postLogin'])->name('admin.login');
  Route::get('/register',[AdminController::class, 'register'])->name('admin.register');
  Route::post('/register',[AdminController::class, 'postRegister'])->name('admin.register');
});

Route::group(['prefix' => 'admin', 'middleware' => ['auth:admin']], function() {
  Route::get('/dashboard',[AdminController::class, 'index'])->name('admin.dashboard');
  Route::get('/register',[AdminController::class, 'register'])->name('admin.register');
  Route::post('/register',[AdminController::class, 'postRegister'])->name('admin.register');
  Route::get('/logout',[AdminController::class, 'logout'])->name('admin.logout');
  Route::prefix('category')->group(function () {
    Route::get('/', [CategoryController::class, 'index'])->name('admin.category.index');
    Route::get('/create', [CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/create', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/delete', [CategoryController::class, 'destroy'])->name('admin.category.delete');
    Route::get('/edit/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::post('/edit/{id}', [CategoryController::class, 'update'])->name('admin.category.update');
    Route::get('/delete/{id}', [CategoryController::class, 'destroy'])->name('admin.category.delete');
  });
  Route::prefix('product')->group(function () {
    Route::get('/', [ProductController::class, 'index'])->name('admin.product.index');
    Route::get('/create', [ProductController::class, 'create'])->name('admin.product.create');
    Route::post('/create', [ProductController::class, 'store'])->name('admin.product.store');
    Route::get('/edit/{id}', [ProductController::class, 'edit'])->name('admin.product.edit');
    Route::post('/edit/{id}', [ProductController::class, 'update'])->name('admin.product.update');
    Route::get('/delete/{id}', [ProductController::class, 'destroy'])->name('admin.product.delete');
  });
});

Route::get('/google/redirect', [LoginController::class, 'redirectGoogle'])->name('login.google');
Route::get('/google/callback', [LoginController::class, 'googleCallback']);

