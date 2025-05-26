<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return inertia('Dashboard');
// });

Route::inertia('/','Eto');
Route::inertia('/dashboard','Dashboard');

// Route::get('/about', function () {
//     logger('About route hit!');
//     return inertia('Default/Landing');
// });

Route::get('/about', function () {
    logger('About route hit!');
    return Inertia::render('Default/Landing', ['name' => 'mike']);
});

