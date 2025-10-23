import React, { useState } from 'react';
import { Sprout, Droplets, Sun, Leaf } from 'lucide-react';

export default function Dashboard() {
  const currentUser = {
    name: "Enzo Valentino",
    level: 7,
    xp: 2450,
    nextLevel: 3000,
    avatar: "🌱",
    position: 2
  };

  const stats = {
    trees: 18,
    streak: 7,
  };

  const ranking = [
    { name: "Leandrinho", xp: 2600, avatar: "👨", color: "bg-green-500" },
    { name: "Enzo Valentino", xp: 2450, avatar: "🌱", color: "bg-emerald-600", isCurrentUser: true },
    { name: "Sofia Rocha", xp: 2200, avatar: "👩", color: "bg-lime-500" },
    { name: "Lucas Ferreira", xp: 1900, avatar: "👨‍🦱", color: "bg-teal-500" },
    { name: "Ricardo Soares", xp: 1560, avatar: "👦", color: "bg-green-400" },
    { name: "Luna Oliveira", xp: 1540, avatar: "👧", color: "bg-emerald-400" },
  ];

  const progress = Math.min((currentUser.xp / currentUser.nextLevel) * 100, 100);
  const topThree = ranking.slice(0, 3);
  const restOfRanking = ranking.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Meu progresso</h1>
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
              {currentUser.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">{currentUser.name}</h2>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Nível {currentUser.level}</p>
              <p className="text-sm font-semibold text-gray-700">{currentUser.xp} PONTOS</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-700 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div 
              className="absolute top-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-emerald-600 transition-all duration-700"
              style={{ left: `calc(${progress}% - 6px)`, top: '-8px' }}
            ></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-3xl font-bold">{stats.trees}</span>
            </div>
            <p className="text-sm text-white/90">Árvores Plantadas</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-3xl font-bold">{stats.streak}</span>
            </div>
            <p className="text-sm text-white/90">Dias de Sequência</p>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Ranking Verde
          </h3>

          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-4 mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className={`w-16 h-16 ${topThree[1]?.color} rounded-full flex items-center justify-center text-2xl shadow-lg ${
                  topThree[1]?.isCurrentUser ? 'ring-4 ring-green-400' : ''
                }`}>
                  {topThree[1]?.avatar}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow">
                  2
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">{topThree[1]?.name.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{topThree[1]?.xp} pt</p>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-4">
              <div className="relative mb-2">
                <div className={`w-20 h-20 ${topThree[0]?.color} rounded-full flex items-center justify-center text-3xl shadow-xl ${
                  topThree[0]?.isCurrentUser ? 'ring-4 ring-green-400' : ''
                }`}>
                  {topThree[0]?.avatar}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                  1
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">{topThree[0]?.name.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{topThree[0]?.xp} pt</p>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className={`w-16 h-16 ${topThree[2]?.color} rounded-full flex items-center justify-center text-2xl shadow-lg ${
                  topThree[2]?.isCurrentUser ? 'ring-4 ring-green-400' : ''
                }`}>
                  {topThree[2]?.avatar}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow">
                  3
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center">{topThree[2]?.name.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{topThree[2]?.xp} pt</p>
            </div>
          </div>

          {/* Rest of Rankings */}
          <div className="space-y-2">
            {restOfRanking.map((user, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  user.isCurrentUser
                    ? 'bg-green-50 border-2 border-green-400'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-semibold text-gray-500 w-6">{index + 4}</span>
                <div className={`w-12 h-12 ${user.color} rounded-full flex items-center justify-center text-xl shadow`}>
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{user.name}</p>
                </div>
                <span className="text-sm font-semibold text-gray-600">{user.xp} PT</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}