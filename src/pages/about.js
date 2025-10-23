import React from 'react';

export default function AboutUs() {
  const team = [
    {
      name: "Ana Silva",
      role: "CEO, Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "João Costa",
      role: "Impact Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Maria Santos",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Pedro Oliveira",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-900">
      <div className="w-full max-w-md min-h-screen bg-[#f0f0f0] pb-24">
        {/* Hero Section */}
        <div 
          className="relative h-56 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">About us</h1>
          </div>
        </div>

        {/* About Section */}
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <p className="text-[#96a78d] text-xs uppercase tracking-wider mb-2">⚫ ABOUT US ⚫</p>
            <h2 className="text-2xl font-bold text-[#594236]">
              <span className="text-[#b6ceb4]">Introduction</span> To Best<br />
              Sustainable Platform!
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-2xl p-4 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d9e9cf] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💰</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#594236] text-sm mb-1">Best Price Guaranteed</h3>
                <p className="text-xs text-[#96a78d]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d9e9cf] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔧</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#594236] text-sm mb-1">Transparency</h3>
                <p className="text-xs text-[#96a78d]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-[#d9e9cf] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#594236] text-sm mb-1">Professional Team</h3>
                <p className="text-xs text-[#96a78d]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 text-xs text-[#96a78d] mb-8">
            <p>
              Harum quisquam amet debitis pariatur quis? Nemo excepturi duis 
              nohon nostrud officia dolorem fugit itaque, fugiat excepturi modi, porta.
            </p>
            <p>
              Odio velit, odit, est, euismod aliquid luctus pharetra vera, 
              condimentum, nostrum mi venenatis, mollit odio mi, unde 
              semper adipiscing sui.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-md h-32">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-32 relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#b6ceb4] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* UN SDG Goals */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-[#594236] mb-1">UN SDGs Commitment</h3>
              <p className="text-xs text-[#96a78d]">Aligned with Sustainable Development Goals</p>
            </div>
            <div className="flex justify-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='80'%3E%3Crect width='98' height='80' fill='%23E5883E'/%3E%3Crect x='101' width='98' height='80' fill='%23417F4F'/%3E%3Crect x='202' width='98' height='80' fill='%2356C02B'/%3E%3Ctext x='20' y='30' font-family='Arial' font-size='20' font-weight='bold' fill='white'%3E11%3C/text%3E%3Ctext x='10' y='50' font-family='Arial' font-size='8' fill='white'%3ESUSTAINABLE%3C/text%3E%3Ctext x='20' y='60' font-family='Arial' font-size='8' fill='white'%3ECITIES%3C/text%3E%3Ctext x='121' y='30' font-family='Arial' font-size='20' font-weight='bold' fill='white'%3E13%3C/text%3E%3Ctext x='115' y='50' font-family='Arial' font-size='8' fill='white'%3ECLIMATE%3C/text%3E%3Ctext x='115' y='60' font-family='Arial' font-size='8' fill='white'%3EACTION%3C/text%3E%3Ctext x='222' y='30' font-family='Arial' font-size='20' font-weight='bold' fill='white'%3E15%3C/text%3E%3Ctext x='227' y='50' font-family='Arial' font-size='8' fill='white'%3ELIFE%3C/text%3E%3Ctext x='215' y='60' font-family='Arial' font-size='8' fill='white'%3EON LAND%3C/text%3E%3C/svg%3E"
                alt="UN SDG Goals"
                className="w-full max-w-xs h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <p className="text-[#96a78d] text-xs uppercase tracking-wider mb-2">⚫ OUR TEAM ⚫</p>
              <h2 className="text-2xl font-bold text-[#594236]">
                <span className="text-[#b6ceb4]">Team</span> Members
              </h2>
              <p className="text-xs text-[#96a78d] mt-2">
                Sint nasactur facilis, delectus conubia consequuntur.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <div className="bg-[#b6ceb4] text-white rounded-full inline-block px-4 py-2 -mt-8 mb-2 shadow-lg relative z-10">
                        <h3 className="font-semibold text-xs">{member.name}</h3>
                        <p className="text-[10px] opacity-90">{member.role}</p>
                      </div>
                      <div className="flex justify-center gap-2 mt-2">
                        <button className="w-6 h-6 bg-[#f0f0f0] rounded-full flex items-center justify-center text-[10px]">f</button>
                        <button className="w-6 h-6 bg-[#f0f0f0] rounded-full flex items-center justify-center text-[10px]">t</button>
                        <button className="w-6 h-6 bg-[#f0f0f0] rounded-full flex items-center justify-center text-[10px]">in</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}