import { usePage } from '@inertiajs/react';
import React from 'react';

const View = () => {
    const { batch, course } = usePage().props;

    if (!batch) {
        return <div className="text-gray-500">No batch data found.</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Batch Details</h1>
                <ul className="space-y-3">
                    <li>
                        <span className="font-semibold text-gray-700">ID:</span>
                        <span className="ml-2 text-gray-900">{batch.id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Name:</span>
                        <span className="ml-2 text-gray-900">{batch.name}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Course:</span>
                        <span className="ml-2 text-gray-900">{course ? course.name : ''}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Start Date:</span>
                        <span className="ml-2 text-gray-900">{batch.start_date}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default View;
