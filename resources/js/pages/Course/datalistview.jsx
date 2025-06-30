import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const DataListView = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-gray-500">No data available.</div>;
  }

  // Get table headers from the keys of the first object
  const headers = Object.keys(data[0]);

  return (
    <div className="w-full">
      <table className="min-w-full bg-white border border-gray-300 shadow rounded">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-2 border-b border-gray-200 text-left text-gray-700 font-semibold bg-gray-50">
                {header}
              </th>
            ))}
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-gray-700 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={row.id || idx} className="hover:bg-gray-50">
              {headers.map((header) => (
                <td key={header} className="px-4 py-2 border-b border-gray-100 text-gray-800">
                  {row[header]}
                </td>
              ))}
              <td className="px-4 py-2 border-b border-gray-100">
                <button
                  className="mr-2 bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition"
                  onClick={() => Inertia.visit(route('course.show', row.id))}
                >
                  View
                </button>
                <button
                  className="mr-2 bg-yellow-500 text-white rounded px-3 py-1 hover:bg-yellow-600 transition"
                  onClick={() => Inertia.visit(route('course.edit', row.id))}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition"
                  onClick={() => Inertia.delete(route('course.destroy', row.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataListView;

