<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("customers")->insert(array(
            array(
                'user_id' => 3,
                'shopping_cart_id' => 23,
                'wishlist_id'=> 2,
            ),
            array(
                'user_id' => 4,
                'shopping_cart_id' => 24,
                'wishlist_id'=> 3,
            ),
        ));
    }
}
