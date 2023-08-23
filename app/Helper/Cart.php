<?php 
namespace App\Helper;

class Cart {
    public $items = [];
    public $total_quantity = 0;
    public $total_price = 0;
    public function __construct() {
        $this->items = session('cart') ? session('cart') : [];
        $this->total_quantity = $this->total_quantity();
        $this->total_price = $this->total_price();
    }
    public function add($product, $quantity = 1) {
        if (isset($this->items[$product->id])){
            $this->items[$product->id]['quantity'] += $quantity;
        } else {
            $item = [
            'id' => $product->id,
            'name' => $product->name,
            'slug' => $product->slug,
            'image' => $product->image,
            'price' => $product->sale_price > 0 ? $product->sale_price : $product->price,
            'quantity' => $quantity
        ];

        $this->items[$product->id] = $item;
    }
        session(['cart'=> $this->items]);
	}
	public function update($id, $quantity = 1) {
		if(isset($this->items[$id])){
            $this->items[$id]['quantity'] = $quantity;
            session(['cart'=> $this->items]);
        }
	}
	public function delete($id) {
		if(isset($this->items[$id])){
            unset($this->items[$id]);

            session(['cart'=> $this->items]);
        }
	}
	private function total_price() {
        $total = 0;
        foreach ($this->items as $key => $item) {
            $total += $item['price']*$item['quantity'];
        }
        return $total;
    }
    private function total_quantity() {
        $total = 0;
        foreach ($this->items as $key => $item) {
            $total += $item['quantity'];
        }
        return $total;
	}

}
