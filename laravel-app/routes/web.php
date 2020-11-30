<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NfeController;

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

Route::get('/', function () {
    return response("Documentação acesse: <a href='http://localhost:8001'> http://localhost:8001 </a>", 200);
});

Route::get('nfe/{acess_key}', [NfeController::class, 'show']);
