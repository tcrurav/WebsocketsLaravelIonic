<?php

namespace App\Http\Controllers;

use App\Models\Bicycle;
use Illuminate\Http\Request;

class BicycleController extends Controller
{
    public function index()
    {
        return Bicycle::all();
    }

    public function show(Bicycle $bicycle)
    {
        return $bicycle;
    }

    public function store(Request $request)
    {
        $bicycle = Bicycle::create($request->all());

        return response()->json($bicycle, 201);
    }

    public function update(Request $request, Bicycle $bicycle)
    {
        $bicycle->update($request->all());

        return response()->json($bicycle, 200);
    }

    public function delete(Bicycle $bicycle)
    {
        $bicycle->delete();

        return response()->json(null, 204);
    }
}
