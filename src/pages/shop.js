import React, { useState } from 'react';
import { Leaf, ShoppingBag, Coins, Heart, Package, Sprout, TreePine, Shirt } from 'lucide-react';

export default function EcoShop() {
  const [userCoins, setUserCoins] = useState(5);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tudo', icon: ShoppingBag },
    { id: 'seeds', name: 'Sementes', icon: Sprout },
    { id: 'accessories', name: 'Acessórios', icon: Heart },
    { id: 'apparel', name: 'Roupa', icon: Shirt },
    { id: 'tools', name: 'Ferramentas', icon: Package }
  ];

  const products = [
    {
      id: 1,
      name: 'Sementes de Girassol',
      category: 'seeds',
      price: 25,
      image: '🌻',
      description: 'Pacote com 20 sementes',
      inStock: true
    },
    {
      id: 2,
      name: 'Kit de Compostagem',
      category: 'tools',
      price: 150,
      image: '♻️',
      description: 'Kit completo para compostagem caseira',
      inStock: true
    },
    {
      id: 3,
      name: 'T-shirt Eco',
      category: 'apparel',
      price: 200,
      image: '👕',
      description: '100% algodão orgânico',
      inStock: true
    },
    {
      id: 4,
      name: 'Garrafa Reutilizável',
      category: 'accessories',
      price: 75,
      image: '🧴',
      description: 'Aço inoxidável, 750ml',
      inStock: true
    },
    {
      id: 5,
      name: 'Sementes de Tomate',
      category: 'seeds',
      price: 30,
      image: '🍅',
      description: 'Variedade orgânica',
      inStock: true
    },
    {
      id: 6,
      name: 'Pá de Jardim',
      category: 'tools',
      price: 85,
      image: '🔨',
      description: 'Cabo de madeira sustentável',
      inStock: true
    },
    {
      id: 7,
      name: 'Boné Eco',
      category: 'apparel',
      price: 120,
      image: '🧢',
      description: 'Material reciclado',
      inStock: false
    },
    {
      id: 8,
      name: 'Sacola Reutilizável',
      category: 'accessories',
      price: 40,
      image: '👜',
      description: 'Tecido natural resistente',
      inStock: true
    },
    {
      id: 9,
      name: 'Sementes de Manjericão',
      category: 'seeds',
      price: 20,
      image: '🌿',
      description: 'Perfeito para cozinha',
      inStock: true
    },
    {
      id: 10,
      name: 'Regador Sustentável',
      category: 'tools',
      price: 95,
      image: '💧',
      description: 'Plástico reciclado',
      inStock: true
    },
    {
      id: 11,
      name: 'Crachá de Embaixador',
      category: 'accessories',
      price: 180,
      image: '🏅',
      description: 'Distintivo especial',
      inStock: true
    },
    {
      id: 12,
      name: 'Saco de Pinhões',
      category: 'seeds',
      price: 50,
      image: '🌰',
      description: '100g de pinhões para plantar',
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handlePurchase = (product) => {
    if (userCoins >= product.price && product.inStock) {
      setUserCoins(userCoins - product.price);
      setCart([...cart, product]);
      alert(`✅ ${product.name} adquirido com sucesso!`);
    } else if (!product.inStock) {
      alert('❌ Produto esgotado');
    } else {
      alert('❌ Moedas insuficientes');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <ShoppingBag className="text-green-600" size={24} />
                Loja Ecológica
              </h1>
              <p className="text-xs text-gray-600 mt-1">Troque suas moedas</p>
            </div>
            <div className="bg-amber-100 px-3 py-1.5 rounded-full border-2 border-amber-300">
              <div className="flex items-center gap-1.5">
                <Coins className="text-amber-600" size={20} />
                <span className="font-bold text-base text-gray-800">{userCoins}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Subscription Banner */}
      <div className="px-4 pt-4 pb-2">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="text-yellow-300" size={20} />
              <h3 className="text-white font-bold text-base">Plano Verde+</h3>
            </div>
            <p className="text-green-50 text-xs mb-3 leading-relaxed">
              Ganhe 2x mais moedas, acesso a produtos exclusivos, opção de criar eventos e uma "tree package" todos os meses!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-sm">25€/mês</span>
              </div>
              <button className="bg-white text-green-700 px-4 py-1.5 rounded-full font-bold text-xs shadow-md active:scale-95 transition-transform">
                Ativar Agora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full whitespace-nowrap transition-all text-sm ${
                  activeCategory === cat.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700'
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 pb-24">
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 flex items-center justify-center">
                <span className="text-5xl">{product.image}</span>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full">
                    <Coins className="text-amber-600" size={14} />
                    <span className="font-bold text-amber-700 text-sm">{product.price}</span>
                  </div>
                  {!product.inStock && (
                    <span className="text-xs text-red-600 font-semibold">Esgotado</span>
                  )}
                </div>

                <button
                  onClick={() => handlePurchase(product)}
                  disabled={!product.inStock || userCoins < product.price}
                  className={`w-full py-1.5 rounded-lg font-semibold text-xs transition-all ${
                    !product.inStock || userCoins < product.price
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white active:scale-95'
                  }`}
                >
                  {!product.inStock ? 'Esgotado' : userCoins < product.price ? 'Sem moedas' : 'Adquirir'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white max-w-md mx-auto">
        <div className="px-4 py-2.5 flex justify-around items-center">
          <button className="flex flex-col items-center gap-0.5 text-gray-400">
            <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs">N</div>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-gray-400">
            <div className="w-7 h-7 flex items-center justify-center text-xl">🏆</div>
          </button>
          <button className="flex flex-col items-center gap-0.5">
            <ShoppingBag className="text-green-500" size={22} />
            <span className="text-xs bg-white text-gray-900 px-2.5 py-0.5 rounded font-semibold">LOJA</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-gray-400">
            <div className="w-7 h-7 flex items-center justify-center text-xl">🏠</div>
          </button>
          <button className="flex flex-col items-center gap-0.5 text-gray-400">
            <div className="w-7 h-7 flex items-center justify-center text-xl">👤</div>
          </button>
        </div>
      </div>
    </div>
  );
}