<?php

use App\Http\Controllers\AllTableController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [ 
        
    ]);
});

 
Route::get('/test', [AllTableController::class, 'index']);

Route::resource('/alltable', AllTableController::class);

Route::resource('/student', StudentController::class);
 
require __DIR__.'/auth.php';
