<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Enrollment;
use App\Models\Student;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = Payment::get();

        return inertia('Payment/Index', [
            'data' => $payments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $enrollments = Enrollment::with(['student:id,name', 'batch:id,name'])->get();

        return inertia('Payment/Add', [
            'enrollments' => $enrollments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
             
            'enrollment_id' => 'required|exists:enrollments,id',
            'amount' => 'required|numeric|min:0',
            'datepaid' => 'required|date',
            
        ]);

        Payment::create($validated);
        return redirect()->route('payment.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        $payment->load([
            'enrollment.student:id,name',
            'enrollment.batch:id,name'
        ]);

        return inertia('Payment/View', [
            'payment' => [
                'id' => $payment->id,
                'enrollment_id' => $payment->enrollment_id,
                'amount' => $payment->amount,
                'datepaid' => $payment->datepaid,
                'created_at' => $payment->created_at,
                'updated_at' => $payment->updated_at,
                'student' => $payment->enrollment->student ?? null,
                'batch' => $payment->enrollment->batch ?? null,
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payment $payment)
    {
        $enrollments = Enrollment::with(['student:id,name', 'batch:id,name'])->get();
        return inertia('Payment/Edit', [
            'payment' => $payment,
            'enrollments' => $enrollments,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payment $payment)
    {
        $validated = $request->validate([
            'enrollment_id' => 'required|exists:enrollments,id',
            'amount' => 'required|numeric|min:0',
            'datepaid' => 'required|date',
        ]);

        $payment->update($validated);
        return redirect()->route('payment.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        $payment->delete();
        return redirect()->route('payment.index');
    }
}

