<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class FlowerImage extends Model
{
    use HasFactory;
    use Searchable;
    
    protected $fillable = ['flower_id', 'image_url', 'status'];
    
    // Define the relationship with flower
    public function flower()
    {
        return $this->belongsTo(Flower::class);
    }
    public function toSearchableArray()
    {
        return [
            'flower_id' => $this->flower_id
        ];
    }

}
