<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Landing
Route::inertia('/','Landing');

// Route::inertia('/','Dashboard'); Auth
Route::inertia('/Login','Login');
Route::inertia('/Register','User_Register');

// Main pages
Route::inertia('/dashboard','Dashboard');
Route::inertia('/Archived','Archived');
Route::inertia('/Notification','Notifications');
Route::inertia('/Deleted','Deleted');

// Profile not working
Route::inertia('/Profile','Profile_CRUD/Profile');
Route::inertia('/Edit_Profile','Profile_CRUD/Edit_Profile');

// Settings not working
Route::inertia('/Settings','Settings');
Route::inertia('/Preference','Preference');

//CRUD not working

Route::inertia('/All_Tasks','Task_CRUD/All_Tasks');
Route::inertia('/View_Task','Task_CRUD/View_Task');
Route::inertia('/Create_Task','Task_CRUD/Create_Task');
Route::inertia('/Edit_Task','Task_CRUD/Edit_Task');
Route::inertia('/Delete_Task','Task_CRUD/Delete_Task');

Route::inertia('/All_Projects','Project_CRUD/All_Projects');
Route::inertia('/View_Project','Project_CRUD/View_Project');
Route::inertia('/Create_Project','Project_CRUD/Create_Project');
Route::inertia('/Edit_Project','Project_CRUD/Edit_Project');
Route::inertia('/Delete_Project','Project_CRUD/Delete_Project');

Route::inertia('/All_Categories','Category_CRUD/All_Categories');
Route::inertia('/View_Category','Category_CRUD/View_Category');
Route::inertia('/Create_Category','Category_CRUD/Create_Category');
Route::inertia('/Edit_Category','Category_CRUD/Edit_Category');
Route::inertia('/Delete_Category','Category_CRUD/Delete_Category');





// Route::inertia('/dashboard','Dashboard');

// Route::get('/about', function () {
//     logger('About route hit!');
//     return inertia('Default/Landing');
// });



// Route::get('/', function () {
//     return inertia('Dashboard');
// });

//     return Inertia::render('Landing', ['name' => 'mike']);
