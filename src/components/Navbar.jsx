import React from "react";
import Link from "next/link";

export default function Navbar({ onPlantClick }) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-black text-white py-3 rounded-t-3xl shadow-[0_-4px_15px_rgba(0,0,0,0.5)] z-50">
      <ul className="flex justify-around items-center text-center text-xs relative">

        {/* Home */}
        <a href="/dashboard" className="flex flex-col items-center hover:scale-110 hover:text-[#b6ceb4] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3z" />
          </svg>
        </a>

        {/* Ranking */}
        <a href="/ranking" className="flex flex-col items-center hover:scale-110 hover:text-[#b6ceb4] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
            <path d="M16 2a1 1 0 011 1v1h3v4a5 5 0 01-5 5H9a5 5 0 01-5-5V4h3V3a1 1 0 011-1h8z" />
          </svg>
        </a>

        {/* Plantar árvore */}
        <div className="relative -translate-y-8">
          <button
            onClick={onPlantClick}
            aria-label="Plantar árvore"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#c8d8c2] text-black shadow-[0_12px_30px_rgba(182,206,180,0.45)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <span className="text-3xl">🌱</span>
          </button>
        </div>

        {/* Notificações */}
        <a href="/notifications" className="flex flex-col items-center hover:scale-110 hover:text-[#b6ceb4] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 18.75a2.25 2.25 0 01-4.5 0m9-6V9a6 6 0 10-12 0v3.75L4.5 16.5h15z" />
          </svg>
        </a>

        {/* Perfil */}
        <a href="/profile" className="flex flex-col items-center hover:scale-110 hover:text-[#b6ceb4] transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.5 21a7.5 7.5 0 0115 0" />
          </svg>
        </a>
      </ul>
    </nav>
  );
}
