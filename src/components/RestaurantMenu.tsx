import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Truck } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';

interface RestaurantMenuProps {
  restaurant: Restaurant;
  menuItems: MenuItem[];
  onBack: () => void;
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ restaurant, menuItems, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(menuItems.map(item => item.category)))];
  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to restaurants</span>
            </button>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full md:w-32 h-32 object-cover rounded-lg mb-4 md:mb-0"
              />
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="h-4 w-4" />
                    <span>${restaurant.deliveryFee} delivery</span>
                  </div>
                  <span>Min. order: ${restaurant.minimumOrder}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {restaurant.cuisine.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All Items' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} menuItem={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;