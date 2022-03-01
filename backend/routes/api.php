<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BicycleController;

use App\Events\NewMessage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('bicycles', [BicycleController::class, 'index']);
Route::get('bicycles/{id}', [BicycleController::class, 'show']);
Route::post('bicycles', [BicycleController::class, 'store']);
Route::put('bicycles/{id}', [BicycleController::class, 'update']);
Route::delete('bicycles/{id}', [BicycleController::class, 'delete']);

Route::post('/broadcast', function(Request $request){
    broadcast(new NewMessage($request));
});
