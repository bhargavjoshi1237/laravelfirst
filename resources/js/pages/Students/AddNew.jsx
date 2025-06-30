import { useForm } from '@inertiajs/react';

export default function AddNew() {
    const { data, setData, post } = useForm({
        name: '',
        phone: '',
        address: '',
    });

    return (
        <div>
            <h1>Add Student</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={data.phone}
                        onChange={e => setData('phone', e.target.value)}
                    />
                     
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={data.address}
                        onChange={e => setData('address', e.target.value)}
                    />
                   
                </div>
                <button
                    type="button"
                    onClick={() => post(route('student.store'))}
                >
                    Add
                </button>
            </form>
        </div>
    );
}
