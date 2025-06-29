import React, { useState } from 'react';
import { Plus, Minus, Leaf } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  menuItem: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ menuItem }) => {
  const { addToCart, items, updateQuantity } = useCart();
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  const cartItem = items.find(item => item.menuItem.id === menuItem.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    if (quantity === 0) {
      addToCart(menuItem, 1, specialInstructions);
    } else {
      updateQuantity(menuItem.id, quantity + 1);
    }
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      updateQuantity(menuItem.id, quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={menuItem.image}
          alt={menuItem.name}
          className="w-full h-48 object-cover"
        />
        {menuItem.isVegetarian && (
          <div className="absolute top-4 left-4 bg-green-500 rounded-full p-1">
            <Leaf className="h-4 w-4 text-white" />
          </div>
        )}
        {!menuItem.isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Not Available</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">{menuItem.name}</h3>
          <span className="text-lg font-bold text-orange-600">${menuItem.price}</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{menuItem.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Prep time: {menuItem.preparationTime} min</span>
            {menuItem.isVegetarian && (
              <span className="text-green-600 font-medium">Vegetarian</span>
            )}
          </div>
        </div>

        {menuItem.isAvailable && (
          <>
            {quantity === 0 ? (
              <button
                onClick={handleAddToCart}
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Add to Cart
              </button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleRemoveFromCart}
                    className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={handleAddToCart}
                    className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => setShowInstructions(!showInstructions)}
                  className="w-full text-orange-600 text-sm hover:text-orange-700 transition-colors"
                >
                  {showInstructions ? 'Hide' : 'Add'} special instructions
                </button>

                {showInstructions && (
                  <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Any special requests..."
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={2}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;