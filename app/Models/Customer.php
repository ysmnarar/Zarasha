<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = 'customers';
    protected $fillable = [
        'user_id',
        'shopping_cart_id',
        'wishlist_id',
    ];

    public function user(){
        return $this->belongsTo(User::class, 'id', 'id');
    }
    public function username(){
        return $this->belongsTo(User::class, 'name', 'name');
    }
}
