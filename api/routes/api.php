<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VideojuegoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(VideojuegoController::class)->group(function (){
   Route::get('/videojuego', 'index');
   Route::post('/videojuego', 'store');
   Route::get('/videojuego/{id}', 'show');
   Route::put('/videojuego/{id}', 'update');
   Route::delete('/videojuego/{id}', 'destroy');
});
