import { Restaurant, MenuItem } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bella Italia',
    description: 'Authentic Italian cuisine with fresh ingredients',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    minimumOrder: 15,
    cuisine: ['Italian', 'Pizza', 'Pasta'],
    isOpen: true
  },
  {
    id: '2',
    name: 'Spice Garden',
    description: 'Traditional Indian flavors and aromatic spices',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    deliveryTime: '30-40 min',
    deliveryFee: 3.49,
    minimumOrder: 20,
    cuisine: ['Indian', 'Curry', 'Vegetarian'],
    isOpen: true
  },
  {
    id: '3',
    name: 'Burger Palace',
    description: 'Gourmet burgers and crispy fries',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    minimumOrder: 12,
    cuisine: ['American', 'Burgers', 'Fast Food'],
    isOpen: true
  },
  {
    id: '4',
    name: 'Sushi Zen',
    description: 'Fresh sushi and Japanese delicacies',
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    deliveryTime: '35-45 min',
    deliveryFee: 4.99,
    minimumOrder: 25,
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    isOpen: false
  }
];

export const mockMenuItems: MenuItem[] = [
  // Bella Italia
  {
    id: '1',
    restaurantId: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomatoes, and basil',
    price: 14.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pizza',
    isVegetarian: true,
    isAvailable: true,
    preparationTime: 15
  },
  {
    id: '2',
    restaurantId: '1',
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with pancetta, eggs, and parmesan cheese',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pasta',
    isVegetarian: false,
    isAvailable: true,
    preparationTime: 20
  },
  // Spice Garden
  {
    id: '3',
    restaurantId: '2',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken in a rich, creamy tomato-based sauce',
    price: 18.99,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Main Course',
    isVegetarian: false,
    isAvailable: true,
    preparationTime: 25
  },
  {
    id: '4',
    restaurantId: '2',
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice with mixed vegetables and spices',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Rice',
    isVegetarian: true,
    isAvailable: true,
    preparationTime: 30
  },
  // Burger Palace
  {
    id: '5',
    restaurantId: '3',
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Burgers',
    isVegetarian: false,
    isAvailable: true,
    preparationTime: 12
  },
  {
    id: '6',
    restaurantId: '3',
    name: 'Crispy Chicken Wings',
    description: 'Spicy buffalo wings served with ranch dipping sauce',
    price: 10.99,
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Appetizers',
    isVegetarian: false,
    isAvailable: true,
    preparationTime: 15
  }
];