'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('Akio');
  const [lastName, setLastName] = useState('Ito');
  const [postcode, setPostcode] = useState('');
  const [streetAddress, setStreetAddress] = useState('3-12-1 Shinjuku, Shinjuku-ku Tokyo');
  const [townCity, setTownCity] = useState('Tokyo');
  const [county, setCounty] = useState('東京都');
  const [postcodeSecond, setPostcodeSecond] = useState('160-0022');
  const [telephone, setTelephone] = useState('08077904123');
  const [differentShipping, setDifferentShipping] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState('royal-mail');
  
  // Payment modal state
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePayment = () => {
    // Handle payment processing
    console.log('Processing payment...');
    alert('Payment processed successfully!');
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Step 1 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Medical Questions</span>
            </div>

            {/* Line 1 - Completed */}
            <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>

            {/* Step 2 - Completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Treatment & Prices</span>
            </div>

            {/* Line 2 - Completed */}
            <div className="flex-1 h-1 bg-green-500 mx-2 mb-6"></div>

            {/* Step 3 - Current */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-sm font-medium text-gray-800">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Scrollable Forms */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Patient Details */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                  <h2 className="text-lg font-bold text-gray-800">Patient details</h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Patient First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Patient Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postcode
                    </label>
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-9 text-green-600 text-sm font-medium hover:underline">
                      Find Address
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Town / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={townCity}
                      onChange={(e) => setTownCity(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        County
                      </label>
                      <input
                        type="text"
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={postcodeSecond}
                        onChange={(e) => setPostcodeSecond(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                  <h2 className="text-lg font-bold text-gray-800">Shipping details</h2>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={differentShipping}
                      onChange={(e) => setDifferentShipping(e.target.checked)}
                      className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">I have a different shipping address</span>
                  </label>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                    All delivery options apart from click and collect may be posted without a signature. You confirm that no animals or children may be harmed by posting through your letterbox.
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-4 border-2 border-green-500 bg-green-50 rounded-lg cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        value="royal-mail"
                        checked={selectedShipping === 'royal-mail'}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="w-5 h-5 text-green-500"
                      />
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-gray-800">£5.95</span>
                          <span className="text-gray-700">Royal Mail / DPD</span>
                        </div>
                        <span className="text-gray-700 font-medium">Next Day Delivery</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-green-50 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
                  <h2 className="text-lg font-bold text-gray-800">Payment Methods</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Processed Securely by <span className="text-blue-600 font-medium">Ryft</span>
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                    A secure Payment window will open for you to input credit card details.
                  </div>

                  <button 
                    onClick={handleOpenPaymentModal}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Continue to Payment</span>
                    <span className="text-xl">→</span>
                  </button>

                  {/* Security Badges */}
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 border border-green-300 rounded">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔒</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">VERIFIED & SECURED</span>
                    </div>
                    <div className="px-3 py-2 border border-gray-300 rounded">
                      <span className="text-xs font-semibold text-blue-600">Trustwave</span>
                      <p className="text-xs text-gray-600">Trusted Commerce</p>
                    </div>
                    <div className="px-3 py-2 border border-gray-300 rounded">
                      <span className="text-xs font-semibold text-green-600">Registered</span>
                      <p className="text-xs text-gray-600">Pharmacy</p>
                    </div>
                    <div className="px-3 py-2 border border-gray-300 rounded">
                      <span className="text-xs font-semibold text-red-600">Royal Mail</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Order Summary (Sticky) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src="/weight_management/mounjaro-pen.png"
                    alt="Mounjaro Pen"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Mounjaro weight loss treatment plan
                    </h3>
                    <p className="text-lg font-bold text-gray-800">£169.95</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4 pb-4 border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Strength:</span>
                    <span className="font-medium text-gray-800">2.5mg (Tirzepatide)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium text-gray-800">1 KwikPen Pre-filled pen</span>
                  </div>
                </div>

                <button className="w-full text-gray-600 text-sm py-2 border border-gray-300 rounded-md hover:bg-gray-50 mb-4">
                  Apply Discount Code ▼
                </button>

                <div className="space-y-2 mb-4 pb-4 border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Cart Subtotal</span>
                    <span className="font-medium text-gray-800">£169.95</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Shipping</span>
                      <span className="font-medium text-gray-800">£5.95</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Next Day Delivery - Royal Mail / DPD</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-800">Order Total</span>
                  <span className="text-2xl font-bold text-gray-800">£175.90</span>
                </div>

                <button 
                  onClick={handleOpenPaymentModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-4"
                >
                  <span>Continue to Payment</span>
                  <span className="text-xl">→</span>
                </button>

                <p className="text-xs text-gray-600 text-center mb-4">
                  A secure Payment window will open for you to input credit card details.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 leading-relaxed">
                  The payment processed today encompasses the initial month of your treatment plan at a discounted rate. Subsequent payments will be billed automatically at the rate of your next required dosage.{' '}
                  <a href="#" className="text-blue-600 hover:underline">Read more...</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">Copyright Assured Pharmacy 2025</p>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8 relative min-h-[400px]">
            {/* Close Button */}
            <button
              onClick={handleClosePaymentModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment</h2>

            {/* Card Input Field */}
            <div className="mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white">
                {/* Card Icon */}
                <div className="mr-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>

                {/* Card Number Input */}
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-300 text-sm"
                  maxLength={19}
                />

                {/* MM/YY Input */}
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-16 outline-none text-gray-900 placeholder-gray-300 text-right text-sm mr-3"
                  maxLength={5}
                />

                {/* CVC Input */}
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-12 outline-none text-gray-900 placeholder-gray-300 text-right text-sm"
                  maxLength={4}
                />
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center text-base"
            >
              Pay £175.90 →→
            </button>

            {/* Chat/Support Button */}
            <button className="absolute bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
