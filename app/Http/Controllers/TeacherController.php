<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    
    public function index()
    {
        $teachers = Teacher::select('id', 'name', 'phone', 'address')->get();
        return Inertia::render('Teacher/Index', [
            'data' => $teachers
        ]);
    }

    
    public function create()
    {
        return Inertia::render('Teacher/AddNew');
    }
 
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

   
    public function show(Teacher $teacher)
    {
       return Inertia::render('Teacher/View', [
            'data' => $teacher->only(['id', 'name', 'phone', 'address'])
        ]);
    }

  
    public function edit(Teacher $teacher)
    {
        return Inertia::render('Teacher/Edit', [
            'data' => $teacher->only(['id', 'name', 'phone', 'address'])
        ]);
    }

   
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

   
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return redirect()->route('teacher.index');
    }
}

