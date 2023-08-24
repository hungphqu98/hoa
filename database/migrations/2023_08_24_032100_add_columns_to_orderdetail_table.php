<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            //
            $table->dropForeign(['customer_id']);
            $table->dropColumn('customer_id');
            $table->enum('status', ['DRAFT','RECEIVED','PAID','DELIVERING','DELIVERED'])->default('DRAFT')->change();
            $table->string('phone');
            $table->string('name');
            $table->string('email');
            $table->enum('payment', ['COD','BANK'])->default('COD');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }
};
