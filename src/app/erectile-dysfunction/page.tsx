import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCard from '@/components/ConsultationCard';
import ResultsSection from '@/components/ResultsSection';
import CTABanner from '@/components/CTABanner';
import MedicationsSection from '@/components/MedicationsSection';
import InfoSection from '@/components/InfoSection';
import MedicineInfoSection from '@/components/MedicineInfoSection';
import SafetyGuaranteeSection from "@/components/SafetyGuaranteeSection";
import FreeTrackedDeliverySection from "@/components/FreeTrackedDeliverySection";
import TrustpilotReviewsSection from "@/components/TrustpilotReviewsSection";
import HomeHowItWorksSection from "@/components/HomeHowItWorksSection";
import DiscreetServiceSection from "@/components/DiscreetServiceSection";
import InformationAboutOrderingSection from "@/components/InformationAboutOrderingSection";
import MedicineBrandsSection from "@/components/MedicineBrandsSection";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Erectile Dysfunction - Assured Pharmacy",
  description: "Start your erectile dysfunction consultation. Most men encounter ED at some stage. UK-licensed treatments can help up to 90% of men effectively manage this condition.",
};

export default function ErectileDysfunctionPage() {
  const edFeatures = [
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/ed_treatment/clock.webp"
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
            src="/ed_treatment/lock.webp"
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
            src="/ed_treatment/cart.webp"
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
      Complete our online consultation to see if your are eligible and so we 
      can show you the available erectile dysfunction treatments and prices.
    </p>
  );

  const edResultsFeatures = [
    {
      icon: "star" as const,
      title: "Proven Results",
      description: "Up to 85% success rate for ED"
    },
    {
      icon: "shield" as const,
      title: "Safe & Supervised",
      description: "Medically approved programmes"
    },
    {
      icon: "medical" as const,
      title: "Comprehensive Support",
      description: "Medicine and lifestyle advice"
    },
    {
      icon: "user" as const,
      title: "Discreet Service",
      description: "Confidential consultations and delivery"
    }
  ];

  const edMedications = [
    {
      name: "Sildenafil",
      image: "/ed_treatment/sildenafil-t.png",
      badge: "Lowest Price",
      buttonText: "View Prices →",
      buttonLink: "/medications/sildenafil",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "Promotes Strong Erections",
        "Lowest Cost",
        "Effected by Food"
      ],
      details: [
        { label: "Duration", value: "Approx. 4 hours" },
        { label: "Works within", value: "30-60 minutes" },
        { label: "Price from", value: "£2.00 per tablet" }
      ]
    },
    {
      name: "Tadalafil",
      image: "/ed_treatment/tadalafil-t.png",
      badge: "Longest Acting",
      buttonText: "View Prices →",
      buttonLink: "/medications/tadalafil",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "Spontaneous Sex",
        "Longest Acting",
        "Not Effected by Food"
      ],
      details: [
        { label: "Duration", value: "Up to 36 hours" },
        { label: "Works within", value: "30-120 minutes" },
        { label: "Price from", value: "£2.25 per tablet" }
      ]
    }
  ];

  const edInfoItems = [
    { question: "What is erectile dysfunction" },
    { question: "Causes of ED" },
    { question: "Treatments available" },
    { question: "Can lifestyle changes improve ED?" }
  ];

  const otherEDTreatments = [
    {
      name: "Tadalafil (daily)",
      image: "/ed_treatment/tadalafil_daily-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/tadalafil-daily",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "Lowest Cost",
        "Fastest Acting",
        "Effected by Food"
      ],
      details: [
        { label: "Works within", value: "30 mins" },
        { label: "Taken Daily", value: "To always be active" },
        { label: "Price per pill", value: "From £1.25" }
      ]
    },
    {
      name: "Spedra",
      image: "/ed_treatment/spedra-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/spedra",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "Very Fast Acting",
        "Easy To Take (chewable)",
        "Moderately Expensive"
      ],
      details: [
        { label: "Works within", value: "15 - 30 mins" },
        { label: "Lasts up to", value: "4 hours" },
        { label: "Price per pill", value: "From £3.25" }
      ]
    },
    {
      name: "Viagra",
      image: "/ed_treatment/viagra-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/viagra",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "The Original Blue Pill",
        "Very Expensive",
        "Well Known Brand"
      ],
      details: [
        { label: "Works within", value: "30 - 60 mins" },
        { label: "Lasts up to", value: "4 hours" },
        { label: "Price per pill", value: "From £8.12" }
      ]
    },
    {
      name: "Viagra Connect",
      image: "/ed_treatment/viagra_connect-t.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/viagra-connect",
      rating: {
        text: "Excellent",
        platform: "TrustPilot",
        stars: 5
      },
      features: [
        "Higher cost",
        "Longest Acting",
        "Not Effected by Food"
      ],
      details: [
        { label: "Works within", value: "30 - 60 mins" },
        { label: "Lasts up to", value: "4 hours" },
        { label: "Price per pill", value: "From £10" }
      ]
    }
  ];

  const edMedicineInfoData = {
    tabs: [
      { key: 'sildenafil', label: 'Sildenafil' },
      { key: 'tadalafil', label: 'Tadalafil' }
    ],
    tabContents: {
      sildenafil: {
        dosageTitle: "How to Take Sildenafil",
        dosageSteps: [
          { period: "Sildenafil (Viagra)", dose: "" }
        ],
        showImage: true,
        imageAlt: "Taking sildenafil tablet",
        instructions: [
          "Take one tablet 30 minutes to 1 hour before sex",
          "Effective for 4-6 hours",
          "Taking with food may slow its effect"
        ],
        faqTitle: "Sildenafil FAQs",
        faqs: [
          { question: "How does sildenafil work?" },
          { question: "What can I expect to happen when I take sildenafil?" },
          { question: "How long does sildenafil last?" },
          { question: "Is sildenafil safe to use long term?" },
          { question: "Can I take sildenafil more than once a day?" }
        ]
      },
      tadalafil: {
        dosageTitle: "How to Take Tadalafil",
        dosageSteps: [
          { period: "Tadalafil (Cialis)", dose: "" }
        ],
        showImage: true,
        imageAlt: "Taking tadalafil tablet",
        instructions: [
          "Take one tablet 30 minutes to 2 hours before sex",
          "Effective for up to 36 hours",
          "Can be taken with or without food"
        ],
        faqTitle: "Tadalafil FAQs",
        faqs: [
          { question: "How does tadalafil work?" },
          { question: "What can I expect to happen when I take tadalafil?" },
          { question: "How long does tadalafil last?" },
          { question: "Is tadalafil safe to use long term?" },
          { question: "Can I take tadalafil more than once a day?" }
        ]
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content area */}
      <div className="py-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ConsultationCard
            title="Start Your Erectile<br />Dysfunction Consultation"
            description="Most men encounter ED at some stage. UK-licensed treatments can help up to 90% of men effectively manage this condition. Benefit from our low price guarantee, free tracked delivery, and discreet packaging."
            features={edFeatures}
            buttonText="Start ED Consultation"
            buttonLink="/consultation/erectile-dysfunction"
            additionalContent={additionalContent}
            doctorImage="/ed_treatment/shirin-jazayeri-t.webp"
          />
          <ResultsSection
            title="Stop Erectile Dysfunction<br />With Assured Pharmacy"
            features={edResultsFeatures}
            showImage={true}
            imageAlt="Couple enjoying intimate moment"
            showCTA={false}
          />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <MedicationsSection
            title="Leading ED Treatments"
            medications={edMedications}
          />
          <InfoSection
            title="About ED"
            imageTitle="ED Information"
            imageDescription="Doctor consultation and treatment options"
            imageBackgroundColor="bg-blue-100"
            items={edInfoItems}
          />
          <MedicationsSection
            title="Other ED Treatments"
            medications={otherEDTreatments}
          />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <MedicineInfoSection
            title="Medical Information"
            description="Sildenafil (generic Viagra) and Tadalafil (generic Cialis) are popular and effective treatments for erectile dysfunction (ED). Available as generics, they are affordable, low-cost options. These medications work by increasing blood flow to the penis, helping you achieve and maintain an erection"
            tabs={edMedicineInfoData.tabs}
            tabContents={edMedicineInfoData.tabContents}
          />
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <SafetyGuaranteeSection />
          <FreeTrackedDeliverySection/>
          <TrustpilotReviewsSection/>
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          <HomeHowItWorksSection/>
          <DiscreetServiceSection/> 
          <InformationAboutOrderingSection/> 
          <MedicineBrandsSection/> 
          <CTABanner
            message="Regain Confidence And Stop Erectile Dysfunction Today!"
            buttonText="Start Consultation"
            buttonLink="/consultation/erectile-dysfunction"
          />
          
        </div>
      </div>
      <Footer />
    </main>
  );
} 