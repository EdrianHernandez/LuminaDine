
export type Category = 'Appetizers' | 'Mains' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isSpecial?: boolean;
  calories?: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  code: string;
}
