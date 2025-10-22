import Footer from "@/components/Footer";
import React from "react";

export default function Dashboard() {
  const stats = {
    xp: 2450,
    nextLevel: 3000,
    level: 7,
    trees: 18,
    streak: 7,
  };

  const achievements = [
    { name: "Guardião da Floresta", xp: 300 },
    { name: "Semente de Ouro", xp: 150 },
    { name: "Explorador Sustentável", xp: 200 },
  ];

  const ranking = [
    { name: "Leandrinho", xp: 2600 },
    { name: "Enzo Valentino", xp: 2450 },
    { name: "Sofia Rocha", xp: 2200 },
    { name: "Lucas Ferreira", xp: 1900 },
  ];

  const progress = Math.min((stats.xp / stats.nextLevel) * 100, 100);

  return (
    <main className="min-h-screen bg-[#F0F0F0] text-[#594236] px-6 py-10 font-sans flex flex-col items-center">
      {/* Título */}
      <header className="w-full max-w-3xl mb-10 text-left">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard de Pontuação</h1>
        <p className="text-[#96A78D] text-sm">
          Acompanhe o teu progresso, conquistas e posição no ranking.
        </p>
      </header>

      {/* Barra de progresso principal */}
      <section className="w-full max-w-3xl space-y-2 mb-12">
        <div className="flex justify-between text-sm">
          <span>Nível {stats.level}</span>
          <span>
            {stats.xp}/{stats.nextLevel} XP
          </span>
        </div>
        <div className="w-full h-4 bg-[#D9E9CF] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#B6CEB4] transition-all duration-700"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-[#96A78D] mt-1">
          Próximo nível em {stats.nextLevel - stats.xp} XP 🌱
        </p>
      </section>

      {/* Estatísticas */}
      <section className="w-full max-w-3xl grid grid-cols-3 sm:grid-cols-4 gap-y-6 text-center mb-14">
        <div>
          <p className="text-2xl font-semibold text-[#594236]">{stats.xp}</p>
          <p className="text-sm text-[#96A78D]">XP Atual</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-[#594236]">{stats.trees}</p>
          <p className="text-sm text-[#96A78D]">Árvores</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-[#594236]">{stats.streak}</p>
          <p className="text-sm text-[#96A78D]">Sequência</p>
        </div>
      </section>

      {/* Conquistas */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-xl font-semibold mb-3 border-b border-[#B6CEB4] pb-1">
          Conquistas Recentes
        </h2>
        <ul className="space-y-2">
          {achievements.map((a, i) => (
            <li
              key={i}
              className="flex justify-between items-center border-b border-[#D9E9CF] pb-1"
            >
              <span>{a.name}</span>
              <span className="text-[#96A78D] font-medium">+{a.xp} XP</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Ranking */}
      <section className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-3 border-b border-[#B6CEB4] pb-1">
          Ranking Verde
        </h2>
        <div className="w-full space-y-1">
          {ranking.map((r, index) => (
            <div
              key={r.name}
              className={`flex justify-between items-center py-2 ${
                index === 0 ? "text-[#594236] font-semibold" : "text-[#96A78D]"
              }`}
            >
              <span>
                {index + 1}. {r.name}
              </span>
              <span className="text-[#594236]">{r.xp} XP</span>
            </div>
          ))}
        </div>
        <div>
        <Footer/>
        </div>
      </section>
    </main>
  );
}
