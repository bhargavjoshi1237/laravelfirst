import React from 'react';
import { Inertia } from '@inertiajs/inertia';
 


const DataListView = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

  // Get table headers from the keys of the first object
  const headers = Object.keys(data[0]);

  return (
    <div className="">
      <table className="min-w-full text-white border border-[#474747]">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-2 border border-[#474747]">
                {header }
              </th>
            ))}
            <th className="px-4 py-2 border border-[#474747]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={row.id || idx}>
              {headers.map((header) => (
                <td key={header} className="px-4 py-2 border border-[#474747]">
                  {row[header]}
                </td>
              ))}
              <td className="px-4 py-2 border border-[#474747]">
                <button
                  className="mr-1 border border-[#474747] text-[#e7e7e7] rounded-md hover:bg-[#282828] px-2 py-1"
                  onClick={() => Inertia.visit(route('student.show', row.id))}
                >
                  View
                </button>
                <button
                  className="mr-1 border border-[#474747] text-[#e7e7e7] rounded-md hover:bg-[#282828] px-2 py-1"
                  onClick={() => alert('Edit ' + (row.id || idx))}
                >
                  Edit
                </button>
                <button
                  className="border border-[#474747] text-[#e7e7e7] rounded-md hover:bg-[#282828] px-2 py-1"
                  onClick={() => Inertia.delete(route('student.destroy', row.id))}
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

