import { useState } from 'react';
import { addTree } from '../services/api';

export default function AddTreeForm({ user }) {
  const [form, setForm] = useState({ species: '', location: '' });
  const [success, setSuccess] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await addTree({ userId: user._id, ...form });
    setSuccess('🌱 Árvore adicionada com sucesso!');
    setForm({ species: '', location: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Espécie da árvore"
        value={form.species}
        onChange={(e) => setForm({ ...form, species: e.target.value })}
        className="border p-2 w-full mb-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Local de plantio"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
        Registrar 🌳
      </button>
      {success && <p className="text-green-600 text-center mt-3">{success}</p>}
    </form>
  );
}


