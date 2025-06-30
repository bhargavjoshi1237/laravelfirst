<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::select('id', 'name', 'syllabus', 'duration')->get();
        return Inertia::render('Course/Welcome', [
            'data' => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Course/AddNew');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'syllabus' => 'nullable|string|max:255',
            'duration' => 'nullable|string|max:255',
        ]);

        Course::create($validated);

        return redirect()->route('course.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
       return Inertia::render('Course/View', [
            'data' => $course->only(['id', 'name', 'syllabus', 'duration'])
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return Inertia::render('Course/Edit', [
            'data' => $course->only(['id', 'name', 'syllabus', 'duration'])
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'syllabus' => 'nullable|string|max:255',
            'duration' => 'nullable|string|max:255',
        ]);

        $course->update($validated);

        return redirect()->route('course.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return redirect()->route('course.index');
    }
}

