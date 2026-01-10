import React from 'react';
import { Plus, Flame, Info } from 'lucide-react';

const MenuItemGrid = ({ items, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4 md:p-8 max-w-7xl mx-auto">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="menu-item group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {item.isSpecial && (
              <div className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <Flame className="w-3 h-3" />
                CHEF'S SPECIAL
              </div>
            )}
            <button 
              onClick={() => onAddToCart(item)}
              className="absolute bottom-3 right-3 bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-all active:scale-90"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">{item.name}</h3>
              <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
              {item.description}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              {item.calories && (
                <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                  <span className="flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    {item.calories} kcal
                  </span>
                </div>
              )}
              <div className="text-[11px] font-bold text-orange-600 tracking-wider">
                {item.category.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemGrid;
