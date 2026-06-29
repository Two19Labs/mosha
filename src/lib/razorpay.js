const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

let scriptPromise = null;

// Loads the Razorpay Checkout script once and caches the promise.
export function loadRazorpay() {
  if (window.Razorpay) return Promise.resolve(true);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT;
    script.onload = () => resolve(true);
    script.onerror = () => {
      scriptPromise = null;
      resolve(false);
    };
    document.body.appendChild(script);
  });
  return scriptPromise;
}

// Opens the Razorpay Checkout modal.
// NOTE: Frontend-only test integration. No order_id / signature verification
// (those require a backend with the key_secret). Do not use as-is in production.
export async function openRazorpayCheckout({ amount, customer, notes, onSuccess, onDismiss }) {
  const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!keyId) {
    throw new Error('Missing VITE_RAZORPAY_KEY_ID in environment');
  }

  const loaded = await loadRazorpay();
  if (!loaded) {
    throw new Error('Failed to load Razorpay Checkout. Check your connection.');
  }

  const rzp = new window.Razorpay({
    key: keyId,
    amount: Math.round(amount * 100), // paise
    currency: 'INR',
    name: 'MOSHA Health',
    description: 'Gut health order',
    prefill: {
      name: customer?.name || '',
      email: customer?.email || '',
      contact: customer?.phone || '',
    },
    notes: notes || {},
    theme: { color: '#6b8e6b' },
    handler: (response) => {
      onSuccess?.(response);
    },
    modal: {
      ondismiss: () => onDismiss?.(),
    },
  });

  rzp.on('payment.failed', (response) => {
    onDismiss?.(response?.error);
  });

  rzp.open();
}
