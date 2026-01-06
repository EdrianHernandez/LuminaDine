
import React from 'react';
import { ShoppingCart, Menu as MenuIcon, Search } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartToggle }) => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 h-16 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden">
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
          <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">Lumina Dine</span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search our menu..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onCartToggle}
          className="relative p-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg active:scale-95"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-600 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
