
import React from 'react';
import { Megaphone, X } from 'lucide-react';
import { Promo } from '../types';

interface PromoBannerProps {
  promo: Promo;
  onClose: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ promo, onClose }) => {
  return (
    <div className="bg-orange-600 text-white px-4 py-3 flex items-center justify-between shadow-md relative z-50">
      <div className="flex items-center gap-3">
        <div className="bg-orange-500 p-1.5 rounded-full">
          <Megaphone className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-sm block sm:inline mr-2">{promo.title}</span>
          <span className="text-xs sm:text-sm text-orange-100">{promo.description}</span>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="p-1 hover:bg-orange-700 rounded-full transition-colors"
        aria-label="Close promotion"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PromoBanner;
