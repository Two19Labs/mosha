import React, { useState } from 'react';
import { Star, ShoppingCart, Info, Filter, ArrowRight } from 'lucide-react';
import { products } from '../data/productsData';

export default function Shop({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedConcern, setSelectedConcern] = useState('all');
  const [activeDetailsId, setActiveDetailsId] = useState(null);

  // Filters logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesConcern = selectedConcern === 'all' || product.concern === selectedConcern || product.concern === 'general';
    return matchesCategory && matchesConcern;
  });

  return (
    <div className="bg-cream-100 min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fadeInUp">
          <span className="text-xs font-bold text-sage-500 tracking-widest uppercase bg-sage-100/60 border border-sage-200/50 px-4 py-1.5 rounded-full">
            MOSHA Apothecary
          </span>
          <h1 className="font-display font-bold text-4xl text-sage-900 leading-tight mt-2">
            Shop Gut Healing Formulations
          </h1>
          <p className="text-base text-sage-700 leading-relaxed">
            Our wellness products are crafted with whole food botanical ingredients to stimulate motility, calm acidity, relieve bloating, and repair the stomach lining.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel p-6 rounded-3xl border border-sage-200/50 bg-cream-50 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fadeInUp">
          
          {/* Category Filter */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-sage-500 uppercase tracking-widest block font-sans">
              Filter By Type
            </span>
            <div className="flex flex-wrap gap-2">
              {['all', 'blend', 'shot', 'drink', 'kit'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-sage-500 text-cream-100 shadow-sm'
                      : 'bg-cream-100 text-sage-700 border border-sage-100 hover:bg-sage-50'
                  }`}
                >
                  {cat === 'all' ? 'All Types' : `${cat}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Concern Filter */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-sage-500 uppercase tracking-widest block font-sans">
              Filter By Concern
            </span>
            <div className="flex flex-wrap gap-2">
              {['all', 'acidity', 'gastritis', 'bloating', 'constipation'].map(con => (
                <button
                  key={con}
                  onClick={() => setSelectedConcern(con)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    selectedConcern === con
                      ? 'bg-sage-500 text-cream-100 shadow-sm'
                      : 'bg-cream-100 text-sage-700 border border-sage-100 hover:bg-sage-50'
                  }`}
                >
                  {con === 'all' ? 'All Concerns' : con}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="glass-panel rounded-3xl border border-sage-200/50 bg-cream-50 flex flex-col justify-between overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              
              {/* Product Image and tags */}
              <div className="relative bg-cream-200/40 p-8 h-64 flex items-center justify-center border-b border-sage-100 shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  <span className="bg-sage-500 text-cream-50 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="bg-coral-100 text-coral-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {product.concern}
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Rating & Review */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-sage-600">
                      <Star className="h-4 w-4 text-coral-500 fill-coral-500 mr-1" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-sage-400 ml-1">({product.reviews} reviews)</span>
                    </div>
                    <span className="text-[10px] font-bold text-sage-500 uppercase tracking-widest font-sans">
                      100% Organic
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-sage-900 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-sage-500 font-sans italic">
                    {product.tagline}
                  </p>
                  <p className="font-sans text-xs text-sage-700 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-sage-100/60 mt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-accent font-bold text-sage-900">
                      Rs. {product.price}
                    </span>
                    <button 
                      onClick={() => setActiveDetailsId(activeDetailsId === product.id ? null : product.id)}
                      className="text-xs font-semibold text-sage-500 hover:text-sage-800 flex items-center space-x-1"
                    >
                      <Info className="h-4 w-4" />
                      <span>{activeDetailsId === product.id ? "Hide Info" : "View Details"}</span>
                    </button>
                  </div>

                  {/* Expandable Details Block */}
                  {activeDetailsId === product.id && (
                    <div className="bg-cream-100/60 border border-sage-200/50 rounded-2xl p-4 text-xs font-sans text-sage-700 space-y-3 animate-fadeInUp">
                      <div>
                        <h4 className="font-semibold text-sage-800 mb-1">Key Benefits:</h4>
                        <ul className="list-disc pl-4 space-y-1">
                          {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sage-800 mb-1">Ingredients:</h4>
                        <ul className="list-disc pl-4 space-y-1 text-sage-500">
                          {product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sage-800 mb-1">Usage Instruction:</h4>
                        <p className="text-sage-600 italic">{product.usage}</p>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => onAddToCart({...product, type: "product"})}
                    className="w-full py-3 rounded-full bg-sage-500 hover:bg-sage-600 text-cream-100 text-xs font-bold transition-all duration-300 flex items-center justify-center shadow-sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Shopping Cart
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
