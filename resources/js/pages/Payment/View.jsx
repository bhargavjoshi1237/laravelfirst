import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import React from 'react';

const View = () => {
    const { payment } = usePage().props;

    if (!payment) {
        return <div className="text-gray-500">No payment data found.</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h1>
                <ul className="space-y-3">
                    <li>
                        <span className="font-semibold text-gray-700">ID:</span>
                        <span className="ml-2 text-gray-900">{payment.id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Enrollment ID:</span>
                        <span className="ml-2 text-gray-900">{payment.enrollment_id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Student:</span>
                        <span className="ml-2 text-gray-900">{payment.student?.name || '-'}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Batch:</span>
                        <span className="ml-2 text-gray-900">{payment.batch?.name || '-'}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Date Paid:</span>
                        <span className="ml-2 text-gray-900">{payment.datepaid}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Amount:</span>
                        <span className="ml-2 text-gray-900">{payment.amount}</span>
                    </li>
                </ul>
               <div className='flex item-center justify-between'>
                 <button
                    className="mt-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
                    onClick={() => Inertia.visit(route('payment.index'))}
                    type="button"
                >
                    Back to All Payments
                </button>
               </div>
            </div>
        </div>
    );
};

export default View;
