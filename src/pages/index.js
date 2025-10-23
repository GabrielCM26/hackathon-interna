import Link from 'next/link';

export const metadata = {
  hideNavbar: true
};

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-900">
      <div className="w-full max-w-md h-screen bg-no-repeat bg-cover bg-top overflow-hidden"
        style={{ backgroundImage: "url('/landingpage.jpg')" }}
      >
        <div className="flex flex-col justify-between w-full h-full p-6 text-white">
          <main className="flex-1"></main>

          <div className="text-center space-y-8 mb-8">
            <h1 className="font-serif text-3xl font-extrabold tracking-tight">
              Plant a tree <span className="font-serif text-3xl font-extrabold tracking-tight text-emerald-600">&</span><br />
              <span>save our planet</span>
            </h1>

            <Link href="/community" passHref>
              <button
                className="font-serif w-fit mx-auto px-6 py-4 flex justify-center text-sm rounded-2xl bg-emerald-600 opacity-95 text-white
               font-semibold shadow-lg active:scale-95 transform transition mb-5 cursor-pointer">
                Plant a tree
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}