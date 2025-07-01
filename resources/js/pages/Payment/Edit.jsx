import { useForm, usePage } from '@inertiajs/react';

export default function Edit() {
    const { payment, enrollments } = usePage().props;
    const { data, setData, put, processing } = useForm({
        enrollment_id: payment.enrollment_id || '',
        amount: payment.amount || '',
        datepaid: payment.datepaid || '',
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Payment</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Enrollment:</label>
                        <select
                            value={data.enrollment_id}
                            onChange={e => setData('enrollment_id', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">Select an enrollment</option>
                            {enrollments.map(enrollment => (
                                <option key={enrollment.id} value={enrollment.id}>
                                    {enrollment.student?.name} - {enrollment.batch?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Date Paid:</label>
                        <input
                            type="date"
                            value={data.datepaid}
                            onChange={e => setData('datepaid', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Amount:</label>
                        <input
                            type="number"
                            value={data.amount}
                            onChange={e => setData('amount', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="button"
                        disabled={processing}
                        onClick={() => put(route('payment.update', payment.id))}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
} 