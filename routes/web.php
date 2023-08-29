<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
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
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/policy/delivery', [HomeController::class, 'delivery'])->name('policy.delivery');
Route::get('/policy/warranty', [HomeController::class, 'warranty'])->name('policy.warranty');
Route::get('/policy/corporation', [HomeController::class, 'corpo'])->name('policy.corpo');
Route::get('/product', [HomeController::class, 'product'])->name('product.index');
Route::get('/product/{slug}', [HomeController::class, 'view'])->name('product.view');
Route::get('/blog', [HomeController::class, 'blog'])->name('blog.index');
Route::get('/blog/{slug}', [HomeController::class, 'blogView'])->name('blog.view');



Route::group(['prefix' => 'cart'], function () {
	Route::get('/', [CartController::class, 'index'])->name('cart');
	Route::get('add/{id}/{quantity?}', [CartController::class, 'add'])->name('cart.add');
	Route::get('update/{id}/{quantity?}',[CartController::class, 'update'])->name('cart.update');
	Route::get('delete/{id}',[CartController::class, 'delete'])->name('cart.delete');
	Route::get('clear', [CartController::class, 'clear'])->name('cart.clear');
});

Route::group(['prefix' => 'checkout'], function () {
	Route::get('/', [CheckoutController::class, 'index'])->name('checkout');
	Route::post('/', [CheckoutController::class, 'submit'])->name('checkout');
	Route::get('/checkout-success', [CheckoutController::class, 'success'])->name('checkout.success');
});


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
  Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web','auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
  });
  Route::get('/dashboard',[AdminController::class, 'index'])->name('admin.dashboard');
  Route::get('/',[AdminController::class, 'index'])->name('admin.dashboard');
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
  Route::prefix('blog')->group(function () {
    Route::get('/', [BlogController::class, 'index'])->name('admin.blog.index');
    Route::get('/create', [BlogController::class, 'create'])->name('admin.blog.create');
    Route::post('/create', [BlogController::class, 'store'])->name('admin.blog.store');
    Route::get('/edit/{id}', [BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::post('/edit/{id}', [BlogController::class, 'update'])->name('admin.blog.update');
    Route::get('/delete/{id}', [BlogController::class, 'destroy'])->name('admin.blog.delete');
  });
  Route::prefix('order')->group(function () {
    Route::get('/', [OrderController::class, 'index'])->name('admin.order.index');
    Route::get('/edit/{id}', [OrderController::class, 'edit'])->name('admin.order.edit');
    Route::post('/edit/{id}', [OrderController::class, 'update'])->name('admin.order.update');
  });
  Route::prefix('user')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('admin.user.index');
    Route::get('/view/{id}', [UserController::class, 'view'])->name('admin.user.view');
  });
  Route::prefix('contact')->group(function () {
    Route::get('/', [ContactController::class, 'index'])->name('admin.contact.index');
    Route::get('/edit/{id}', [ContactController::class, 'edit'])->name('admin.contact.edit');
    Route::post('/edit/{id}', [ContactController::class, 'update'])->name('admin.contact.update');
    Route::get('/delete/{id}', [ContactController::class, 'destroy'])->name('admin.contact.delete');
  });
  Route::prefix('testimonial')->group(function () {
    Route::get('/', [TestimonialController::class, 'index'])->name('admin.testimonial.index');
    Route::get('/create', [TestimonialController::class, 'create'])->name('admin.testimonial.create');
    Route::post('/create', [TestimonialController::class, 'store'])->name('admin.testimonial.store');
    Route::get('/edit/{id}', [TestimonialController::class, 'edit'])->name('admin.testimonial.edit');
    Route::post('/edit/{id}', [TestimonialController::class, 'update'])->name('admin.testimonial.update');
    Route::get('/delete/{id}', [TestimonialController::class, 'destroy'])->name('admin.testimonial.delete');
  });
  
});

Route::get('/google/redirect', [LoginController::class, 'redirectGoogle'])->name('login.google');
Route::get('/google/callback', [LoginController::class, 'googleCallback']);


