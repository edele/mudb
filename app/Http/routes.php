<?php

Route::group(['prefix' => 'api/v1'], function () {
    Route::resource('artists', 'ArtistsController');
    Route::resource('labels', 'LabelsController');
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('{any}', function () {
    return view('welcome');
});

Route::get('{a}/{b}', function () {
    return view('welcome');
});
