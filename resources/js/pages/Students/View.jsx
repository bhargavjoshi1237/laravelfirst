import { usePage } from '@inertiajs/react';
import React from 'react';

const View= () => {
    const {data} = usePage().props;
     
    if (!data) {
        return <div>No student data found.</div>;
    }

    return (
        <div>
            <h1>Student Details</h1>
            <ul>
                <li><strong>ID:</strong> {data.id}</li>
                <li><strong>Name:</strong> {data.name}</li>
                <li><strong>Phone:</strong> {data.phone}</li>
                <li><strong>Address:</strong> {data.address}</li>
            </ul>
        </div>
    );  
};

export default View;
