<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    
    protected $fillable = [
        'enrollment_id',
        'datepaid',
        'amount',
    ];

    public function enrollment()
    {
        return $this->belongsTo(Enrollment::class);
    }
}
