import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import React from 'react';

const View = () => {
    const { enrollment } = usePage().props;

    if (!enrollment) {
        return <div className="text-gray-500">No enrollment data found.</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Enrollment Details</h1>
                <ul className="space-y-3">
                    <li>
                        <span className="font-semibold text-gray-700">ID:</span>
                        <span className="ml-2 text-gray-900">{enrollment.id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Student:</span>
                        <span className="ml-2 text-gray-900">{enrollment.student?.name || enrollment.student_id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Batch:</span>
                        <span className="ml-2 text-gray-900">{enrollment.batch?.name || enrollment.batch_id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Join Date:</span>
                        <span className="ml-2 text-gray-900">{enrollment.joindate}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Fees:</span>
                        <span className="ml-2 text-gray-900">{enrollment.fees}</span>
                    </li>
                </ul>
               <div className='flex item-center justify-between'>
                 <button
                    className="mt-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
                    onClick={() => Inertia.visit(route('enrollment.index'))}
                    type="button"
                >
                   
                    Back to Enrollments
                </button>
                 <button
                    className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => Inertia.visit(route('student.show', enrollment.student_id))}
                    type="button"
                >
                    Student Detail
                </button>
               </div>
            </div>
        </div>
    );
};

export default View;
