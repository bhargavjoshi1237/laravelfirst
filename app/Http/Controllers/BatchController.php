<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Batch;
use Illuminate\Http\Request;
use App\Models\Course;

class BatchController extends Controller
{
    
    public function index()
    {
         
        $batches = Batch::get();

        return Inertia::render('Batch/Index', [
            'data' => $batches,
        ]);
    }

     
    public function create()
    {
        
        return Inertia::render('Batch/AddNew', [
            'courses' => Course::all(),
        ]);
    }

    
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

    
    public function show(Batch $batch)
    {
        $batch->load('course');
        return Inertia::render('Batch/View', [
            'batch' => $batch,
            'course' => $batch->course,
        ]);
    }

     
    public function edit(Batch $batch)
    {
        $courses = Course::all();
        return Inertia::render('Batch/Edit', [
            'batch' => $batch,
            'courses' => $courses,
        ]);
    }

    
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

    
    public function destroy(Batch $batch)
    {
        $batch->delete();
        return redirect()->route('batch.index');
    }
}
