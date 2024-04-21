<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'label',
        'image_url',
        'meal_type',
        'calories',
        'ingredients',
        'instructions_url',
    ];
}
