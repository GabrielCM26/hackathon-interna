import React, { useState, useEffect } from 'react';
import PlantCardGrid from '../components/PlantCardGrid.jsx';

export default function TreePlantingApp() {
  const [activeTab, setActiveTab] = useState('activity');
  const [viewMode, setViewMode] = useState('grid');
  const [events, setEvents] = useState([]); // Events from backend (MongoDB)
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch all events from the backend
  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // 🔹 Load events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔹 Handle event creation (when clicking the button)
  const handleCreateEvent = async () => {
    setLoading(true);
    try {
      const randomImages = [
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1445820135715-50c1e1b561fb?w=800&h=600&fit=crop',
      ];
      const imageUrl = randomImages[Math.floor(Math.random() * randomImages.length)];

      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'New Tree Planted 🌱',
          description: 'A community member just planted a new tree!',
          location: 'Lisboa, Portugal',
          date: new Date(),
          imageUrl,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Event created successfully!');
        await fetchEvents(); // 🔄 Refresh event list dynamically
      } else {
        alert(data.message || 'Error creating event.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating the event.');
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Static “Today” activity (just for UI)
  const todayActivity = [
    {
      id: 1,
      icon: '🌲',
      name: 'Richard',
      action: 'planted evergreen tree',
      time: '2:38pm',
      liked: false,
    },
    {
      id: 2,
      icon: '🌿',
      name: 'Emily',
      action: 'planted tanabata tree',
      time: '5:47pm',
      liked: false,
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen">
      {/* ===== HEADER ===== */}
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
            <h1 className="text-3xl font-bold text-gray-900">
              Help us save the earth
            </h1>
          </div>
        </div>

        {/* ===== TABS ===== */}
        <div className="flex gap-2">
          {['Activity', 'Statistics', 'My plants'].map((tab) => (
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

      {/* ===== LATEST EVENTS SECTION ===== */}
      <div className="px-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Latest Events
          </h2>

          {/* View Mode Switcher (Grid/List) */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                  ? 'bg-green-100 text-green-600'
                  : 'text-gray-400 hover:bg-gray-100'
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
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                  ? 'bg-green-100 text-green-600'
                  : 'text-gray-400 hover:bg-gray-100'
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

        {/* ===== PLANT CARDS (EVENTS) ===== */}
        <div className="h-96 overflow-y-auto hide-scrollbar">
          {events.length > 0 ? (
            <PlantCardGrid recentPlants={events} viewMode={viewMode} />
          ) : (
            <p className="text-gray-500 text-sm text-center mt-8">
              No events yet. 🌿 Be the first to plant a tree!
            </p>
          )}
        </div>

        {/* ===== TODAY SECTION ===== */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Today
            </h2>
            <button className="text-xs font-medium text-green-600 hover:text-green-700">
              SEE ALL
            </button>
          </div>

          <div className="space-y-3">
            {todayActivity.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">{activity.name}</span>{' '}
                      {activity.action}
                    </p>
                    <p className="text-xs text-green-600 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                      {activity.time}
                    </p>
                  </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA BUTTON ===== */}
        <button
          onClick={handleCreateEvent}
          disabled={loading}
          className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:from-green-600 hover:to-green-700 mb-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
        >
          {loading ? 'Planting...' : 'Plant your first tree'}
        </button>

        {/* ===== FOOTER ===== */}
        <div className="text-center pb-6">
          <p className="text-xs text-gray-500">
            Privacy policy & Terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}
