<?php

use App\Http\Controllers\PinController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });
});

Route::middleware('auth')->group(function () {

Route::get('/dashboard', [PinController::class, 'dashboard'])
        ->middleware(['auth', 'verified'])
        ->name('dashboard');


Route::get('/favorites', [PinController::class, 'index'])
        ->middleware(['auth', 'verified'])
        ->name('favorites');

Route::delete('delete-pin/{id}', [PinController::class, 'destroy'])
        ->middleware(['auth', 'verified'])
        ->name('delete-pin');


Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function () {
    Route::post('save-pin', [PinController::class, 'store']);
});

require __DIR__.'/auth.php';
