<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    protected $fillable = [
        'name',
        'course_id',
        'start_date',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
