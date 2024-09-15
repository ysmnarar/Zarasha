<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("users")->insert(array(
            array(
                'username' => 'Admin',
                'first_name' => 'Admin',
                'last_name' => 'Zarasha',
                'email'=> 'admin@gmail.com',
                'password' => Hash::make('1234'),
                'address' => 'Klender, Mawar Merah',
                'city' => 'Jakarta Timur',
                'phone' => '08121881',
                'role'=> 1,
            ),
            array(
                'username' => 'Customer',
                'first_name' => 'Customer',
                'last_name' => 'Zarasha',
                'email'=> 'customer@gmail.com',
                'password' => Hash::make('5678'),
                'address' => 'Baranang Siang Indah',
                'city' => 'Bogor Kota',
                'phone' => '08571068',
                'role'=> 2,
            ),
        ));
    }
}
