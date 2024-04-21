<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saved_pin extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'pin_id',
    ];
}
