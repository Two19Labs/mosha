import React from 'react';
import { CheckCircle, ShoppingBag, Truck, Calendar, ArrowRight } from 'lucide-react';

export default function Billing({ orderDetails, onContinueShopping }) {
  if (!orderDetails) return null;

  return (
    <div className="bg-cream-100 min-h-screen py-16 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeInUp">
        
        {/* Main Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sage-200/50 bg-cream-50 shadow-2xl space-y-8">
          
          {/* Success Banner */}
          <div className="text-center space-y-4">
            <div className="h-16 w-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="h-10 w-10 text-sage-600" />
            </div>
            <span className="text-[10px] font-bold text-sage-500 uppercase tracking-widest block font-sans">
              Transaction Successful
            </span>
            <h1 className="font-display font-bold text-3xl text-sage-900 leading-tight">
              Order Confirmed!
            </h1>
            <p className="text-sm text-sage-500 font-sans max-w-md mx-auto leading-relaxed">
              Thank you for choosing MOSHA Health. Your order has been logged and sent to our fulfillment pipeline.
            </p>
          </div>

          {/* Order Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-b border-sage-100 py-6 text-xs sm:text-sm text-sage-700">
            <div className="space-y-2">
              <p className="text-sage-400 font-semibold uppercase tracking-wider text-[10px]">Order Details</p>
              <p><span className="font-semibold">Order ID:</span> {orderDetails.orderId}</p>
              <p><span className="font-semibold">Payment Mode:</span> {orderDetails.paymentMethod === 'online' ? 'Online (Razorpay)' : 'Cash on Delivery'}</p>
              {orderDetails.paymentId && (
                <p className="break-all"><span className="font-semibold">Payment ID:</span> {orderDetails.paymentId}</p>
              )}
              <p><span className="font-semibold">Status:</span> {orderDetails.paymentStatus === 'paid' ? 'Paid' : 'Pending Verification'}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sage-400 font-semibold uppercase tracking-wider text-[10px]">Delivery To</p>
              <p className="font-semibold">{orderDetails.customer.name}</p>
              <p>{orderDetails.shippingAddress.address}</p>
              <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} - {orderDetails.shippingAddress.zip}</p>
            </div>
          </div>

          {/* Items Summary Table */}
          <div className="space-y-4">
            <p className="text-sage-400 font-semibold uppercase tracking-wider text-[10px] border-b border-sage-100 pb-2">
              Items Purchased
            </p>
            <div className="space-y-3">
              {orderDetails.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                  <div className="space-y-0.5">
                    <p className="font-semibold text-sage-800">{item.name}</p>
                    <p className="text-[10px] text-sage-400 capitalize">
                      Quantity: {item.quantity} {item.selectedPlan ? `(${item.selectedPlan})` : ''}
                    </p>
                  </div>
                  <span className="font-accent font-semibold text-sage-700">
                    Rs. {item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Totals Block */}
          <div className="border-t border-sage-100 pt-6 space-y-3 text-xs sm:text-sm text-sage-700 max-w-sm ml-auto">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-accent">Rs. {orderDetails.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span>{orderDetails.shipping === 0 ? "Free" : `Rs. ${orderDetails.shipping}`}</span>
            </div>
            <div className="flex justify-between border-t border-sage-100 pt-3 text-base font-bold text-sage-800">
              <span>Grand Total</span>
              <span className="font-accent">Rs. {orderDetails.total}</span>
            </div>
          </div>

          {/* Next Steps / Timeline */}
          <div className="bg-cream-100/50 border border-sage-200/50 p-6 rounded-2xl space-y-4">
            <h4 className="font-display font-bold text-xs text-sage-800 uppercase tracking-widest flex items-center">
              <Truck className="h-4 w-4 text-sage-500 mr-2" />
              Estimated Delivery Timeline
            </h4>
            <p className="font-sans text-xs text-sage-500 leading-relaxed">
              Standard shipping takes 3 to 5 business days. You will receive a tracking link via email once the packages leave our warehouse.
            </p>
          </div>

          {/* Back Action */}
          <div className="text-center pt-4">
            <button
              onClick={onContinueShopping}
              className="px-8 py-3.5 rounded-full bg-sage-500 text-cream-100 text-xs font-bold shadow-md hover:bg-sage-600 hover:scale-102 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
