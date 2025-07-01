import Navbar from "@/mycomponents/navbar";
import DataListView from "@/pages/Payment/datalistview";
import { Inertia } from "@inertiajs/inertia";

export default function EnrollmentIndex({ data }) {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar navvalue={"Payment"} />
      <div className="mt-5 w-[95%] ml-auto mr-auto flex items-start justify-start">
        <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
        <button
          className="ml-auto mt-1 border border-gray-300 text-gray-800 rounded-md hover:bg-blue-100 px-4 py-2 shadow transition"
          onClick={() => Inertia.visit(route('payment.create'))}
        >
          Add New
        </button>
      </div>
      <div className="mt-5 w-[95%] ml-auto mr-auto flex items-start justify-start">
        <DataListView data={data} />
      </div>
    </div>
  );
}