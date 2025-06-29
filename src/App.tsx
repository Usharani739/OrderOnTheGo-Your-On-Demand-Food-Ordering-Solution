import React, { useState, useMemo } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';
import { mockRestaurants, mockMenuItems } from './data/mockData';
import { Restaurant } from './types';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = useMemo(() => {
    if (!searchQuery.trim()) return mockRestaurants;
    
    const query = searchQuery.toLowerCase();
    return mockRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.description.toLowerCase().includes(query) ||
      restaurant.cuisine.some(cuisine => cuisine.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const selectedRestaurantMenuItems = selectedRestaurant
    ? mockMenuItems.filter(item => item.restaurantId === selectedRestaurant.id)
    : [];

  const handleRestaurantClick = (restaurant: Restaurant) => {
    if (restaurant.isOpen) {
      setSelectedRestaurant(restaurant);
    }
  };

  const handleBackToRestaurants = () => {
    setSelectedRestaurant(null);
  };

  const handleCheckout = () => {
    // Handle successful checkout
    console.log('Order placed successfully');
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            onAuthClick={() => setIsAuthModalOpen(true)}
            onCartClick={() => setIsCartOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <main>
            {selectedRestaurant ? (
              <RestaurantMenu
                restaurant={selectedRestaurant}
                menuItems={selectedRestaurantMenuItems}
                onBack={handleBackToRestaurants}
              />
            ) : (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Delicious food,
                    <span className="text-orange-600"> delivered fast</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Order from your favorite restaurants and get fresh, hot meals delivered right to your door.
                  </p>
                </div>

                {/* Restaurants Grid */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {searchQuery ? `Search results for "${searchQuery}"` : 'Popular Restaurants'}
                  </h2>
                  
                  {filteredRestaurants.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No restaurants found matching your search.</p>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Clear search
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard
                          key={restaurant.id}
                          restaurant={restaurant}
                          onClick={() => handleRestaurantClick(restaurant)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Features Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Why choose FoodieExpress?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                      <p className="text-gray-600">Get your food delivered in 30 minutes or less</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🍽️</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Quality Food</h3>
                      <p className="text-gray-600">Fresh ingredients from the best restaurants</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💳</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Easy Payment</h3>
                      <p className="text-gray-600">Secure and convenient payment options</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />

          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;