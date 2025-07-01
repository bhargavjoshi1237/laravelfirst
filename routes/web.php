<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\BatchController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\PaymentController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;


Route::get('/', function () {
    return redirect()->route('student.index');
});

Route::get('/test', [AllTableController::class, 'index']);

Route::resource('/alltable', AllTableController::class);

Route::resource('/student', StudentController::class);

Route::resource('/teacher', TeacherController::class);

Route::resource('/course', CourseController::class);

Route::resource('/batch', BatchController::class);

Route::resource('/enrollment', EnrollmentController::class);

Route::resource('/payment', PaymentController::class);


 
require __DIR__.'/auth.php';
