import React from 'react';
import { Inertia } from '@inertiajs/inertia';

 
const DataListView = ({ data, payments = [] }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-gray-500">No data available.</div>;
  }

  
  const headers = Object.keys(data[0]).filter(
    (header) => header !== 'created_at' && header !== 'updated_at'
  );

  return (
    <div className="w-full">  
      <table className="min-w-full bg-white border border-gray-300 shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Student</th>
            <th className="px-4 py-2 border-b text-left">Batch</th>
            <th className="px-4 py-2 border-b text-left">Join Date</th>
            <th className="px-4 py-2 border-b text-left">Fees</th>
            <th className="px-4 py-2 border-b text-left">Fees Paid</th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-gray-700 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            
            const paid = payments.find(p => p.enrollment_id === row.id);
            return (
              <tr key={row.id || idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {row.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {row.student?.name || row.student_id}
                </td>
                <td className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {row.batch?.name || row.batch_id}
                </td>
                <td className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {row.joindate}
                </td>
                <td className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {row.fees}
                </td>
                <td className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {paid ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Not Paid</span>
                  )}
                </td>
                <td className="px-4 py-2 border-b border-gray-100">
                  <button
                    className="mr-2 bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition"
                    onClick={() => Inertia.visit(route('enrollment.show', row.id))}
                  >
                    View
                  </button>
                  <button
                    className="mr-2 bg-yellow-500 text-white rounded px-3 py-1 hover:bg-yellow-600 transition"
                    onClick={() => Inertia.visit(route('enrollment.edit', row.id))}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition"
                    onClick={() => Inertia.delete(route('enrollment.destroy', row.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataListView;

