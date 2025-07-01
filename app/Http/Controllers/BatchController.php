<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Batch;
use Illuminate\Http\Request;
use App\Models\Course;

class BatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $batches = Batch::with('course')->get();
        $batches = Batch::get();

        return Inertia::render('Batch/Index', [
            'data' => $batches,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        return Inertia::render('Batch/AddNew', [
            'courses' => Course::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'course_id' => 'required|exists:courses,id',
            'start_date' => 'required|date',
        ]);

        Batch::create($validated);

        return redirect()->route('batch.index')->with('success', 'Batch created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Batch $batch)
    {
        $batch->load('course');
        return Inertia::render('Batch/View', [
            'batch' => $batch,
            'course' => $batch->course,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Batch $batch)
    {
        $courses = Course::all();
        return Inertia::render('Batch/Edit', [
            'batch' => $batch,
            'courses' => $courses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Batch $batch)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'course_id' => 'required|exists:courses,id',
            'start_date' => 'required|date',
        ]);

        $batch->update($validated);

        return redirect()->route('batch.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Batch $batch)
    {
        $batch->delete();
        return redirect()->route('batch.index');
    }
}
