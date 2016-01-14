<?php

Route::group(['prefix' => 'api/v1'], function () {
    Route::resource('artists', 'ArtistsController');
    Route::resource('labels', 'LabelsController');

    Route::group(['prefix' => 'wiki'], function () {
        Route::get('search', 'WikiController@search');
    });
});


Route::get('/', function () { return view('welcome'); });
Route::get('{a}', function () {return view('welcome'); });
Route::get('{a}/{b}', function () {return view('welcome'); });
