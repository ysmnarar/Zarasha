<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Wishlist;
use Log;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function Home()
    {

        return Inertia('Home');
    }
    public function Navbar()
    {

        return Inertia('Navbar');
    }
    public function Footer()
    {

        return Inertia('Footer');
    }

    public function About()
    {

        return Inertia('About');
    }
    public function Breadcrumb()
    {

        return Inertia('Breadcrumbs');
    }
    public function Categories()
    {

        $products = Product::all();

        return Inertia('Categories/Categories', compact('products'));
    }
    public function CategoriesProduct()
    {

        $products = Product::all();

        return Inertia('Categories/CategoriesLogin', compact('products'));
    }
    public function Product(Request $request)
    {

        $products = Product::all();

        // Validasi request jika diperlukan
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
        ]);

        // Simpan data ke database (misalnya, tabel wishlist_items)
        Wishlist::create([
            'user_id' => auth()->id(),
            'product_id' => $request->input('product,id'),
        ]);

        return Inertia('Product', compact('products'));
    }

    public function Order()
    {

        return Inertia('Order');
    }
    public function successCO()
    {

        return Inertia('SuccessCO');
    }
    public function Detail($id)
    {
        $products = Product::findOrFail($id);
        $categories = Category::all();

        return Inertia('Detail', compact('products', 'categories'));
    }
    public function Cart()
    {
        $carts = Cart::with('product')
            ->where('user_id', auth()->user()->id)
            ->latest()
            ->get();
        return inertia('Cart', [
            621, 'products_id' => $carts,
        ]);
    }
    public function AddWishlist()
    {

        return Inertia('Wishlist');
    }

    // Filter Start
    public function Toner()
    {
        $tonerProducts = Product::where('category_id', 'Toner')->get();

        return Inertia('Categories/Toner', compact('tonerProducts'));
    }
    public function FacialWash()
    {
        $facialWash = Product::where('category_id', 'Facial Wash')->get();

        return Inertia('Categories/FacialWash', compact('facialWash'));
    }
    public function Serum()
    {
        $serum = Product::where('category_id', 'Serum')->get();

        return Inertia('Categories/Serum', compact('serum'));
    }
    public function Moisturizer()
    {
        $moisturizer = Product::where('category_id', 'Moisturizer')->get();

        return Inertia('Categories/Moisturizer', compact('moisturizer'));
    }
    public function Sunscreen()
    {
        $sunscreen = Product::where('category_id', 'Sunscreen')->get();

        return Inertia('Categories/Sunscreen', compact('sunscreen'));
    }
    public function Lipbalm()
    {
        $lipbalm = Product::where('category_id', 'Lipbalm')->get();

        return Inertia('Categories/Lipbalm', compact('lipbalm'));
    }

    // Filter End
    public function SearchProduct(Request $request)
    {
        if ($request->q != "") {
            //get products by keywords
            $products = Product::where('name', 'like', '%' . $request->q
                . '%')->get();
        } else {
            $products = [];
        }
        //return response
        return response()->json([
            'products' => $products,
        ]);
    }
}
