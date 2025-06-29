import React from 'react';
import { Clock, Star, Truck } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Closed</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{restaurant.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{restaurant.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {restaurant.cuisine.map((type) => (
            <span
              key={type}
              className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Truck className="h-4 w-4" />
            <span>${restaurant.deliveryFee}</span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Min. order: ${restaurant.minimumOrder}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;