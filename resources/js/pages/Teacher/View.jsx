import { usePage } from '@inertiajs/react';
import React from 'react';

const View = () => {
    const { data } = usePage().props;

    if (!data) {
        return <div className="text-gray-500">No student data found.</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Student Details</h1>
                <ul className="space-y-3">
                    <li>
                        <span className="font-semibold text-gray-700">ID:</span>
                        <span className="ml-2 text-gray-900">{data.id}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Name:</span>
                        <span className="ml-2 text-gray-900">{data.name}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Phone:</span>
                        <span className="ml-2 text-gray-900">{data.phone}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-700">Address:</span>
                        <span className="ml-2 text-gray-900">{data.address}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default View;
