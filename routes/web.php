<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return inertia('Dashboard');
// });

Route::inertia('/','Dashboard');
Route::inertia('/dashboard','Dashboard');

// Route::get('/about', function () {
//     logger('About route hit!');
//     return inertia('Default/Landing');
// });

Route::get('/about', function () {
    logger('About route hit!');
    return Inertia::render('Landing');
});

//     return Inertia::render('Landing', ['name' => 'mike']);
