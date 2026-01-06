
import { MenuItem, Promo } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'a1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls with black truffle and melty mozzarella center.',
    price: 14.50,
    category: 'Appetizers',
    image: 'https://picsum.photos/id/429/600/400',
    calories: 420
  },
  {
    id: 'a2',
    name: 'Spiced Calamari',
    description: 'Tender squid lightly dusted in Sichuan pepper salt with lemon aioli.',
    price: 16.00,
    category: 'Appetizers',
    image: 'https://picsum.photos/id/493/600/400',
    calories: 380
  },
  {
    id: 'a3',
    name: 'Burrata & Prosciutto',
    description: 'Fresh Italian burrata, 24-month aged prosciutto, and balsamic glaze.',
    price: 18.50,
    category: 'Appetizers',
    image: 'https://picsum.photos/id/625/600/400',
    isSpecial: true
  },

  // Mains
  {
    id: 'm1',
    name: 'Wagyu Beef Burger',
    description: 'Premium Wagyu patty, aged cheddar, caramelized onions, and brioche bun.',
    price: 24.00,
    category: 'Mains',
    image: 'https://picsum.photos/id/488/600/400',
    calories: 850
  },
  {
    id: 'm2',
    name: 'Pan-Seared Scallops',
    description: 'Hokkaido scallops with pea purée, crispy pancetta, and herb oil.',
    price: 32.00,
    category: 'Mains',
    image: 'https://picsum.photos/id/635/600/400',
    isSpecial: true
  },
  {
    id: 'm3',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild forest mushrooms and parmigiano-reggiano.',
    price: 21.00,
    category: 'Mains',
    image: 'https://picsum.photos/id/835/600/400',
    calories: 540
  },

  // Desserts
  {
    id: 'd1',
    name: 'Deconstructed Tiramisu',
    description: 'Espresso-soaked ladyfingers, mascarpone cloud, and dark cocoa dust.',
    price: 12.00,
    category: 'Desserts',
    image: 'https://picsum.photos/id/102/600/400',
    calories: 450
  },
  {
    id: 'd2',
    name: 'Matcha Lava Cake',
    description: 'Molten green tea center with white chocolate and vanilla bean gelato.',
    price: 14.00,
    category: 'Desserts',
    image: 'https://picsum.photos/id/1080/600/400'
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Passionfruit Mojito',
    description: 'Fresh mint, lime, passionfruit pulp, and white rum.',
    price: 15.00,
    category: 'Drinks',
    image: 'https://picsum.photos/id/42/600/400'
  },
  {
    id: 'dr2',
    name: 'Artisanal Cold Brew',
    description: '18-hour slow steeped Ethiopian Yirgacheffe coffee beans.',
    price: 7.50,
    category: 'Drinks',
    image: 'https://picsum.photos/id/766/600/400'
  }
];

export const CATEGORIES: { id: string; name: string }[] = [
  { id: 'Appetizers', name: 'Appetizers' },
  { id: 'Mains', name: 'Mains' },
  { id: 'Desserts', name: 'Desserts' },
  { id: 'Drinks', name: 'Drinks' }
];

export const CURRENT_PROMO: Promo = {
  id: 'p1',
  title: 'Weekend Special: 15% OFF',
  description: 'Use code WEEKEND15 on orders above $50. Ends Sunday.',
  code: 'WEEKEND15'
};
