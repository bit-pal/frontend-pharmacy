import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCard from '@/components/ConsultationCard';
import Image from 'next/image';
import CTABanner from "@/components/CTABanner";
import MedicationsSection from '@/components/MedicationsSection';
import InfoSection from '@/components/InfoSection';
import SafetyGuaranteeSection from "@/components/SafetyGuaranteeSection";
import FreeTrackedDeliverySection from "@/components/FreeTrackedDeliverySection";
import TrustpilotReviewsSection from "@/components/TrustpilotReviewsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DiscreetServiceSection from "@/components/DiscreetServiceSection";
import InformationAboutOrderingSection from "@/components/InformationAboutOrderingSection";
import MedicineBrandsSection from "@/components/MedicineBrandsSection";
import HomeHowItWorksSection from "@/components/HomeHowItWorksSection";

export const metadata: Metadata = {
  title: "Premature Ejaculation Treatment - Assured Pharmacy",
  description: "Start your premature ejaculation consultation. Effective treatments available to help you last longer and improve your confidence. Discreet service with UK-licensed medications.",
};

export default function PrematureEjaculationPage() {
  const peFeatures = [
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/pe_treatment/clock.webp"
            alt="Takes Only A Few Minutes"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      title: "Takes Only",
      subtitle: "A Few Minutes"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/pe_treatment/lock.webp"
            alt="Secure And Discreet Service"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      title: "Secure And",
      subtitle: "Discreet Service"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/pe_treatment/cart.webp"
            alt="Fast Delivery"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      title: "Fast",
      subtitle: "Delivery"
    }
  ];

  const additionalContent = (
    <p>
      Complete our online consultation to see if you are eligible and so we 
      can show you the available premature ejaculation treatments and prices.
    </p>
  );

  const peMedications = [
    {
      name: "Priligy (Dapoxetine)",
      image: "/pe_treatment/priligy001.png",
      badge: "Most Effective",
      buttonText: "View Product →",
      buttonLink: "/medications/priligy",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "Increases Control",
        "Fast Acting", 
        "Clinically Proven"
      ],
      details: [
        { label: "Works within", value: "1-3 hours" },
        { label: "Last up to", value: "6 hours" },
        { label: "Price per pill", value: "From £7" }
      ],
      description: "Priligy is a tablet used to treat premature ejaculation, this is when a man ejaculates too soon during sex. Treatment can help to delay this and are taken when required, before having sex."
     }
   ];

  const peInfoItems = [
    { question: "What is premature ejaculation?" },
    { question: "What causes it?" },
    { question: "Can treatment work?" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content area */}
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ConsultationCard
            title="Start Your Premature<br />Ejaculation Consultation"
            description="Premature ejaculation is when a man ejaculates sooner than would be desired during sexual activity. Although this can happen on occasion to all men, if its happening frequently and causing you difficulties then treatment may help."
            features={peFeatures}
            buttonText="Start PE Consultation"
            buttonLink="/consultation/premature-ejaculation"
            additionalContent={additionalContent}
            doctorImage="/pe_treatment/shirin-jazayeri-t.webp"
            doctorName="Shirin Jazayeri"
            doctorTitle="Clinical Lead"
            doctorRegistration="GPhC Registration 2067461"
          />
            <CTABanner
             message="Regain Confidence And Stop Premature Ejaculation Today!"
             buttonText="Start Consultation"
             buttonLink="/consultation/premature-ejaculation"
           />
          <MedicationsSection
            title="Leading PE Treatments"
            medications={peMedications}
          />
          <InfoSection
            title="About Premature Ejaculation"
            imageTitle="PE Information"
            imageDescription="Doctor consultation and treatment options"
            imageBackgroundColor="bg-blue-100"
            items={peInfoItems}
          />
          <SafetyGuaranteeSection />
          <FreeTrackedDeliverySection />
          <TrustpilotReviewsSection />
          <CTABanner
             message="Regain Confidence And Stop Premature Ejaculation Today!"
             buttonText="Start Consultation"
             buttonLink="/consultation/premature-ejaculation"
           />
           <HomeHowItWorksSection/>
           <DiscreetServiceSection/> 
           <InformationAboutOrderingSection/>
           <MedicineBrandsSection/>
           <CTABanner
             message="Regain Confidence And Stop Premature Ejaculation Today!"
             buttonText="Start Consultation"
             buttonLink="/consultation/premature-ejaculation"
           />
        </div>
      </div>
      <Footer />
    </main>
  );
} 