<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class OrderItem extends Model
{
    use HasFactory;
    use Searchable;
    
    protected $fillable = ['order_id', 'product_id', 'quantity', 'item_price'];
    
    // Define the relationship with order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    
    // Define the relationship with flower
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
