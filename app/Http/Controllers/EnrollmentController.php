<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Student;
use App\Models\Batch;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enrollments = Enrollment::with(['student:id,name', 'batch:id,name'])->get();

        return inertia('Enrollment/Index', [
            'data' => $enrollments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $students = Student::select('id', 'name')->get();
        $batches = Batch::select('id', 'name')->get();

        return inertia('Enrollment/AddNew', [
            'students' => $students,
            'batches' => $batches,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_id' => 'required|exists:students,id',
            'batch_id' => 'required|exists:batches,id',
            'joindate' => 'required|date',
            'fees' => 'required|numeric|min:0',
        ]);

        Enrollment::create($validated);

        return redirect()->route('enrollment.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Enrollment $enrollment)
    {
        return inertia('Enrollment/View', [
            'enrollment' => $enrollment->load(['student:id,name', 'batch:id,name']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enrollment $enrollment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Enrollment $enrollment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Enrollment $enrollment)
    {
        $enrollment->delete();
        return redirect()->route('enrollment.index');
    }
}
