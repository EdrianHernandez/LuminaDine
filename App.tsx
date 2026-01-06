
import React, { useState, useEffect, useMemo } from 'react';
import { Category, MenuItem, CartItem } from './types';
import { MENU_ITEMS, CURRENT_PROMO } from './constants';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuItemGrid from './components/MenuItemGrid';
import CartSummary from './components/CartSummary';
import PromoBanner from './components/PromoBanner';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Appetizers');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  // Derived state for filtered menu
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Visual feedback - simple way is to show cart brieflty if first item
    if (cartItems.length === 0) {
      // Could trigger a toast here
    }
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col antialiased">
      {showPromo && (
        <PromoBanner 
          promo={CURRENT_PROMO} 
          onClose={() => setShowPromo(false)} 
        />
      )}
      
      <Header 
        cartCount={cartCount} 
        onCartToggle={() => setIsCartOpen(true)} 
      />

      <main className="flex-1">
        {/* Hero Section (Optional but adds aesthetic) */}
        <div className="bg-gray-900 py-12 px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Authentic Flavors, <br/>
                <span className="text-orange-500">Delivered to You.</span>
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
                Discover curated dishes from our award-winning kitchen. Fresh ingredients, exquisite taste.
            </p>
        </div>

        <CategoryNav 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <div className="bg-gray-50 min-h-[60vh]">
            <MenuItemGrid 
              items={filteredItems} 
              onAddToCart={handleAddToCart} 
            />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                    <span className="font-bold text-xl tracking-tight">Lumina Dine</span>
                </div>
                <p className="text-gray-400 text-sm max-w-xs">
                    Elevating the digital dining experience with premium ingredients and seamless service.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Gift Cards</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Franchise</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Support</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-orange-600 transition-colors">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Lumina Dine Inc. All rights reserved.
        </div>
      </footer>

      <CartSummary 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />

      {/* Persistent Call-to-Action for Mobile (Visible when cart is not empty) */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-40 lg:hidden">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-gray-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between font-bold animate-in slide-in-from-bottom duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {cartCount}
              </span>
              <span>View Cart</span>
            </div>
            <span>${cartItems.reduce((s, i) => s + (i.price * i.quantity), 0).toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
