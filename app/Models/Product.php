<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Abbasudo\Purity\Traits\Sortable;

class Product extends Model
{
    use HasFactory;
    use Searchable;
    use Sortable;
    
    protected $fillable = ['name', 'slug', 'description', 'details','price','sale_price', 'status'];
    
    
    // Define the relationship with order items
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }


    public function productCategory()
    {
        return $this->belongsToMany(Category::class, ProductCategory::class, 'product_id', 'category_id');
    }

    public function toSearchableArray()
    {
        return [
            'name' => $this->name
        ];
    }
}
