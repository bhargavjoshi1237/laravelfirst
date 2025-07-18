import { useForm } from '@inertiajs/react';

export default function AddNew(props) {
    const { courses = [] } = props;
    const { data, setData, post } = useForm({
        name: '',
        course_id: '',
        start_date: '',
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Batch</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Name:</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Course:</label>
                        <select
                            value={data.course_id}
                            onChange={e => setData('course_id', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">Select a course</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>
                                    {course.name} -   {course.duration} 
                                </option>
                            ))}
                        </select>
                          
                         
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Start Date:</label>
                        <input
                            type="date"
                            value={data.start_date}
                            onChange={e => setData('start_date', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => post(route('batch.store'))}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
