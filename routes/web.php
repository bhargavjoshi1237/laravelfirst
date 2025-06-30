<?php

use App\Http\Controllers\AllTableController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\CourseController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [ 
        
    ]);
});

 
Route::get('/test', [AllTableController::class, 'index']);

Route::resource('/alltable', AllTableController::class);

Route::resource('/student', StudentController::class);

Route::resource('/teacher', TeacherController::class);

Route::resource('/course', CourseController::class);
 
require __DIR__.'/auth.php';
