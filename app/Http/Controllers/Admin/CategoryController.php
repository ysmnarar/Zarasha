<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function category(){

        $categories = Category::all();
        
        return view('Admin.Category.category', compact("categories"));
    }

    public function formCategory(){

        return view('Admin.Category.addCategory');
    }

    public function addCategory(Request $request){

        Category::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->route('admin.index.category')->with('Create', "Data $request->name Successfully Added");
    }

    public function editCategory($id){

        $categories = Category::findOrfail($id);

        return view('Admin.Category.editCategory', compact('categories'));
    }

    public function updateCategory(Request $request, Category $category){

        $categories = Category::findOrFail($request->id);
        $categories->name = $request->name;
        $categories->desc = $request->desc;
        $categories->slug = Str::slug($request->name);
        $categories->update();

        return redirect()->route('admin.index.category')
        ->with('Update', "Data $request->name Successfully Update");
    }

    public function deleteCategory(Request $request){

        $categories = Category::findOrFail($request->id);
        $categories->name = $request->name;
        $categories->desc = $request->desc;
        $categories->delete();
        return redirect()->back()->with('Delete', "Data $request->name Successfully Delete");
    }

    public function searchCategory(Request $request){

        if($request->has('search')){
            $categories = Category::where('name','LIKE', '%' .$request->search.'%')->get();
        }else{
            $categories = Category::all();
        }

        return view('Admin.Category.category', compact('categories'));
    }
}
