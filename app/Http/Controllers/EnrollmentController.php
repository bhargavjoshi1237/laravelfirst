<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Student;
use App\Models\Batch;
use App\Models\Payment;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
     
    public function index()
    {
        $enrollments = Enrollment::with(['student:id,name', 'batch:id,name'])->get();
        $payments = Payment::select('id', 'enrollment_id')->get();  

        return inertia('Enrollment/Index', [
            'data' => $enrollments,
            'payments' => $payments,
        ]);
    }

     
    public function create()
    {
        $students = Student::select('id', 'name')->get();
        $batches = Batch::select('id', 'name')->get();
        

        return inertia('Enrollment/AddNew', [
            'students' => $students,
            'batches' => $batches,
        ]);
    }

     
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

    
    public function show(Enrollment $enrollment)
    {
        return inertia('Enrollment/View', [
            'enrollment' => $enrollment->load(['student:id,name', 'batch:id,name']),
        ]);
    }

    
    public function edit(Enrollment $enrollment)
    {
        $students = Student::select('id', 'name')->get();
        $batches = Batch::select('id', 'name')->get();

        return inertia('Enrollment/Edit', [
            'enrollment' => $enrollment->load(['student:id,name', 'batch:id,name']),
            'students' => $students,
            'batches' => $batches,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Enrollment $enrollment)
    {
        $validated = $request->validate([
            'student_id' => 'required|exists:students,id',
            'batch_id' => 'required|exists:batches,id',
            'joindate' => 'required|date',
            'fees' => 'required|numeric|min:0',
        ]);

        $enrollment->update($validated);

        return redirect()->route('enrollment.index');
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
