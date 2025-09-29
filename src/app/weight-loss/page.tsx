import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCard from '@/components/ConsultationCard';
import ResultsSection from '@/components/ResultsSection';
import QualificationSection from '@/components/QualificationSection';
import BMICalculator from '@/components/BMICalculator';
import MedicationsSection from '@/components/MedicationsSection';
import ProcessTimelineSection from '@/components/ProcessTimelineSection';
import BeforePurchaseDetailsSection from '@/components/BeforePurchaseDetailsSection';
import AfterPurchaseDetailsSection from '@/components/AfterPurchaseDetailsSection';
import OnceApprovedDetailsSection from '@/components/OnceApprovedDetailsSection';
import CallToActionSection from '@/components/CallToActionSection';
import InfoSection from '@/components/InfoSection';
import TinyNeedleSection from '@/components/TinyNeedleSection';
import SafetyGuaranteeSection from '@/components/SafetyGuaranteeSection';
import TrustpilotReviewsSection from '@/components/TrustpilotReviewsSection';
import MedicineInfoSection from '@/components/MedicineInfoSection';
import WeeklyInjectionSection from '@/components/WeeklyInjectionSection';
import InformationAboutOrderingSection from '@/components/InformationAboutOrderingSection';
import MedicineBrandsSection from '@/components/MedicineBrandsSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Weight Loss - Assured Pharmacy",
  description: "Start your weight loss consultation. Achieving a healthy weight can be a challenge but can bring with it great benefits to your health.",
};

