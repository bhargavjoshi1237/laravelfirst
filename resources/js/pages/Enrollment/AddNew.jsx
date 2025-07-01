import { useForm } from '@inertiajs/react';

export default function AddNew(props) {
    const { students = [], batches = [] } = props;
    const { data, setData, post } = useForm({
        student_id: '',
        batch_id: '',
        joindate: '',
        fees: '',
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Enrollment</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Student:</label>
                        <select
                            value={data.student_id}
                            onChange={e => setData('student_id', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">Select a student</option>
                            {students.map(student => (
                                <option key={student.id} value={student.id}>
                                    {student.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Batch:</label>
                        <select
                            value={data.batch_id}
                            onChange={e => setData('batch_id', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">Select a batch</option>
                            {batches.map(batch => (
                                <option key={batch.id} value={batch.id}>
                                    {batch.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Join Date:</label>
                        <input
                            type="date"
                            value={data.joindate}
                            onChange={e => setData('joindate', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Fees:</label>
                        <input
                            type="number"
                            value={data.fees}
                            onChange={e => setData('fees', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => post(route('enrollment.store'))}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
