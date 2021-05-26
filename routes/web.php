<?php
use App\Http\Controllers\Login;
use App\Http\Controllers\GetRequest;
use App\Http\Controllers\WebApi\ReactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['prefix' => '/api/v1'], function () {
    Route::get('/add ',[GetRequest::class, 'pushUser']);
    Route::get('/get_users ',[GetRequest::class, 'getUsers']);

    // Route::get('/{nickname}',[GetRequest::class, 'getNickname']);
});

Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

