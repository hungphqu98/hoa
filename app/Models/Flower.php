<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Flower extends Model
{
    use HasFactory;
    use Searchable;
    
    protected $fillable = ['name', 'slug', 'description', 'price', 'stock_count', 'status'];
    
    // Define the relationship with flower images
    public function flowerImages()
    {
        return $this->hasMany(FlowerImage::class);
    }
    
    // Define the relationship with order items
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function toSearchableArray()
    {
        return [
            'name' => $this->name
        ];
    }
}
