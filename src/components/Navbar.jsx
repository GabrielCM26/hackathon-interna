export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.6)] z-50">
      <ul className="flex justify-around items-center text-center text-xs">
        
        {/* Início */}
        <li>
          <a href="/dashboard" className="flex flex-col items-center hover:text-green-400">
            {/* Ícone Home */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6H9v6H3.75A.75.75 0 013 21V9.75z" />
            </svg>
            <span>Início</span>
          </a>
        </li>

        {/* Ranking */}
        <li>
          <a href="/ranking" className="flex flex-col items-center hover:text-green-400">
            {/* Ícone Troféu */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-1">
              <path d="M16 2a1 1 0 011 1v1h3a1 1 0 011 1v3a5 5 0 01-5 5h-.268a7.001 7.001 0 01-13.464 0H2a5 5 0 01-5-5V5a1 1 0 011-1h3V3a1 1 0 011-1h14zm-7 14a5 5 0 004.546-3H8.454A5 5 0 009 16z" />
            </svg>
            <span>Ranking</span>
          </a>
        </li>

        {/* Adicionar */}
        <li>
          <a href="/add-tree" className="flex flex-col items-center text-green-400 hover:text-green-300">
            {/* Ícone + */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 mb-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Plantar</span>
          </a>
        </li>

        {/* Notificações */}
        <li>
          <a href="/notifications" className="flex flex-col items-center hover:text-green-400">
            {/* Ícone Sininho */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 18.75a2.25 2.25 0 01-4.5 0m9-6V9a6 6 0 10-12 0v3.75L4.5 16.5h15l-1.5-3.75z" />
            </svg>
            <span>Alertas</span>
          </a>
        </li>

        {/* Perfil */}
        <li>
          <a href="/profile" className="flex flex-col items-center hover:text-green-400">
            {/* Ícone Perfil */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zM4.5 21a7.5 7.5 0 0115 0" />
            </svg>
            <span>Perfil</span>
          </a>
        </li>

      </ul>
    </nav>
  );
}
