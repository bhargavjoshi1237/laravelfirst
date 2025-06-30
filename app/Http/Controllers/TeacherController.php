<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teachers = Teacher::select('id', 'name', 'phone', 'address')->get();
        return Inertia::render('Teacher/Welcome', [
            'data' => $teachers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Teacher/AddNew');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|numeric',
            'address' => 'nullable|string|max:255',
        ]);

        Teacher::create($validated);

        return redirect()->route('teacher.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
       return Inertia::render('Teacher/View', [
            'data' => $teacher->only(['id', 'name', 'phone', 'address'])
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teacher $teacher)
    {
        return Inertia::render('Teacher/Edit', [
            'data' => $teacher->only(['id', 'name', 'phone', 'address'])
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teacher $teacher)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|numeric',
            'address' => 'nullable|string|max:255',
        ]);

        $teacher->update($validated);

        return redirect()->route('teacher.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return redirect()->route('teacher.index');
    }
}

