import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import HomeHowItWorksSection from '@/components/HomeHowItWorksSection';
import DiscreetServiceSection from '@/components/DiscreetServiceSection';
import ReviewsSection from '@/components/ReviewsSection';
import MedicineBrandsSection from '@/components/MedicineBrandsSection';
import InformationAboutOrderingSection from '@/components/InformationAboutOrderingSection';
import FreeTrackedDeliverySection from '@/components/FreeTrackedDeliverySection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import StartConsultationButton from '@/components/StartConsultationButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TreatmentsSection />
      <HomeHowItWorksSection />
      <DiscreetServiceSection />
      <ReviewsSection />
      <MedicineBrandsSection />
      <InformationAboutOrderingSection />
      <FreeTrackedDeliverySection />
      <Footer />
      
      {/* Mobile Start Consultation Button - Always visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white rounded-t-2xl px-4 pt-4 pb-4 shadow-lg">
          <StartConsultationButton className="w-full text-center py-3 text-base font-semibold">
            Start Consultation ≫
          </StartConsultationButton>
        </div>
      </div>
      
      <ChatWidget />
    </main>
  );
}