export default function WeightLossPage() {
  const weightLossFeatures = [
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/weight_management/clock.webp"
            alt="Order Online"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ),
      title: "Order",
      subtitle: "Online"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/weight_management/lock.webp"
            alt="Reviewed by Experts"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ),
      title: "Reviewed",
      subtitle: "By Experts"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <Image
            src="/weight_management/cart.webp"
            alt="Direct Shipping"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      ),
      title: "Direct",
      subtitle: "Shipping"
    }
  ];

  const resultsFeatures = [
    {
      icon: "star" as const,
      title: "Proven Results",
      description: "Up to 25% weight loss in 12 months"
    },
    {
      icon: "shield" as const,
      title: "Safe & Supervised",
      description: "Medically approved programmes"
    },
    {
      icon: "heart" as const,
      title: "Holistic Support",
      description: "Diet, exercise, and coaching"
    },
    {
      icon: "user" as const,
      title: "Personalised Plans",
      description: "Tailored to your lifestyle"
    }
  ];

  const weightLossMedications = [
    {
      name: "Wegovy",
      image: "/weight_management/wegovy.png",
      buttonText: "View Prices →",
      buttonLink: "/medications/wegovy",
      rating: {
        text: "Excellent",
        platform: "Trustpilot",
        stars: 5
      },
      features: [
        "GLP-1 agonist suppresses appetite.",
        "85% of people lose weight.",
        "Approved for weight loss in UK"
      ],
      details: [
        { label: "Lose up to", value: "15% weight" },
        { label: "When to use", value: "Once a week" },
        { label: "Price from", value: "£60 per week" }
      ]
    },
    {
      name: "Mounjaro",
      image: "/weight_management/mounjaro.png",
      isRecommended: true,
      buttonText: "View Prices →",
      buttonLink: "/medications/mounjaro",
      rating: {
        text: "Excellent",
        platform: "Trustpilot",
        stars: 5
      },
      features: [
        "Double-action appetite suppressor.",
        "95% of people lose weight.",
        "Approved for weight loss in UK"
      ],
      details: [
        { label: "Lose up to", value: "25% weight" },
        { label: "When to use", value: "Once a week" },
        { label: "Price from", value: "£37.50 per week" }
      ]
    }
  ];

  const weightLossInjectablesInfo = [
    { question: "Is this really for weight loss?" },
    { question: "How often to take them?" },
    { question: "How effective are they?" },
    { question: "Are they painful?" },
    { question: "How soon will I see results?" }
  ];

  const medicineInfoData = {
    tabs: [
      { key: 'mounjaro', label: 'Mounjaro' },
      { key: 'wegovy', label: 'Wegovy' }
    ],
    tabContents: {
      mounjaro: {
        dosageTitle: "How Often To Take Mounjaro",
        dosageSteps: [
          {
            period: "Month 1",
            dose: "0.25 mg",
            description: "each week",
            badge: "Initial"
          },
          {
            period: "Month 2 To 5",
            dose: "5 - 12.5 mg",
            description: "each week",
            badge: "Build-up",
            isMultiple: true
          },
          {
            period: "Month 6",
            dose: "15 mg",
            description: "each week",
            badge: "Full"
          }
        ],
        faqTitle: "Mounjaro FAQs",
        faqs: [
          { question: "How fast will I see results?" },
          { question: "Why choose Mounjaro over Wegovy?" },
          { question: "How long should I take Mounjaro?" },
          { question: "Is Mounjaro right for me?" },
          { question: "What are the side effects?" }
        ]
      },
      wegovy: {
        dosageTitle: "Wegovy Dosage",
        dosageSteps: [
          { period: "Month 1", dose: "0.25mg" },
          { period: "Month 2", dose: "0.5mg" },
          { period: "Month 3", dose: "1mg" }
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
          {
            question: "How long does it take to see results?",
            answer: "Most patients see initial weight loss within 4-8 weeks of starting treatment."
          },
          {
            question: "What are common side effects?",
            answer: "Nausea, vomiting, and diarrhea are common initially but usually improve over time."
          },
          {
            question: "How is it administered?",
            answer: "Weekly subcutaneous injection using a pre-filled pen device."
          }
        ],
        note: "Dosage may be adjusted based on individual response and tolerability.",
        showComparison: true,
        comparisonTitle: "Mounjaro vs Wegovy Comparison",
        comparisonHeaders: ["Mounjaro", "Wegovy"],
        comparisonRows: [
          { feature: "Active Ingredient", values: ["Tirzepatide", "Semaglutide"] },
          { feature: "Average Weight Loss", values: ["Up to 25%", "Up to 15%"] },
          { feature: "Injection Frequency", values: ["Weekly", "Weekly"] },
          { feature: "Starting Price", values: ["£37.50/week", "£35.00/week"] }
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
            title="Start Your Weight Loss<br />Consultation"
            description="Achieving a healthy weight can be a challenge but can bring with it great benefits to your health. You can start the online consultation below to see if you are eligible for our weight loss plan."
            features={weightLossFeatures}
            buttonText="Start Weight Loss Consultation"
            buttonLink="/consultation/weight-loss"
            doctorImage="/weight_management/shirin-jazayeri-t.webp"
          />
          <ResultsSection
            title="Lose up to 25%<br />Weight with Assured<br />Pharmacy*"
            features={resultsFeatures}
            disclaimer="* Clinical trials showed up to 25% of bodyweight was lost with Mounjaro <span className='text-blue-600'>alongside healthy diet and exercise.</span>"
          />
          <QualificationSection />
          <BMICalculator />
          <MedicationsSection
            title="Leading Weight Loss<br />Medications"
            medications={weightLossMedications}
          />                  
          {/* How It Works - Individual Components */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ProcessTimelineSection />
            <BeforePurchaseDetailsSection />
          </div>                  
          <div className="grid md:grid-cols-2 gap-12">
            <AfterPurchaseDetailsSection />
            <OnceApprovedDetailsSection />
          </div>                  
          <InfoSection
            title="About Weight Loss Injectables"
            imageTitle="Weight Loss Injectables"
            imageDescription="Various medication packages and syringes"
            items={weightLossInjectablesInfo}
          />
          <TinyNeedleSection />
          <SafetyGuaranteeSection />
          <TrustpilotReviewsSection />
          <MedicineInfoSection
            title="Detailed Medicine Information"
            description="Achieving a healthy weight can be a challenge but can bring with it great benefits to your health. You can start the online consultation below to see if you are eligible for our weight loss plan."
            tabs={medicineInfoData.tabs}
            tabContents={medicineInfoData.tabContents}
          />
          <CallToActionSection variant="gray"/>     
          <WeeklyInjectionSection />
          <InformationAboutOrderingSection />
          <MedicineBrandsSection />
          <CallToActionSection variant="gray"/>
        </div>
      </div>
      <Footer />
    </main>
  );
} 