import React, { useState } from 'react';
import { Heart, User } from 'lucide-react';

// Plant Card Component
function PlantCard({ plant, viewMode, toggleLike, type }) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-3">
        <div className="flex gap-3 p-3">
          <img
            src={plant.image}
            alt={plant.tree}
            className="w-24 h-24 object-cover rounded-xl"
          />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">{plant.name}</h3>
              <p className="text-xs text-gray-600 capitalize">Planted {plant.tree}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                {plant.time}
              </p>
              <button
                onClick={() => toggleLike(plant.id, type)}
                className="text-red-500 hover:scale-110 transition-transform"
              >
                <Heart
                  size={18}
                  fill={plant.liked ? "currentColor" : "none"}
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={plant.image}
          alt={plant.tree}
          className="w-full h-40 object-cover"
        />
        <button
          onClick={() => toggleLike(plant.id, type)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        >
          <Heart
            size={20}
            className="text-red-500"
            fill={plant.liked ? "currentColor" : "none"}
            strokeWidth={2}
          />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm">{plant.name}</h3>
        <p className="text-xs text-gray-600 capitalize mb-2">Planted {plant.tree}</p>
        <p className="text-xs text-green-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
          {plant.time}
        </p>
      </div>
    </div>
  );
}

export default function TreePlantingApp() {
  const [activeTab, setActiveTab] = useState('activity');
  const [viewMode, setViewMode] = useState('grid');

  // Latest events plants
  const [plants, setPlants] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
      name: 'James',
      tree: 'evergreen tree',
      time: '6 mins ago',
      liked: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop',
      name: 'Anastasia',
      tree: 'willow tree',
      time: '1h ago',
      liked: false
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop',
      name: 'Morgan',
      tree: 'oak tree',
      time: '3h ago',
      liked: true
    }
  ]);

  // My plants
  const [myPlants, setMyPlants] = useState([
    {
      id: 101,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=300&fit=crop',
      name: 'Your Plant 1',
      tree: 'Maple tree',
      time: 'Yesterday',
      liked: false
    },
    {
      id: 102,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      name: 'Your Plant 2',
      tree: 'Pine tree',
      time: '2 days ago',
      liked: true
    }
  ]);

  // Today's activity
  const todayActivity = [
    {
      id: 1,
      icon: '🌲',
      name: 'Richard',
      action: 'planted evergreen tree',
      time: '2:38pm',
      liked: false
    },
    {
      id: 2,
      icon: '🌿',
      name: 'Emily',
      action: 'planted tanabata tree',
      time: '5:47pm',
      liked: false
    }
  ];

  // Get all favorite plants (combining from both arrays)
  const getFavoritePlants = () => {
    const allPlants = [...plants, ...myPlants];
    return allPlants.filter(plant => plant.liked);
  };

  // Toggle like for plants
  const toggleLike = (id, type = 'recent') => {
    if (type === 'recent') {
      setPlants((prev) =>
        prev.map((plant) =>
          plant.id === id ? { ...plant, liked: !plant.liked } : plant
        )
      );
    } else {
      setMyPlants((prev) =>
        prev.map((plant) =>
          plant.id === id ? { ...plant, liked: !plant.liked } : plant
        )
      );
    }
  };

  const favoritePlants = getFavoritePlants();

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24">
      {/* Header with white background */}
      <div className="relative px-6 pt-6 pb-4 rounded-b-3xl shadow-sm bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Bem vindo Enzo,</p>
            <h1 className="text-3xl font-bold text-gray-900">Ajude-nos a salvar a terra</h1>
          </div>

          {/* Profile Icon */}
          <a
            href="/profile"
            className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-green-500 transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 justify-center">
          {['Activity', 'Favorites', 'My plants'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.toLowerCase()
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 mt-6">
        {/* Latest Plants / Favorites / My Plants Section */}
        {activeTab !== 'statistics' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {activeTab === 'activity' && 'Latest Events'}
                {activeTab === 'favorites' && 'Favorites'}
                {activeTab === 'my plants' && 'My Plants'}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="0" y="0" width="6" height="6" rx="1" />
                    <rect x="10" y="0" width="6" height="6" rx="1" />
                    <rect x="0" y="10" width="6" height="6" rx="1" />
                    <rect x="10" y="10" width="6" height="6" rx="1" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="0" y="2" width="16" height="2" rx="1" />
                    <rect x="0" y="7" width="16" height="2" rx="1" />
                    <rect x="0" y="12" width="16" height="2" rx="1" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-96 overflow-y-auto hide-scrollbar">
              {/* Activity Tab */}
              {activeTab === 'activity' && (
                <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
                  {plants.map((plant) => (
                    <PlantCard
                      key={plant.id}
                      plant={plant}
                      viewMode={viewMode}
                      toggleLike={toggleLike}
                      type="recent"
                    />
                  ))}
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <>
                  {favoritePlants.length > 0 ? (
                    <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
                      {favoritePlants.map((plant) => {
                        const type = plant.id > 100 ? 'my' : 'recent';
                        return (
                          <PlantCard
                            key={plant.id}
                            plant={plant}
                            viewMode={viewMode}
                            toggleLike={toggleLike}
                            type={type}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Heart size={48} className="text-gray-300 mb-3" />
                      <h3 className="text-gray-600 font-semibold mb-1">No favorites yet</h3>
                      <p className="text-sm text-gray-500">Start liking plants to see them here</p>
                    </div>
                  )}
                </>
              )}

              {/* My Plants Tab */}
              {activeTab === 'my plants' && (
                <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
                  {myPlants.map((plant) => (
                    <PlantCard
                      key={plant.id}
                      plant={plant}
                      viewMode={viewMode}
                      toggleLike={toggleLike}
                      type="my"
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Today Section - Only show on Activity tab */}
        {activeTab === 'activity' && (
          <div className="mb-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Hoje</h2>
            </div>

            <div className="space-y-3">
              {todayActivity.map((activity) => (
                <div key={activity.id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.name}</span> {activity.action}
                      </p>
                      <p className="text-xs text-green-600 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center pb-6 mt-8">
          <p className="text-xs text-gray-500">
            Privacy policy & Terms and conditions
          </p>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}