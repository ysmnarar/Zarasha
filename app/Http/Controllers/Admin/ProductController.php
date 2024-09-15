<?php

namespace App\Http\Controllers\Admin;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function product()
    {

        $products = Product::all();

        return view('Admin.Product.product', compact('products'));
    }

    public function formProduct()
    {

        $category = Category::all();

        return view('Admin.Product.addProduct', compact('category'));
    }

    public function addProduct(Request $request)
    {

        Product::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'category_id' => $request->category_id,
            'inventory' => $request->inventory,
            'price' => $request->price,
            'status' => $request->status,
            'slug' => Str::slug($request->name),
            'img' => $request->file('img')->store('img-product'),
        ]);

        return redirect()->route('admin.index.product')
            ->with('Create', "Successfully Added Data $request->name !");
    }

    public function descProduct($products)
    {

        $products = Product::findOrFail($products->id);

        return view("Admin.Product.descProduct", compact("products"));
    }

    public function editProduct($id)
    {

        $category = Category::all();
        $products = Product::findOrFail($id);

        return view('Admin.Product.editProduct', compact('category', 'products'));
    }

    public function updateProduct(Request $request, $id)
    {

        $products = Product::findOrFail($id);
        if ($request->hasFile('image/storage')) {
            // Upload Image Baru
            $image = $request->file('image/storage');
            $image->storeAs('public/images/storage', $image->hashName());
            // Hapus Foto Lama
            Storage::delete('public/images/storage' . $products->image);
            // Update dengan gambar baru
            $products->update([
                'image' => $image->hashName(),
            ]);
        } else {
            // Kalau misalnya ngga up foto, tetep update data yang lain
            $products->category_id = $request->category_id;
            $products->name = $request->name;
            $products->img = $request->file('img')->store('img');
            $products->slug = Str::slug($request->name);
            $products->price = $request->price;
            $products->inventory = $request->inventory;
            $products->status = $request->status;
            $products->desc = $request->desc;
        }
        // // Menyimpan data perubahan
        $products->update();
        return redirect()->route('admin.index.product')
            ->with('Update', "Data $request->name Success Update");
    }

    public function deleteProduct(Request $request)
    {

        $products = Product::findOrFail($request->id);

        Storage::delete($products->img);
        $products->delete();

        return redirect()->back()
            ->with('Delete', "Data $request->name Successfully Delete");
    }

    // Filter Product From Category
    public function toner()
    {

        $category = Category::all();
        $products = Product::where('category_id', 'Toner')->get();

        return view('Admin.Product.product', compact('products'));
    }
    public function facialWash()
    {

        $category = Category::all();
        $products = Product::where('category_id', 'Facial Wash')->get();

        return view('Admin.Product.product', compact('products'));
    }
    public function serum()
    {

        $category = Category::all();
        $products = Product::where('category_id', 'Serum')->get();

        return view('Admin.Product.product', compact('products'));
    }
    public function moisturizer()
    {

        $category = Category::all();
        $products = Product::where('category_id', 'Moisturizer')->get();

        return view('Admin.Product.product', compact('products'));
    }
    public function sunscreen()
    {

        $category = Category::all();
        $products = Product::where('category_id', 'Sunscreen')->get();

        return view('Admin.Product.product', compact('products'));
    }
    public function lipbalm()
    {

        $category = Category::all();
        $products = Product::where('category_id', 'Lipbalm')->get();

        return view('Admin.Product.product', compact('products'));
    }

    public function searchProduct(Request $request)
    {

        if ($request->has('search')) {
            $products = Product::where('name', 'LIKE', '%' . $request->search . '%')->get();
        } else {
            $products = Product::all();
        }

        return view('Admin.Product.product', compact('products'));
    }
}
