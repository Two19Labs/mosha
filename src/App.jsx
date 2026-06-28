import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import GutReset from './pages/GutReset';
import ConcernPage from './pages/ConcernPage';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Billing from './pages/Billing';
import Blogs from './pages/Blogs';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [concernType, setConcernType] = useState('acidity');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Sync scroll position on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTab, concernType]);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id && i.type === item.type);
      if (existingItem) {
        return prevItems.map(i => 
          (i.id === item.id && i.type === item.type) 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, type, qty) => {
    if (qty <= 0) {
      handleRemoveItem(id, type);
      return;
    }
    setCartItems(prevItems => 
      prevItems.map(item => 
        (item.id === id && item.type === type) 
          ? { ...item, quantity: qty } 
          : item
      )
    );
  };

  const handleRemoveItem = (id, type) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.type === type))
    );
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setCurrentTab('checkout');
  };

  const handleOrderPlaced = (details) => {
    setOrderDetails(details);
    setCartItems([]);
    setCurrentTab('billing');
  };

  const handleContinueShopping = () => {
    setCurrentTab('shop');
    setOrderDetails(null);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home setCurrentTab={setCurrentTab} setConcernType={setConcernType} />;
      case 'reset':
        return <GutReset onAddToCart={handleAddToCart} />;
      case 'concern':
        return <ConcernPage concernType={concernType} onAddToCart={handleAddToCart} />;
      case 'shop':
        return <Shop onAddToCart={handleAddToCart} />;
      case 'blogs':
        return <Blogs />;
      case 'checkout':
        return (
          <Checkout 
            cartItems={cartItems} 
            onClearCart={() => setCartItems([])} 
            onOrderPlaced={handleOrderPlaced} 
          />
        );
      case 'billing':
        return (
          <Billing 
            orderDetails={orderDetails} 
            onContinueShopping={handleContinueShopping} 
          />
        );
      default:
        return <Home setCurrentTab={setCurrentTab} setConcernType={setConcernType} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 selection:bg-sage-200 selection:text-sage-900">
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        setConcernType={setConcernType} 
        cartCount={cartCount} 
        setIsCartOpen={setIsCartOpen} 
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setCurrentTab={setCurrentTab} setConcernType={setConcernType} />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemoveItem={handleRemoveItem} 
        onProceedToCheckout={handleProceedToCheckout} 
      />
    </div>
  );
}
