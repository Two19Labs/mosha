import React, { useState } from 'react';
import { CreditCard, Truck, User, Check, ArrowLeft, ShoppingBag, Banknote } from 'lucide-react';
import { openRazorpayCheckout } from '../lib/razorpay';

export default function Checkout({ cartItems, onClearCart, onOrderPlaced }) {
  const [step, setStep] = useState(1);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'cod'
  });

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal + shipping;

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const buildOrderDetails = (extra = {}) => ({
    orderId: `MOSHA-${Math.floor(100000 + Math.random() * 900000)}`,
    customer: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    },
    shippingAddress: {
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip
    },
    items: cartItems,
    subtotal,
    shipping,
    total,
    paymentMethod: formData.paymentMethod,
    ...extra
  });

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setPayError('');

    // Cash on delivery — no online payment.
    if (formData.paymentMethod === 'cod') {
      onOrderPlaced(buildOrderDetails({ paymentStatus: 'cod_pending' }));
      return;
    }

    // Pay Online via Razorpay Checkout modal.
    setPaying(true);
    try {
      await openRazorpayCheckout({
        amount: total,
        customer: formData,
        notes: { city: formData.city, items: cartItems.length },
        onSuccess: (response) => {
          setPaying(false);
          onOrderPlaced(buildOrderDetails({
            paymentStatus: 'paid',
            paymentId: response.razorpay_payment_id
          }));
        },
        onDismiss: (err) => {
          setPaying(false);
          if (err) setPayError(err.description || 'Payment failed. Please try again.');
        }
      });
    } catch (err) {
      setPaying(false);
      setPayError(err.message || 'Could not start payment.');
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Wizard Form */}
          <div className="lg:col-span-8 space-y-8 animate-fadeInUp">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between max-w-md mx-auto mb-8">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-sage-600' : 'text-sage-300'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold border-2 ${
                  step === 1 ? 'bg-sage-500 text-cream-100 border-sage-500' : step > 1 ? 'bg-sage-100 text-sage-600 border-sage-500' : 'border-sage-200'
                }`}>
                  {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-2">Details</span>
              </div>
              <div className="h-0.5 bg-sage-200 flex-1 mx-4 -translate-y-4" />
              
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-sage-600' : 'text-sage-300'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold border-2 ${
                  step === 2 ? 'bg-sage-500 text-cream-100 border-sage-500' : step > 2 ? 'bg-sage-100 text-sage-600 border-sage-500' : 'border-sage-200'
                }`}>
                  {step > 2 ? <Check className="h-5 w-5" /> : "2"}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-2">Shipping</span>
              </div>
              <div className="h-0.5 bg-sage-200 flex-1 mx-4 -translate-y-4" />
              
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-sage-600' : 'text-sage-300'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold border-2 ${
                  step === 3 ? 'bg-sage-500 text-cream-100 border-sage-500' : 'border-sage-200'
                }`}>
                  "3"
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-2">Payment</span>
              </div>
            </div>

            {/* Step Content */}
            <div className="glass-panel p-8 rounded-3xl border border-sage-200/50 bg-cream-50 shadow-xl">
              
              {step === 1 && (
                <form onSubmit={handleNextStep} className="space-y-6">
                  <h3 className="font-display font-bold text-xl text-sage-800 flex items-center border-b border-sage-100 pb-4">
                    <User className="h-5 w-5 mr-2 text-sage-500" />
                    Customer Contact Details
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                      placeholder="e.g. Jatin Arora"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="jatin@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-sage-500 text-cream-100 text-xs font-bold shadow-md hover:bg-sage-600 hover:scale-102 transition-all"
                    >
                      Continue to Shipping
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNextStep} className="space-y-6">
                  <h3 className="font-display font-bold text-xl text-sage-800 flex items-center border-b border-sage-100 pb-4">
                    <Truck className="h-5 w-5 mr-2 text-sage-500" />
                    Shipping and Delivery Address
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                      Street Address
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                      placeholder="e.g. F-71, Sector-21"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        City
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="Noida"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        State
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="Uttar Pradesh"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        ZIP / Postal Code
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({...formData, zip: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="201301"
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-3 rounded-full border border-sage-200 text-sage-800 hover:bg-sage-50 text-xs font-bold transition-all flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full bg-sage-500 text-cream-100 text-xs font-bold shadow-md hover:bg-sage-600 hover:scale-102 transition-all"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <h3 className="font-display font-bold text-xl text-sage-800 flex items-center border-b border-sage-100 pb-4">
                    <CreditCard className="h-5 w-5 mr-2 text-sage-500" />
                    Select Payment Method
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      ['cod', 'Cash On Delivery', 'Pay in cash when your order arrives', Banknote],
                      ['online', 'Pay Online', 'Cards, UPI, NetBanking & Wallets via Razorpay', CreditCard]
                    ].map(([method, label, sub, Icon]) => (
                      <label
                        key={method}
                        className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:border-sage-400 transition-colors ${
                          formData.paymentMethod === method
                            ? 'border-sage-500 bg-sage-50'
                            : 'border-sage-200 bg-cream-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={(e) => { setPayError(''); setFormData({...formData, paymentMethod: e.target.value}); }}
                          className="sr-only"
                        />
                        <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${formData.paymentMethod === method ? 'text-sage-600' : 'text-sage-400'}`} />
                        <span className="text-left">
                          <span className="block text-xs font-bold text-sage-800 font-sans">{label}</span>
                          <span className="block text-[11px] text-sage-500 font-sans mt-0.5">{sub}</span>
                        </span>
                      </label>
                    ))}
                  </div>

                  {formData.paymentMethod === 'online' && (
                    <div className="flex items-center gap-2 text-[11px] text-sage-500 font-sans border border-sage-200/50 p-3 rounded-xl bg-cream-100/30">
                      <CreditCard className="h-4 w-4 text-sage-400 shrink-0" />
                      You will be redirected to the secure Razorpay window to complete payment of Rs. {total}.
                    </div>
                  )}

                  {payError && (
                    <div className="text-[11px] text-coral-600 font-sans border border-coral-200 bg-coral-50 p-3 rounded-xl">
                      {payError}
                    </div>
                  )}

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={paying}
                      className="px-6 py-3 rounded-full border border-sage-200 text-sage-800 hover:bg-sage-50 text-xs font-bold transition-all flex items-center disabled:opacity-50"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={paying}
                      className="px-8 py-3 rounded-full bg-coral-500 text-cream-100 text-xs font-bold shadow-md hover:bg-coral-600 hover:scale-102 transition-all disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {paying
                        ? 'Processing…'
                        : formData.paymentMethod === 'online'
                          ? `Pay Rs. ${total}`
                          : `Place Order (Rs. ${total})`}
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

          {/* Cart Sidebar Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-sage-200/50 bg-cream-50 shadow-xl">
              <h3 className="font-display font-bold text-base text-sage-800 mb-4 border-b border-sage-100 pb-3 flex items-center">
                <ShoppingBag className="h-5 w-5 mr-2 text-sage-500" />
                Order Summary
              </h3>
              
              <div className="max-h-64 overflow-y-auto space-y-4 mb-6">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sage-800">{item.name}</span>
                      <span className="text-sage-400">x{item.quantity}</span>
                    </div>
                    <span className="font-accent font-semibold text-sage-700">
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-sage-100 pt-4 space-y-3 text-xs sm:text-sm text-sage-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-accent">Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping}`}</span>
                </div>
                <div className="flex justify-between border-t border-sage-100 pt-3 text-base font-bold text-sage-800">
                  <span>Grand Total</span>
                  <span className="font-accent">Rs. {total}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
