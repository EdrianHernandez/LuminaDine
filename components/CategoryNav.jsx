import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryNav = ({ activeCategory, setActiveCategory }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 overflow-x-auto no-scrollbar shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex gap-8 h-14 items-center whitespace-nowrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`category-btn relative h-full text-sm font-semibold transition-colors duration-200 
              ${activeCategory === cat.id 
                ? 'text-orange-600' 
                : 'text-gray-500 hover:text-gray-900'}`}
          >
            {cat.name}
            {activeCategory === cat.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
