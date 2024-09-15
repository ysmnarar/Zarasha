<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Helpers\MessageHelper;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryApiController extends Controller
{
    public function index()
    {

        $category = Category::get()->map(function ($category) {
            return $this->format($category);
        });
        return $this->respons($category);
    }

    public function add(Request $request)
    {

        $validasi = Validator::make($request->all(), [
            'id' => 'required',
            'name' => 'required',
            'desc' => 'required',
        ]);

        if ($validasi->fails()) {
            $valIndex = $validasi->errors()->all();
            return MessageHelper::error(false, $valIndex[0]);
        }

        $category = Category::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'slug' => Str::slug($request->name),
        ]);

        $category = Category::where('id', $category->id)
        ->get()->map(function ($category) {
            return $this->format($category);
        });

        return $this->respons($category);

        // return $this->respons($request->all());
    }

    public function format($category)
    {
        return [
            'id' => $category->id,
            'name' => $category->name,
            'desc' => $category->desc,
            'slug' => Str::slug($category->name),
            'tanggal_tambah' => Carbon::parse($category->created_at)->translatedFormat('d F Y'),
        ];
    }

    public function respons($category)
    {
        return response()->json([
            'status' => true,
            'data' => $category,
        ], 200);
    }

    public function update(Request $request, $id){

        $category = Category::where('id', $id)->first();

        if (!$category) {
            return MessageHelper::error(false, "Data $category->name tidak ditemukan !");
        }
        if (!$category) {
            return MessageHelper::error(false, "$category->name tidak ada !");
        }

        $validasi = Validator::make($request->all(), [
            'name' => ['required'],
            'desc' => ['required'],
        ]);

        if ($validasi->fails()) {
            $valIndex = $validasi->errors()->all();
            return MessageHelper::error(false, $valIndex[0]);
        }

        $category->update([
            'name' => $request->name,
            'desc' => $request->desc,
        ]);

        $detail = Category::where('id', $category->id)->get()->map(function ($category) {
            return $this->format($category);
        });

        $pesan = "Berhasil Update Data Category";
        return MessageHelper::resultAuth(true, $pesan, $detail, 200);
    }

    public function delete(Request $request)
    {

        $category = Category::where('id', $request->id)->first();

        if (!$category) {
            return MessageHelper::error(true, 'Data ngga ada');
        }
        $category->delete();

        return MessageHelper::error(true, 'Berhasil Hapus Data iyaa');
    }
}
