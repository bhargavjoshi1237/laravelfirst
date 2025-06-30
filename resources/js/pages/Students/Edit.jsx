import { useForm, usePage } from '@inertiajs/react';

export default function Edit() {
    const { data } = usePage().props;
    const { data: form, setData, put, processing, errors } = useForm({
        name: data.name || '',
        phone: data.phone || '',
        address: data.address || '',
    });

    return (
        <div>
            <h1>Edit Student</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={form.phone}
                        onChange={e => setData('phone', e.target.value)}
                    />
                    
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={form.address}
                        onChange={e => setData('address', e.target.value)}
                    />
                     
                </div>
                <button
                    type="button"
                    disabled={processing}
                    onClick={() => put(route('student.update', data.id))}
                >
                    Update
                </button>
            </form>
        </div>
    );
}
