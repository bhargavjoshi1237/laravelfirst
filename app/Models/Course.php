<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $guarded = [];
    protected $fillable = ['name', 'syllabus', 'duration'];

    public function batches()
    {
        return $this->hasMany(Batch::class);
    }
}
