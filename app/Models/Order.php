<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Order extends Model
{
    use HasFactory;
    use Searchable;
    
    protected $fillable = ['phone', 'name','email','note','delivery_address', 'total_amount', 'status'];
    
    // Define the relationship with customer
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
    
    // Define the relationship with order items
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function toSearchableArray()
    {
        return [
            'email' => $this->email,
            'delivery_address' => $this->delivery_address,
            'status' => $this->status
        ];
    }
}
