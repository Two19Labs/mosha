import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout 
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay backdrop */}
        <div 
          onClick={onClose}
          className="absolute inset-0 bg-sage-900/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
        />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md transform bg-cream-50 shadow-2xl transition duration-500 ease-in-out">
            <div className="flex h-full flex-col overflow-y-scroll bg-cream-50 shadow-xl border-l border-sage-100">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-sage-100 bg-cream-100">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5 text-sage-600" />
                  <h2 className="font-display font-bold text-lg text-sage-800" id="slide-over-title">
                    Your Shopping Cart
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-sage-700 hover:bg-sage-100 hover:text-sage-900 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="h-16 w-16 rounded-full bg-sage-50 flex items-center justify-center text-sage-400 mb-4">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <p className="font-sans text-sage-700 font-medium">Your cart is empty</p>
                    <p className="font-sans text-xs text-sage-400 mt-1 max-w-xs">
                      Browse our concerns and products to add them to your cart.
                    </p>
                    <button 
                      onClick={onClose}
                      className="mt-6 px-6 py-2.5 rounded-full bg-sage-500 text-cream-100 text-sm font-semibold hover:bg-sage-600 hover:scale-105 transition-all duration-300"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6 divide-y divide-sage-100">
                    {cartItems.map((item, idx) => (
                      <div key={`${item.id}-${item.type || 'product'}-${idx}`} className={`flex py-4 ${idx === 0 ? 'pt-0' : ''}`}>
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-sage-100 bg-cream-100 flex items-center justify-center p-1">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-contain rounded-lg"
                            />
                          ) : (
                            <div className="h-full w-full bg-sage-100 flex items-center justify-center text-sage-400 rounded-lg">
                              <ShoppingBag className="h-6 w-6" />
                            </div>
                          )}
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-semibold text-sage-800">
                              <h3 className="font-sans text-sm line-clamp-1">{item.name}</h3>
                              <p className="ml-4 text-sm font-accent">Rs. {item.price * item.quantity}</p>
                            </div>
                            <p className="mt-1 text-xs text-sage-500 capitalize">
                              Type: {item.type || 'product'} {item.selectedPlan ? `- ${item.selectedPlan} Plan` : ''}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-sage-200 rounded-full bg-cream-50 px-1 py-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.type, item.quantity - 1)}
                                className="p-1 rounded-full text-sage-700 hover:bg-sage-100 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="mx-2 text-xs font-semibold text-sage-800 min-w-[12px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.type, item.quantity + 1)}
                                className="p-1 rounded-full text-sage-700 hover:bg-sage-100 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.id, item.type)}
                              className="flex items-center text-xs font-medium text-coral-500 hover:text-coral-600 transition-colors p-1.5 rounded-lg hover:bg-coral-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cartItems.length > 0 && (
                <div className="border-t border-sage-100 bg-cream-100 px-6 py-6 space-y-4">
                  <div className="flex justify-between text-base font-bold text-sage-800">
                    <p className="font-sans">Subtotal</p>
                    <p className="font-accent">Rs. {subtotal}</p>
                  </div>
                  <p className="text-xs text-sage-400">
                    Shipping and taxes are calculated at checkout.
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={onProceedToCheckout}
                      className="flex w-full items-center justify-center rounded-full bg-sage-500 px-6 py-3.5 text-sm font-bold text-cream-100 shadow-md hover:bg-sage-600 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex justify-center text-center text-xs text-sage-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={onClose}
                        className="font-semibold text-sage-600 hover:underline"
                      >
                        Continue Shopping
                      </button>
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
