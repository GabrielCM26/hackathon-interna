export default function RankingList({ ranking }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      {ranking.map((user, index) => (
        <div
          key={user._id}
          className={`flex justify-between border-b py-2 ${index === 0 ? 'font-bold text-green-700' : ''}`}
        >
          <span>{index + 1}. {user.name}</span>
          <span>{user.points} pts</span>
        </div>
      ))}
    </div>
  );
}