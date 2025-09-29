'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', { email, password, confirmPassword, agreeToTerms });
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black">Join Us Today!</h2>
        <p className="text-gray-600 mt-2">Create your account to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none transition-colors text-base"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-3 pr-10 border-0 border-b-2 border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none transition-colors text-base"
              placeholder="Create a password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-0 py-3 pr-10 border-0 border-b-2 border-gray-300 bg-transparent focus:border-gray-500 focus:outline-none transition-colors text-base"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start py-4">
          <input
            type="checkbox"
            id="agree-terms"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2 mt-1"
            required
          />
          <label htmlFor="agree-terms" className="ml-2 text-sm text-gray-700 leading-relaxed">
            I agree to the{' '}
            <Link href="/terms" className="text-teal-600 hover:text-teal-800 underline">
              Terms & Conditions
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-teal-600 hover:text-teal-800 underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 text-base"
        >
          Create Account
        </button>

        {/* Already have account */}
        <div className="mt-6">
          <Link 
            href="/login" 
            className="flex items-center justify-between w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-4 px-6 rounded-lg transition-colors duration-200 group"
          >
            <span>Already have an account? Sign In</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </form>
    </div>
  );
} 