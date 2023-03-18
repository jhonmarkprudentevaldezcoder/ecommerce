import React from 'react';

export default function CheckoutWizarda(activetStep = 0) {
  return (
    <div className="mb-5 flex  flex-wrap">
      {['User Login', 'Shipping Address', 'Payment Methd', 'Place order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-center ${
              index <= activetStep
                ? 'border-indigo-500 text-indigo-500'
                : 'border-gray-400 text-gray-400'
            }`}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
