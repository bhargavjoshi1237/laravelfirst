import { useForm, usePage } from '@inertiajs/react';

export default function Edit() {
    const { data } = usePage().props;
    const { data: form, setData, put, processing, errors } = useForm({
        name: data.name || '',
        syllabus: data.syllabus || '',
        duration: data.duration || '',
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Course</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Name:</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Syllabus:</label>
                        <input
                            type="text"
                            value={form.syllabus}
                            onChange={e => setData('syllabus', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Duration:</label>
                        <input
                            type="text"
                            value={form.duration}
                            onChange={e => setData('duration', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="button"
                        disabled={processing}
                        onClick={() => put(route('course.update', data.id))}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
