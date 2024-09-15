<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;

class CustomerFrontController extends Controller
{
    public function landing(){

        return Inertia('HomeLogin');
    }
    public function search(Request $request){

        if($request->has('search')){
            $products = Product::where('name','LIKE', '%' .$request->search.'%')->get();
        }else{
            $products = Product::all();
        }

        return Inertia('HomeLogin', compact('products'));
    }
}
