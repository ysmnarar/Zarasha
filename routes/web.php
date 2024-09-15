<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Customer\CartController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\Admin\CustomerController as AdminCustomerController;
use App\Http\Controllers\CustomerFrontController;
use App\Http\Controllers\FrontController;

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

// Ini Akses Tamu = ga usah login bisa liat landing page
Route::controller(FrontController::class)->group(function () {
    Route::get('/', 'Home');
    Route::get('/about', 'About');
    Route::get('/navbar', 'Navbar');
    Route::get('/breadcrumb', 'Breadcrumb');
    Route::get('/categories', 'Categories');
    Route::get('/categories/product', 'CategoriesProduct');
    Route::get('/cart', 'Cart');
    Route::get('/detail/{id}', 'Detail');
    Route::get('/product', 'Product');
    Route::post('/search', 'SearchProduct');
    Route::get('/formOrder', 'Order');
    Route::get('/success', 'successCO');
    Route::get('/wishlist', 'AddWishlist');
    Route::get('/footer', 'Footer');

    // filter category
    Route::get('/categories/toner', 'Toner');
    Route::get('/categories/facial-wash', 'FacialWash');
    Route::get('/categories/serum', 'Serum');
    Route::get('/categories/moisturizer', 'Moisturizer');
    Route::get('/categories/sunscreen', 'Sunscreen');
    Route::get('/categories/lipbalm', 'Lipbalm');
});

// Ini Route Admin
Route::prefix('admin')->middleware(['auth', 'isAdmin'])->group(function () {
    Route::controller(BaseController::class)->group(function () {
        Route::get('/home', 'Index')->name('index.home');
    });

    Route::controller(CategoryController::class)->group(function () {
        Route::get('/category', 'category')->name('admin.index.category');
        Route::get('/category/form', 'formCategory')->name('admin.form.category');
        Route::post('/add/category', 'addCategory')->name('admin.add.category');
        Route::get('/category/edit/{id}', 'editCategory')->name('admin.edit.category');
        Route::put('/category/update/{id}', 'updateCategory')->name('admin.update.category');
        Route::delete('/category/delete', 'deleteCategory')->name('admin.delete.category');

        // Fitur Search
        Route::get('/category-search', 'searchCategory')->name('category.search');
    });

    Route::controller(ProductController::class)->group(function () {
        Route::get('/product', 'product')->name('admin.index.product');
        Route::get('/product/form', 'formProduct')->name('admin.form.product');
        Route::post('/add/product', 'addProduct')->name('admin.add.product');
        Route::get('/desc/product', 'descProduct')->name('admin.desc.product');
        Route::get('/product/edit/{id}', 'editProduct')->name('admin.edit.product');
        Route::put('/product/update/{id}', 'updateProduct')->name('admin.update.product');
        Route::delete('/product/delete', 'deleteProduct')->name('admin.delete.product');
        
        // Buat filter data product berdasarkan category
        Route::get('/product/toner', 'toner')->name('product.toner');
        Route::get('/product/facial/wash', 'facialWash')->name('product.facial.wash');
        Route::get('/product/serum', 'serum')->name('product.serum');
        Route::get('/product/moisturizer', 'moisturizer')->name('product.moisturizer');
        Route::get('/product/sunscreen', 'sunscreen')->name('product.sunscreen');
        Route::get('/product/lipbalm', 'lipbalm')->name('product.lipbalm');

        // Fitur Search
        Route::get('/product-search', 'searchProduct')->name('product.search');
    });

    Route::controller(AdminCustomerController::class)->group(function () {
        Route::get('/data/customer', 'index')->name('admin.index.data.customer');
        Route::get('/add/customer/form', 'formCustomer')->name('admin.form.customer');
        Route::get('/add/data/customer', 'addCustomer')->name('admin.add.data.customer');
    });

    Route::controller(ChartController::class)->group(function () {
        Route::get('/chart', 'chart')->name('index.chart');
    });
});

// Ini Route Customer
Route::prefix('customer')->middleware(['auth', 'isCustomer'])->group(function () {
    Route::controller(CustomerController::class)->group(function () {
        Route::get('/home', 'index')->name('customer.index');
    });

    Route::controller(CartController::class)->group(function () {
        Route::get('/shopping/cart', 'cart')->name('customer.cart');
        Route::get('/shopping/cart/form', 'formCart')->name('customer.cart.form');
    });

    Route::controller(CustomerFrontController::class)->group(function () {
        Route::get('/landing', 'landing')->name('customer.landing');
    });
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
