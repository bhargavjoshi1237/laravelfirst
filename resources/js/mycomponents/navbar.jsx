import React from "react";

export default function Navbar({navvalue}) {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
      <p className="text-2xl">Student Management System</p>
      <ul className="flex space-x-6 ml-9">
        <li className={`${navvalue === "Students" ? "bg-gray-900 p-2  rounded" : "p-2"}`}>
          <a href="#"  >Students</a>
        </li>
        <li className={`${navvalue === "Teachers" ? "bg-red-600 rounded p-2" : "p-2"}`}>
          <a href="#" className="hover:text-gray-300">Teachers</a>
        </li>
        <li className={`${navvalue === "Courses" ? "bg-red-600 rounded p-2" : "p-2"}`}>
          <a href="#" className="hover:text-gray-300">Courses</a>
        </li>
        <li className={`${navvalue === "Batches" ? "bg-red-600 rounded p-2" : "p-2"}`}>
          <a href="#" className="hover:text-gray-300">Batches</a>
        </li>
        <li className={`${navvalue === "Enrollment" ? "bg-red-600 rounded p-2" : "p-2"}`}>
          <a href="#" className="hover:text-gray-300">Enrollment</a>
        </li>
        <li className={`${navvalue === "Payment" ? "bg-red-600 rounded p-2" : "p-2"}`}>
          <a href="#" className="hover:text-gray-300">Payment</a>
        </li>
      </ul>
    </nav>
  );
}
 