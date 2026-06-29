import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Heart } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, setConcernType, cartCount, setIsCartOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConcernDropdownOpen, setIsConcernDropdownOpen] = useState(false);

  const navigateToConcern = (concern) => {
    setConcernType(concern);
    setCurrentTab('concern');
    setIsConcernDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToTab = (tab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
    setIsConcernDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-cream-50 border-b border-sage-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            onClick={() => navigateToTab('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-sage-500 flex items-center justify-center text-cream-100 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-cream-100" />
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-wide text-sage-800">
              MOSHA<span className="text-sage-500 font-light">HEALTH</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToTab('home')}
              className={`font-sans font-medium text-sm tracking-wide transition-colors duration-300 ${
                currentTab === 'home' ? 'text-sage-600 font-semibold border-b-2 border-sage-500 pb-1' : 'text-sage-800 hover:text-sage-500'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateToTab('reset')}
              className={`font-sans font-medium text-sm tracking-wide transition-colors duration-300 ${
                currentTab === 'reset' ? 'text-sage-600 font-semibold border-b-2 border-sage-500 pb-1' : 'text-sage-800 hover:text-sage-500'
              }`}
            >
              14 Day Gut Reset
            </button>

            {/* Concern Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setIsConcernDropdownOpen(true)}
                onClick={() => setIsConcernDropdownOpen(!isConcernDropdownOpen)}
                className={`flex items-center font-sans font-medium text-sm tracking-wide transition-colors duration-300 ${
                  currentTab === 'concern' ? 'text-sage-600 font-semibold' : 'text-sage-800 hover:text-sage-500'
                }`}
              >
                Shop By Concern
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isConcernDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsConcernDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-56 rounded-xl bg-cream-50 border border-sage-100 shadow-xl py-2 z-50 animate-fadeInUp"
                >
                  <button 
                    onClick={() => navigateToConcern('acidity')}
                    className="w-full text-left px-4 py-3 text-sm text-sage-800 hover:bg-sage-100 hover:text-sage-700 transition-colors"
                  >
                    Acidity & GERD
                  </button>
                  <button 
                    onClick={() => navigateToConcern('gastritis')}
                    className="w-full text-left px-4 py-3 text-sm text-sage-800 hover:bg-sage-100 hover:text-sage-700 transition-colors"
                  >
                    H. Pylori & Gastritis
                  </button>
                  <button 
                    onClick={() => navigateToConcern('bloating')}
                    className="w-full text-left px-4 py-3 text-sm text-sage-800 hover:bg-sage-100 hover:text-sage-700 transition-colors"
                  >
                    Bloating Relief
                  </button>
                  <button 
                    onClick={() => navigateToConcern('constipation')}
                    className="w-full text-left px-4 py-3 text-sm text-sage-800 hover:bg-sage-100 hover:text-sage-700 transition-colors"
                  >
                    Constipation & Gut Health
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigateToTab('shop')}
              className={`font-sans font-medium text-sm tracking-wide transition-colors duration-300 ${
                currentTab === 'shop' ? 'text-sage-600 font-semibold border-b-2 border-sage-500 pb-1' : 'text-sage-800 hover:text-sage-500'
              }`}
            >
              Shop Products
            </button>

            <button 
              onClick={() => navigateToTab('blogs')}
              className={`font-sans font-medium text-sm tracking-wide transition-colors duration-300 ${
                currentTab === 'blogs' ? 'text-sage-600 font-semibold border-b-2 border-sage-500 pb-1' : 'text-sage-800 hover:text-sage-500'
              }`}
            >
              Blogs
            </button>
          </nav>

          {/* Cart Icon & Mobile menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-sage-800 hover:text-sage-500 hover:scale-105 transition-all duration-300"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-coral-500 text-xs font-bold text-cream-100 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-sage-800 hover:text-sage-500"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-sage-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <button 
            onClick={() => navigateToTab('home')}
            className="block w-full text-left font-sans font-medium text-base text-sage-800 hover:text-sage-500 py-2 border-b border-sage-50"
          >
            Home
          </button>
          <button 
            onClick={() => navigateToTab('reset')}
            className="block w-full text-left font-sans font-medium text-base text-sage-800 hover:text-sage-500 py-2 border-b border-sage-50"
          >
            14 Day Gut Reset
          </button>
          
          <div className="py-2 border-b border-sage-50">
            <span className="block font-sans font-semibold text-sm text-sage-500 mb-2">Shop By Concern</span>
            <div className="pl-4 space-y-3">
              <button 
                onClick={() => navigateToConcern('acidity')}
                className="block w-full text-left text-sm text-sage-800 hover:text-sage-500"
              >
                Acidity & GERD
              </button>
              <button 
                onClick={() => navigateToConcern('gastritis')}
                className="block w-full text-left text-sm text-sage-800 hover:text-sage-500"
              >
                H. Pylori & Gastritis
              </button>
              <button 
                onClick={() => navigateToConcern('bloating')}
                className="block w-full text-left text-sm text-sage-800 hover:text-sage-500"
              >
                Bloating Relief
              </button>
              <button 
                onClick={() => navigateToConcern('constipation')}
                className="block w-full text-left text-sm text-sage-800 hover:text-sage-500"
              >
                Constipation & Gut Health
              </button>
            </div>
          </div>

          <button 
            onClick={() => navigateToTab('shop')}
            className="block w-full text-left font-sans font-medium text-base text-sage-800 hover:text-sage-500 py-2 border-b border-sage-50"
          >
            Shop Products
          </button>
          
          <button 
            onClick={() => navigateToTab('blogs')}
            className="block w-full text-left font-sans font-medium text-base text-sage-800 hover:text-sage-500 py-2"
          >
            Blogs
          </button>
        </div>
      )}
    </header>
  );
}
