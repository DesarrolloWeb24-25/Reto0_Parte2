<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Videojuego;

class VideojuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videojuego = Videojuego::all();
        return $videojuego;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $videojuego = new Videojuego();
        $videojuego->nombre = $request->nombre;
        $videojuego->genero = $request->genero;
        $videojuego->nota = $request->nota;
        $videojuego->fecha_salida = $request->fecha_salida;
        
        $videojuego->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $videojuego = Videojuego::find($id);
        return $videojuego;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $videojuego = Videojuego::findOrFail($request->id);
        $videojuego->nombre = $request->nombre;
        $videojuego->genero = $request->genero;
        $videojuego->nota = $request->nota;
        $videojuego->fecha_salida = $request->fecha_salida;
        
        $videojuego->save();
        return $videojuego; 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $videojuego = Videojuego::destroy($id);
        return $videojuego;
    }
}
