<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    
    public function index()
    {
        $students = Student::select('id', 'name', 'phone', 'address')->get();
        return Inertia::render('Students/Index', [
            'data' => $students
        ]);
    }

 
    public function create()
    {
        return Inertia::render('Students/AddNew');
    }

     
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

    
    public function show(Student $student)
    {
       return Inertia::render('Students/View', [
            'data' => $student->only(['id', 'name', 'phone', 'address'])
        ]);
    }

     
    public function edit(Student $student)
    {
        return Inertia::render('Students/Edit', [
            'data' => $student->only(['id', 'name', 'phone', 'address'])
        ]);
    }

    
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

     
    public function destroy(Student $student)
    {
        $student->delete();
        return redirect()->route('student.index');
    }
}

