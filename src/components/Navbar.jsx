import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.6)] z-50">
      <ul className="flex justify-around items-center text-center text-xs relative">

        {/* Início */}
        <a
          href="/dashboard"
          className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6H9v6H3.75A.75.75 0 013 21V9.75z"
            />
          </svg>
        </a>

        {/* Ranking */}
        <a
          href="/ranking"
          className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M16 2a1 1 0 011 1v1h3a1 1 0 011 1v3a5 5 0 01-5 5h-.268a7.001 7.001 0 01-13.464 0H2a5 5 0 01-5-5V5a1 1 0 011-1h3V3a1 1 0 011-1h14zm-7 14a5 5 0 004.546-3H8.454A5 5 0 009 16z" />
          </svg>
        </a>

        {/* Botão central - Plantar árvore */}
        <div className="relative -translate-y-8">
          <Link
            href="/add-tree"
            aria-label="Plantar árvore"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#c8d8c2] text-black shadow-[0_12px_30px_rgba(182,206,180,0.45)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <span className="text-3xl">🌱</span>
            <span className="pointer-events-none absolute -bottom-7 whitespace-nowrap rounded-full bg-[#d9e9cf] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#594236] shadow-md">
              Plantar
            </span>
            <span
              className="absolute inset-0 rounded-full bg-[#b6ceb4]/0 transition group-hover:bg-[#b6ceb4]/20"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Notificações */}
        <a
          href="/notifications"
          className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 18.75a2.25 2.25 0 01-4.5 0m9-6V9a6 6 0 10-12 0v3.75L4.5 16.5h15l-1.5-3.75z"
            />
          </svg>
        </a>

        {/* Perfil */}
        <a
          href="/profile"
          className="flex flex-col items-center transition-all duration-300 hover:scale-110 hover:text-[#b6ceb4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zM4.5 21a7.5 7.5 0 0115 0"
            />
          </svg>
        </a>
      </ul>
    </nav>
  );
}
