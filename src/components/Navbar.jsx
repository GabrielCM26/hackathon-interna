import Link from "next/link";
import React from "react";
import { Home, Trophy, Store, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.6)] z-50">
      <div className="max-w-md mx-auto">
        <ul className="flex justify-around items-center text-center text-xs relative">
          {/* Início */}
          <a
            href="/community"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <Home className="w-6 h-6" strokeWidth={1.6} />
          </a>
        
          {/* Ranking */}
          <a
            href="/dashboardtest"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <Trophy className="w-6 h-6" strokeWidth={1.6} />
          </a>

          {/* Botão central - Plantar árvore */}
          <div className="relative -translate-y-6">
            <Link
              href="/add-tree"
              aria-label="Plantar árvore"
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#c8d8c2] text-black shadow-[0_8px_20px_rgba(182,206,180,0.45)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <span className="text-2xl">🌱</span>
              <span className="pointer-events-none absolute -bottom-6 whitespace-nowrap rounded-full bg-[#d9e9cf] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#594236] shadow-md">
                Plantar
              </span>
              <span
                className="absolute inset-0 rounded-full bg-[#b6ceb4]/0 transition group-hover:bg-[#b6ceb4]/20"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Shop */}
          <a
            href="/shop"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <Store className="w-6 h-6" strokeWidth={1.6} />
          </a>

          {/* Perfil */}
          <a
            href="/profile"
            className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4] p-2"
          >
            <User className="w-6 h-6" strokeWidth={1.6} />
          </a>
        </ul>
      </div>
    </nav>
  );
}