<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(){

        $customer = User::where('role', 2)->get();

        return view('Admin.CrudCustomer.index', compact('customer'));
    }

    public function formCustomer(){

        $customer = Customer::all();

        return view('Admin.CrudCustomer.addCustomer', compact('customer'));
    }
    public function addCustomer(){

    }
}
