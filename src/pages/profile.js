import React, { useState, useEffect } from "react";

export default function Profile() {
  const [xp, setXp] = useState(320);
  const nextLevelXP = 500;
  const progress = Math.min((xp / nextLevelXP) * 100, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setXp((prev) => (prev + 10 > nextLevelXP ? 0 : prev + 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const user = {
    name: "Enzo Valentino",
    level: 5,
    streak: 7,
    trees: 18,
    badges: ["Eco Iniciante", "Guardião da Floresta", "Semente de Ouro"],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0d0a] via-[#1a1f1a] to-[#0b0d0a] text-[#f1f5f2] flex flex-col items-center px-6 py-10 font-sans">
      {/* Header */}
      <header className="w-full max-w-2xl flex items-center justify-between mb-8">
        <h1 className="text-lg font-semibold">Meu Perfil</h1>
        <button
          className="text-[#b6ceb4] hover:text-white transition text-2xl"
          aria-label="Configurações"
        >
          ⚙️
        </button>
      </header>

      {/* Profile Card */}
      <section className="w-full max-w-2xl bg-[#10140f] rounded-3xl shadow-lg p-6 flex flex-col items-center border border-[#2b352b]">
        <div className="w-24 h-24 rounded-full bg-[#b6ceb4]/20 flex items-center justify-center text-4xl font-bold text-[#b6ceb4] mb-4">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-sm text-[#b6ceb4] mb-6">{user.email}</p>

        {/* XP Progress */}
        <div className="w-full mb-4">
          <div className="flex justify-between text-xs text-[#b6ceb4] mb-1">
            <span>Nível {user.level}</span>
            <span>
              {xp}/{nextLevelXP} XP
            </span>
          </div>
          <div className="w-full bg-[#1e251f] rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#b6ceb4] to-[#7eb87d] h-3 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-[#96a78d]">
          Continue plantando para subir de nível 🌱
        </p>
      </section>

      {/* Stats */}
      <section className="w-full max-w-2xl bg-[#10140f] rounded-3xl mt-8 p-6 shadow-lg border border-[#2b352b] grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🔥</span>
          <p className="text-xs text-[#b6ceb4] uppercase">Sequência</p>
          <span className="text-lg font-bold text-white">{user.streak}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🌳</span>
          <p className="text-xs text-[#b6ceb4] uppercase">Árvores</p>
          <span className="text-lg font-bold text-white">{user.trees}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">⭐</span>
          <p className="text-xs text-[#b6ceb4] uppercase">Nível</p>
          <span className="text-lg font-bold text-white">{user.level}</span>
        </div>
      </section>

      {/* Badges */}
      <section className="w-full max-w-2xl bg-[#10140f] rounded-3xl mt-8 p-6 shadow-lg border border-[#2b352b]">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          🏅 <span>Conquistas</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {user.badges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#1e251f] text-[#b6ceb4] px-4 py-2 rounded-full text-sm font-medium border border-[#2b352b] hover:bg-[#2b352b] transition"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section className="w-full max-w-2xl mt-8 flex flex-col gap-4">
        <button className="flex justify-between items-center bg-[#1e251f] rounded-2xl p-4 hover:bg-[#2b352b] transition">
          <div className="flex items-center gap-3">
            <span className="text-xl">👥</span>
            <span>Convidar um Amigo</span>
          </div>
          <span className="text-[#b6ceb4] font-semibold">Convidar</span>
        </button>

        <button className="flex justify-between items-center bg-gradient-to-r from-[#b6ceb4] to-[#96a78d] rounded-2xl p-4 text-[#0b0d0a] font-semibold shadow-lg hover:opacity-90 transition">
          <span>Plano Verde+</span>
          <span>Ativar</span>
        </button>
      </section>
    </main>
  );
}
