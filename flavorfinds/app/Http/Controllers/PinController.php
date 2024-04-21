<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Pin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PinController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        // $pins = Pin::all();
        // dd($pins);
        // return Inertia::render('Favorites', [
        //     'pins' => $pins
        // ]);
        try {
            $pins = Pin::all();
            // dd($pins);
            return Inertia::render('Favorites', [
                'pins' => $pins
            ]);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
        
    }

    public function dashboard()
    {
        
        // $pins = Pin::all();
        // dd($pins);
        // return Inertia::render('Favorites', [
        //     'pins' => $pins
        // ]);
        try {
            $pins = Pin::all();
            
            return Inertia::render('Dashboard', [
                'pins' => $pins
            ]);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
        
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $pin = new Pin;
            $pin->user_id = Auth::id();
            $pin->label = $request->label;
            $pin->image_url = $request->image;
            $pin->meal_type = json_encode($request->mealType);
            $pin->calories = $request->calories;
            $pin->ingredients = json_encode($request->ingredientLines);
            $pin->instructions_url = $request->url;
            $pin->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Pin $pin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pin $pin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pin $pin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pin $pin)
    {
        $pin->delete();
        
    }
}
