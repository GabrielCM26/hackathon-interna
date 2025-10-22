export default function TreeCard({ species, location, plantedAt }) {
  return (
    <article className="font-sans bg-[#d9e9cf] text-[#594236] rounded-2xl shadow-lg p-6 flex flex-col gap-4 max-w-md">
      <header className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl" aria-hidden="true">
          🌳
        </span>
        <div>
          <h3 className="text-xl font-semibold leading-tight">{species}</h3>
          <p className="text-sm text-[#96a78d]">Uma conquista que dá sombra ao futuro.</p>
        </div>
      </header>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="flex items-start gap-3">
          <svg
            className="h-5 w-5 text-[#96a78d] mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21s-6-4.35-6-9a6 6 0 1 1 12 0c0 4.65-6 9-6 9z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
          <div>
            <dt className="uppercase tracking-wide text-xs text-[#96a78d]">Local</dt>
            <dd className="text-base font-medium">{location}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <svg
            className="h-5 w-5 text-[#96a78d] mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3.5" y="4" width="17" height="17" rx="2" />
            <path d="M8 3.5v4" />
            <path d="M16 3.5v4" />
            <path d="M3.5 11h17" />
          </svg>
          <div>
            <dt className="uppercase tracking-wide text-xs text-[#96a78d]">Plantada em</dt>
            <dd className="text-base font-medium">{plantedAt}</dd>
          </div>
        </div>
      </dl>
    </article>
  );
}