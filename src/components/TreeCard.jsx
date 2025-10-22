export default function TreeCard({ tree }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-3 w-full max-w-md">
      <h3 className="text-lg font-semibold text-green-700">{tree.species}</h3>
      <p className="text-gray-600 text-sm">📍 {tree.location}</p>
      <p className="text-gray-500 text-xs">Plantada em {new Date(tree.plantedAt).toLocaleDateString()}</p>
    </div>
  );
}