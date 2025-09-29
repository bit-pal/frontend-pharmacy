import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import AnimatedTrustBanner from '@/components/AnimatedTrustBanner';

export const metadata: Metadata = {
  title: "Register - Assured Pharmacy",
  description: "Create your Assured Pharmacy account to access treatments and manage your health journey with us.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Animated Trust indicators banner */}
      <AnimatedTrustBanner />

      {/* Main content area */}
      <div className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Branding and Illustration */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
                  Start Your Health<br />
                  Journey Today
                </h1>
                <p className="text-lg text-gray-700">
                  Join thousands of satisfied customers
                </p>
              </div>
              
              {/* Image skeleton placeholder */}
              <div className="flex justify-start">
                <div className="w-96 h-80 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Register Form */}
            <div className="flex justify-center lg:justify-end">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 