import React, { useState, useEffect } from 'react';
import PlantCardGrid from '../components/PlantCardGrid.jsx';
import AddTreeForm from '../components/AddTreeForm.jsx';
import Navbar from '../components/Navbar.jsx';
import { User } from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('activity');
  const [viewMode, setViewMode] = useState('grid');
  const [plants, setPlants] = useState([]); // 🌿 Todos los eventos del backend
  const [myTrees, setMyTrees] = useState([]); // 🌱 Árboles de Enzo
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // 🔹 Obtener todos los eventos desde MongoDB
  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();

      if (Array.isArray(data)) {
        setPlants(data);

        // 🔍 Filtrar solo árboles plantados por Enzo Valentino
        const userTrees = data.filter(
          (event) => event.organizerName?.toLowerCase() === 'enzo valentino'
        );
        setMyTrees(userTrees);
      }
    } catch (error) {
      console.error('❌ Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 🔹 Manejar nuevo árbol desde el modal
  const handleAddTree = async (formData) => {
    setLoading(true);
    try {
      const randomImages = [
        'https://images.unsplash.com/photo-1578011166201-83d553ed495f?auto=format&fit=crop&q=80&w=627',
        'https://images.unsplash.com/photo-1566114912475-c04353a8eab1?auto=format&fit=crop&q=80&w=687',
        'https://images.unsplash.com/photo-1603352910231-534f880418e3?auto=format&fit=crop&q=80&w=687',
        'https://plus.unsplash.com/premium_photo-1680018259460-e679784869c3?auto=format&fit=crop&q=80&w=687',
      ];
      const imageUrl =
        randomImages[Math.floor(Math.random() * randomImages.length)];

      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.species, // 🌳 Usamos el tipo de árbol como título
          description: `Plantado em ${formData.location}`,
          location: formData.location,
          date: new Date(),
          imageUrl,
          icon: '🌱',
          liked: false,
          organizerName: 'Enzo Valentino',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        await fetchEvents();
        setShowForm(false);
      } else {
        alert(data.message || 'Erro ao adicionar árvore.');
      }
    } catch (error) {
      console.error('❌ Error adding tree:', error);
      alert('Erro ao adicionar árvore.');
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Alternar "me gusta"
  const toggleLike = (id) => {
    setPlants((prev) =>
      prev.map((p) => (p._id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  // 🔹 Actividad reciente
  const todayActivity = plants.slice(0, 5).map((event) => ({
    id: event._id,
    icon: event.icon || '🌿',
    name: event.organizerName || 'Verde Lab',
    action: `planted ${event.title}`,
    time: new Date(event.date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
  }));

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24 relative">
      {/* ===== HEADER ===== */}
      <div className="relative px-6 pt-6 pb-4 rounded-b-3xl shadow-sm bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Bem vindo Enzo,</p>
            <h1 className="text-3xl font-bold text-gray-900">
              Ajude-nos a salvar a terra
            </h1>
          </div>

          {/* Ícone de Perfil */}
          <a
            href="/profile"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
          >
            <User className="w-5 h-5" strokeWidth={2} />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-10 justify-center">
          {['Activity', 'My plants'].map((tab) => (
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

      {/* ===== PLANTAS (Activity) ===== */}
      <div className="px-6 mt-6">
        {activeTab === 'activity' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Últimos Eventos
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                      ? 'bg-green-100 text-green-600'
                      : 'text-gray-400 hover:bg-gray-100'
                    }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
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
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <rect x="0" y="2" width="16" height="2" rx="1" />
                    <rect x="0" y="7" width="16" height="2" rx="1" />
                    <rect x="0" y="12" width="16" height="2" rx="1" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-96 overflow-y-auto hide-scrollbar">
              {plants.length > 0 ? (
                <PlantCardGrid
                  recentPlants={plants.map((p) => ({
                    id: p._id,
                    image: p.imageUrl,
                    name: p.organizerName || 'Verde Lab',
                    tree: p.title,
                    time: new Date(p.date).toLocaleDateString(),
                    liked: p.liked,
                  }))}
                  viewMode={viewMode}
                  toggleLike={toggleLike}
                />
              ) : (
                <p className="text-gray-500 text-sm text-center mt-8">
                  Nenhum evento ainda. 🌿 Seja o primeiro a plantar uma árvore!
                </p>
              )}
            </div>
          </>
        )}

        {/* ===== MY PLANTS ===== */}
        {activeTab === 'my plants' && (
          <div className="h-96 overflow-y-auto hide-scrollbar">
            {myTrees.length > 0 ? (
              <PlantCardGrid
                recentPlants={myTrees.map((p) => ({
                  id: p._id,
                  image: p.imageUrl,
                  name: 'Enzo Valentino',
                  tree: p.title, // ✅ Tipo de árvore plantado
                  time: new Date(p.date).toLocaleDateString(),
                  liked: p.liked,
                }))}
                viewMode={viewMode}
                toggleLike={toggleLike}
              />
            ) : (
              <p className="text-gray-500 text-sm text-center mt-8">
                Ainda não plantaste nenhuma árvore. 🌳
              </p>
            )}
          </div>
        )}

        {/* ===== TODAY SECTION ===== */}
        {activeTab === 'activity' && (
          <div className="mb-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Hoje
              </h2>
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
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== FOOTER ===== */}
        <div className="text-center pb-6">
          <p className="text-xs text-gray-500">
            Privacy policy & Terms and conditions
          </p>
        </div>
      </div>

      {/* ===== POP-UP (MOBILE MODAL) ===== */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4 transition-all">
          <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md shadow-2xl animate-slide-up">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <div className="p-6">
              <AddTreeForm onAdd={handleAddTree} />
            </div>
          </div>
        </div>
      )}

      {/* ===== NAVBAR ===== */}
      <Navbar onPlantClick={() => setShowForm(true)} />
    </div>
  );
}
