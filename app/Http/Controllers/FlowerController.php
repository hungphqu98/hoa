<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flower;

class FlowerController extends Controller
{
    //
    public function product()
    {
        $flower = Flower::with('flowerImages')->first();

        return view('product.view', compact('flower'));
    }
}
