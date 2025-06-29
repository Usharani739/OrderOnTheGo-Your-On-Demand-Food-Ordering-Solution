export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'customer' | 'restaurant' | 'admin';
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minimumOrder: number;
  cuisine: string[];
  isOpen: boolean;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian: boolean;
  isAvailable: boolean;
  preparationTime: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  items: CartItem[];
  totalAmount: number;
  deliveryAddress: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  orderTime: Date;
  estimatedDeliveryTime: Date;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
}