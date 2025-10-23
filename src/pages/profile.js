import React, { useState, useEffect } from "react";
import { Coins } from "lucide-react";

export default function Profile() {

  const user = {
    name: "Enzo Valentino",
    email: "enzo@example.com",
    coins: 5,
    streak: 7,
    trees: 18,
    badges: ["Eco Iniciante", "Guardião da Floresta", "Semente de Ouro"],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-[#1f2937] flex flex-col items-center px-6 py-10 font-sans pb-24">
      {/* Header */}
      <header className="w-full max-w-2xl flex items-center justify-between mb-8">
        <h1 className="text-lg font-semibold text-[#14532d]">Meu Perfil</h1>
      </header>

      {/* Profile Card */}
      <section className="w-full max-w-2xl bg-white rounded-3xl shadow-md p-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-4xl font-bold text-[#22c55e] mb-4">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold text-[#14532d]">{user.name}</h2>
        <p className="text-sm text-[#166534] mb-6">{user.email}</p>
      </section>

      {/* Stats */}
      <section className="w-full max-w-2xl bg-white rounded-3xl mt-8 p-6 shadow-md grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🔥</span>
          <p className="text-xs text-[#15803d] uppercase">Sequência</p>
          <span className="text-lg font-bold text-[#14532d]">{user.streak}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🌳</span>
          <p className="text-xs text-[#15803d] uppercase">Árvores</p>
          <span className="text-lg font-bold text-[#14532d]">{user.trees}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Coins className="text-amber-500" size={28} />
          <p className="text-xs text-[#15803d] uppercase">Coins</p>
          <span className="text-lg font-bold text-[#14532d]">{user.coins}</span>
        </div>
      </section>

      {/* Badges */}
      <section className="w-full max-w-2xl bg-white rounded-3xl mt-8 p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#14532d]">
          <span>Conquistas</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {user.badges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#dcfce7] text-[#14532d] px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#bbf7d0] transition"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section className="w-full max-w-2xl mt-8 flex flex-col gap-4">
        <button className="flex justify-between items-center bg-white rounded-2xl p-4 border border-[#bbf7d0] hover:border-[#86efac] transition">
          <div className="flex items-center gap-3">
            <span className="text-xl">👥</span>
            <span className="text-[#14532d]">Convidar um Amigo</span>
          </div>
          <span className="text-[#22c55e] font-semibold">Convidar</span>
        </button>

        <button className="flex justify-between items-center bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-2xl p-4 text-white font-semibold shadow-lg hover:opacity-90 transition">
          <span>Plano Verde+</span>
          <span>Ativar</span>
        </button>
      </section>
    </main>
  );
}