<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::select('id', 'name', 'phone', 'address')->get();
        return Inertia::render('Students/Welcome', [
            'data' => $students
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Students/AddNew');
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

        Student::create($validated);

        return redirect()->route('student.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
       return Inertia::render('Students/View', [
            'data' => $student->only(['id', 'name', 'phone', 'address'])
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        return Inertia::render('Students/Edit', [
            'data' => $student->only(['id', 'name', 'phone', 'address'])
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|numeric',
            'address' => 'nullable|string|max:255',
        ]);

        $student->update($validated);

        return redirect()->route('student.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return redirect()->route('student.index');
    }
}

