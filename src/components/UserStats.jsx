export default function UserStats({ user }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center max-w-md w-full">
      <h2 className="text-2xl font-bold text-green-700 mb-2">{user.name}</h2>
      <p className="text-lg">⭐ Pontos: {user.points}</p>
      <p className="text-lg">🌳 Árvores plantadas: {user.treesPlanted || 0}</p>
    </div>
  );
}