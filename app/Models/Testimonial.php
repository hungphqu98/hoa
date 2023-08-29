<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Testimonial extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['images', 'name', 'status'];

    public function toSearchableArray()
    {
        return [
            'name' => $this->name
        ];
    }
}
