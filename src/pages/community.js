import React, { useState } from 'react';
import PlantCardGrid from '../components/PlantCardGrid.jsx';

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

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen">
      {/* Header */}
      <div className="bg-white px-6 pt-6 pb-4 rounded-b-3xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-green-200 rounded-2xl flex items-center justify-center shadow-md overflow-hidden">
            <img
              src="/logo.png"
              alt="Tree Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600">How are you Enzo,</p>
            <h1 className="text-3xl font-bold text-gray-900">Help us save the earth</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-10 justify-center px- ">
          {['Activity', 'My plants'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.toLowerCase()
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Plants / My Plants Section */}
      <div className="px-6 mt-6">
        {activeTab !== 'statistics' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {activeTab === 'activity' ? 'Latest Events' : 'My Plants'}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:bg-gray-100'
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
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:bg-gray-100'
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
              {activeTab === 'activity' && (
                <PlantCardGrid recentPlants={plants} viewMode={viewMode} toggleLike={(id) => toggleLike(id, 'recent')} />
              )}
              {activeTab === 'my plants' && (
                <PlantCardGrid recentPlants={myPlants} viewMode={viewMode} toggleLike={(id) => toggleLike(id, 'my')} />
              )}
            </div>
          </>
        )}

        {/* Today Section */}
        {activeTab === 'activity' && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Today</h2>
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

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:from-green-600 hover:to-green-700 mb-4">
          Plant a tree
        </button>

        {/* Footer */}
        <div className="text-center pb-6">
          <p className="text-xs text-gray-500">
            Privacy policy & Terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}
