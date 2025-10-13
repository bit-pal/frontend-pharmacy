'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  selectedOption?: string;
  isCustomForm?: boolean;
  hasConditionalInput?: boolean;
  medicalConditionsList?: string[];
  subtext?: string;
  isConfirmation?: boolean;
  isTermsPage?: boolean;
}

export default function WeightLossConsultationPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [unitSystem, setUnitSystem] = useState<'Imperial' | 'Metric'>('Metric');
  
  // Metric system values
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  
  // Imperial system values
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weightStone, setWeightStone] = useState('');
  const [weightPounds, setWeightPounds] = useState('');
  
  // Pregnancy specification text
  const [pregnancyDetails, setPregnancyDetails] = useState('');
  
  // Ethnicity specification text
  const [ethnicityDetails, setEthnicityDetails] = useState('');
  
  // Contraception details (not needed for input, just for the informational display)
  const [contraceptionDetails, setContraceptionDetails] = useState('');
  
  // Medical conditions details
  const [medicalConditionsDetails, setMedicalConditionsDetails] = useState('');
  
  // Weight-related conditions details
  const [weightConditionsDetails, setWeightConditionsDetails] = useState('');
  
  // Weight loss treatment history details
  const [treatmentHistoryDetails, setTreatmentHistoryDetails] = useState('');
  
  // Allergy details
  const [allergyDetails, setAllergyDetails] = useState('');
  
  // Medication details
  const [medicationDetails, setMedicationDetails] = useState('');
  
  // Terms and conditions checkboxes
  const [consentToInfo, setConsentToInfo] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const benefits = [
    { icon: '✓', text: 'Free Tracked Delivery' },
    { icon: '£', text: 'Lowest Price Guarantee' },
    { icon: '🇬🇧', text: 'We are based in the UK' }
  ];

  // Auto-rotate benefits on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % 3);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const questions: Question[] = [
    {
      id: 1,
      question: "How old are you?",
      options: ["Under 18", "18 to 74", "75 to 85", "over 85"]
    },
    {
      id: 2,
      question: "Are you male or female?",
      options: ["Male", "Female"]
    },
    {
      id: 2.1,
      question: "Are you pregnant or breastfeeding? Any chance you could be pregnant?",
      options: ["Yes", "No"],
      hasConditionalInput: true
    },
    {
      id: 2.2,
      question: "Do you understand that women of childbearing age should use contraception whilst on the weight management program? Suitable contraception advice will be provided with any orders and you agree to check this.",
      options: ["Yes", "No"],
      hasConditionalInput: true
    },
    {
      id: 3,
      question: "Let's start with your info.",
      options: [], // This will be a custom form with height/weight inputs
      isCustomForm: true
    },
    {
      id: 4,
      question: "Your ethnic background",
      options: [
        "Asian or Asian British", 
        "Black or Black British", 
        "Mixed or multiple ethnic groups", 
        "White", 
        "Other ethnic group", 
        "Not listed"
      ],
      hasConditionalInput: true
    },
    {
      id: 5,
      question: "How much time do you spend exercising per week?",
      options: ["None", "Less than 1 hour", "Between 1 and 5 hours", "More than 5 hours"],
      hasConditionalInput: true
    },
    {
      id: 6,
      question: "What do you think about your diet? Here are some options:",
      options: [
        "Mainly fast food and processed items",
        "A mix of good and not-so-good food choices", 
        "Mostly healthy, filled with fruits, veggies, and whole grains",
        "Unsure or don't really focus on what I eat"
      ],
      hasConditionalInput: true
    },
    {
      id: 7,
      question: "Have you ever been diagnosed with any of the following?",
      options: ["Yes", "No"],
      hasConditionalInput: true,
      medicalConditionsList: [
        "Liver disease",
        "Pancreatitis", 
        "Diabetes type 1",
        "Diabetes type 2",
        "Pre diabetes",
        "Diabetic retinopathy/diabetic eye disease",
        "Heart Failure",
        "Kidney Problems",
        "Thyroid cancer or family history of thyroid cancer",
        "Gallstones",
        "Weight related surgery",
        "Fast heart rate (Tachycardia)",
        "Multiple endocrine neoplasia 2 (MEN2)",
        "Suicidal thoughts",
        "Eating disorders",
        "Cholestasis",
        "Chronic malabsorption syndrome"
      ]
    },
    {
      id: 8,
      question: "Do you have any of the following weight-related conditions?",
      options: ["Yes", "No"],
      hasConditionalInput: true,
      medicalConditionsList: [
        "Hypertension (high blood pressure)",
        "Dyslipidaemia (high cholesterol)",
        "Cardiovascular disease",
        "Pre-diabetes",
        "Knee or hiposteoarthritis",
        "Obstructive sleep apnoea",
        "Asthma/chronic obstructive pulmonary disease (COPD)",
        "Liver disease (non-alcoholic fatty liver disease (NAFLD) or non-alcoholic steatohepatitis (NASH) and polycystic ovary syndrome (PCOS)",
        "Erectile dysfunction"
      ]
    },
    {
      id: 9,
      question: "Have you previously or are you currently using any other weight loss treatment?",
      options: [
        "Ozempic (semaglutide)",
        "Saxenda (liraglutide)", 
        "Rybelsus (semaglutide)",
        "Mysimba (naltrexone/bupropion)",
        "Orlistat (alli)",
        "Victoza (liraglutide)",
        "Mounjaro (tirzepatide)",
        "Trulicity (dulaglutide)",
        "Wegovy (semaglutide)",
        "Other",
        "Never taken weight loss treatment"
      ],
      hasConditionalInput: true
    },
    {
      id: 10,
      question: "Do you have any allergies?",
      options: ["Yes", "No"],
      hasConditionalInput: true
    },
    {
      id: 11,
      question: "Are you taking any other medication (on prescription or over the counter)?",
      options: ["Yes", "No"],
      hasConditionalInput: true
    },
    {
      id: 12,
      question: "I understand that the medication has specific storage and usage requirements and I will check this information in the leaflet provided.",
      subtext: "(our prescribers recommend you ideally start using the medicine within a week of receiving it)",
      options: ["I understand"],
      isConfirmation: true
    },
    {
      id: 13,
      question: "Terms and Conditions Agreement",
      options: [],
      isTermsPage: true
    }
  ];

  // Function to get filtered questions based on answers
  const getFilteredQuestions = () => {
    let filteredQuestions = [...questions];
    
    // If user selected "Male" in question 2, skip questions 2.1 and 2.2 (pregnancy and contraception questions)
    if (answers[2] === "Male") {
      filteredQuestions = filteredQuestions.filter(q => q.id !== 2.1 && q.id !== 2.2);
    }
    // If user selected "Female" in question 2, include questions 2.1 and 2.2
    else if (answers[2] === "Female") {
      // Keep questions 2.1 and 2.2 for female users
    }
    
    return filteredQuestions;
  };

  const filteredQuestions = getFilteredQuestions();
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const totalQuestions = filteredQuestions.length;

  const handleOptionSelect = (option: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion?.id]: option
    }));
  };

  const handleNext = () => {
    // Save height/weight data for custom form
    if (currentQuestion?.isCustomForm) {
      if (unitSystem === 'Metric') {
        setAnswers(prev => ({
          ...prev,
          [`${currentQuestion.id}_height`]: heightCm,
          [`${currentQuestion.id}_weight`]: weightKg,
          [`${currentQuestion.id}_unit`]: unitSystem
        }));
      } else {
        setAnswers(prev => ({
          ...prev,
          [`${currentQuestion.id}_height_feet`]: heightFeet,
          [`${currentQuestion.id}_height_inches`]: heightInches,
          [`${currentQuestion.id}_weight_stone`]: weightStone,
          [`${currentQuestion.id}_weight_pounds`]: weightPounds,
          [`${currentQuestion.id}_unit`]: unitSystem
        }));
      }
    }

    // Save pregnancy details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 2.1 && answers[currentQuestion.id] === 'Yes') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: pregnancyDetails
      }));
    }

    // Save ethnicity details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 4 && answers[currentQuestion.id] === 'Not listed') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: ethnicityDetails
      }));
    }

    // Save medical conditions details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 7 && answers[currentQuestion.id] === 'Yes') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: medicalConditionsDetails
      }));
    }

    // Save weight-related conditions details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 8 && answers[currentQuestion.id] === 'Yes') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: weightConditionsDetails
      }));
    }

    // Save treatment history details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 9 && answers[currentQuestion.id] !== 'Never taken weight loss treatment') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: treatmentHistoryDetails
      }));
    }

    // Save allergy details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 10 && answers[currentQuestion.id] === 'Yes') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: allergyDetails
      }));
    }

    // Save medication details if provided
    if (currentQuestion?.hasConditionalInput && currentQuestion.id === 11 && answers[currentQuestion.id] === 'Yes') {
      setAnswers(prev => ({
        ...prev,
        [`${currentQuestion.id}_details`]: medicationDetails
      }));
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Handle form submission - final question
      console.log('Consultation completed:', answers);
      // Redirect to treatment & prices page
      router.push('/consultation/weight-loss/treatment-prices');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Check if custom form is properly filled
  const isCustomFormValid = () => {
    if (!currentQuestion?.isCustomForm) return true;
    
    if (unitSystem === 'Metric') {
      const heightValid = heightCm && heightCm.trim() !== '';
      const weightValid = weightKg && weightKg.trim() !== '';
      console.log('Metric validation:', { heightCm, weightKg, heightValid, weightValid });
      return heightValid && weightValid;
    } else {
      const feetValid = heightFeet && heightFeet.trim() !== '';
      const inchesValid = heightInches && heightInches.trim() !== '';
      const stoneValid = weightStone && weightStone.trim() !== '';
      const poundsValid = weightPounds && weightPounds.trim() !== '';
      console.log('Imperial validation:', { heightFeet, heightInches, weightStone, weightPounds, feetValid, inchesValid, stoneValid, poundsValid });
      return feetValid && inchesValid && stoneValid && poundsValid;
    }
  };

  const isAnswered = currentQuestion?.isCustomForm 
    ? isCustomFormValid()
    : currentQuestion?.hasConditionalInput
      ? (answers[currentQuestion?.id] !== undefined && 
         (currentQuestion.id === 2.1 
           ? (answers[currentQuestion?.id] === 'No' || pregnancyDetails.trim() !== '')
           : currentQuestion.id === 2.2
             ? true // For contraception question, both Yes and No are valid without additional input
           : currentQuestion.id === 4
             ? (answers[currentQuestion?.id] !== 'Not listed' || ethnicityDetails.trim() !== '')
           : currentQuestion.id === 5
             ? true // For exercise question, all options are valid without additional input
           : currentQuestion.id === 6
             ? true // For diet question, all options are valid without additional input
           : currentQuestion.id === 7
             ? (answers[currentQuestion?.id] === 'No' || (answers[currentQuestion?.id] === 'Yes' && medicalConditionsDetails.trim() !== ''))
           : currentQuestion.id === 8
             ? (answers[currentQuestion?.id] === 'No' || (answers[currentQuestion?.id] === 'Yes' && weightConditionsDetails.trim() !== ''))
           : currentQuestion.id === 9
             ? (answers[currentQuestion?.id] === 'Never taken weight loss treatment' || treatmentHistoryDetails.trim() !== '')
           : currentQuestion.id === 10
             ? (answers[currentQuestion?.id] === 'No' || allergyDetails.trim() !== '')
           : currentQuestion.id === 11
             ? (answers[currentQuestion?.id] === 'No' || medicationDetails.trim() !== '')
             : true
         ))
      : currentQuestion?.isTermsPage
        ? (consentToInfo && acceptTerms)
        : answers[currentQuestion?.id] !== undefined;

  console.log('Current validation state:', { 
    isCustomForm: currentQuestion?.isCustomForm, 
    unitSystem, 
    isAnswered,
    heightCm,
    weightKg 
  });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Benefits Bar */}
      <div className="bg-black text-white py-4 overflow-hidden">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Carousel - single item sliding */}
          <div className="md:hidden flex justify-center items-center text-sm h-6 relative">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 absolute transition-all duration-500 ease-in-out ${
                  index === currentBenefitIndex
                    ? 'translate-x-0 opacity-100'
                    : index < currentBenefitIndex
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <span className="text-green-400">{benefit.icon}</span>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
          
          {/* Desktop: All items visible spread across full width */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2 animate-[fadeInUp_0.5s_ease-out]">
              <span className="text-green-400">✓</span>
              <span>Free Tracked Delivery</span>
            </div>
            <div className="flex items-center space-x-2 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
              <span className="text-green-400">£</span>
              <span>Lowest Price Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 animate-[fadeInUp_0.5s_ease-out_0.4s_both]">
              <span className="text-green-400">🇬🇧</span>
              <span>We are based in the UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Flex grow to push footer down */}
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white overflow-hidden">
            {/* Question Header */}
            <div className="text-center py-8 px-6">
              {!currentQuestion?.isTermsPage && (
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Question {currentQuestion?.id} of 12
                </h1>
              )}
              <h2 className={`${currentQuestion?.isTermsPage ? 'text-2xl font-bold' : 'text-xl'} text-gray-700`}>
                {currentQuestion?.question}
              </h2>
              {currentQuestion?.subtext && (
                <p className="text-base text-gray-600 mt-4">
                  {currentQuestion.subtext}
                </p>
              )}
            </div>

            {/* Answer Options */}
            <div className="px-6 pb-8">
              {currentQuestion?.isTermsPage ? (
                <div className="space-y-6 mb-8">
                  {/* Terms and Conditions Content */}
                  <div className="text-left space-y-4 text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto">
                    <p>
                      I have answered all of the medical questions truthfully and confirm that the medication is for my own use.
                    </p>
                    <p>
                      I have read all the information and understand the potential risks and benefits of Weight management treatment. I will watch any instructional video required for any treatment and if I have any questions I will contact Assured Pharmacy.
                    </p>
                    <p>
                      We collect information about your health to enable us to treat you safely. Under the GDPR this type of data is classed as sensitive and so we take further precautions when collecting and processing it. By consenting to the treatment you are permitting us to use this health data to provide the weight management service.
                    </p>
                    <p>
                      I agree to be treated by healthcare professionals at Assured Pharmacy.
                    </p>
                    <p>
                      And if I have any questions or side effects from my treatment then I will speak to a healthcare professional.
                    </p>
                    <p>
                      I acknowledge that the weight loss treatment plan will be billed monthly. The first month of treatment may be offered at a discounted rate, with subsequent monthly subscriptions thereafter.
                    </p>
                    <p>
                      You have the flexibility to cancel or pause your prescription indefinitely at any time by contacting customer services at team@assuredpharmacy.co.uk or reaching us at 01625460621. Please be aware that payment is processed 48 hours before your order is scheduled for dispatch. Once medication has been dispensed, refunds cannot be issued.
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4 mt-8">
                    <label className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={consentToInfo}
                        onChange={(e) => setConsentToInfo(e.target.checked)}
                        className="mt-1 w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-800 text-sm">
                        I consent to the above information and conditions
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 p-4 border border-green-200 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mt-1 w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-800 text-sm">
                        I&apos;ve read and accept the{' '}
                        <a href="/terms-and-conditions" target="_blank" className="text-blue-600 hover:underline">
                          terms & conditions
                        </a>
                        {' '}and{' '}
                        <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">
                          privacy policy
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              ) : currentQuestion?.isCustomForm ? (
                <div className="space-y-6 mb-8">
                  {/* Unit System Toggle */}
                  <div className="flex justify-center">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setUnitSystem('Imperial')}
                        className={`px-6 py-2 rounded-md transition-colors ${
                          unitSystem === 'Imperial' 
                            ? 'bg-green-100 text-gray-800 shadow-sm' 
                            : 'text-gray-600'
                        }`}
                      >
                        <span className={unitSystem === 'Imperial' ? 'flex items-center' : ''}>
                          {unitSystem === 'Imperial' && (
                            <span className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mr-2">
                              <span className="text-white text-xs">✓</span>
                            </span>
                          )}
                          Imperial
                        </span>
                      </button>
                      <button
                        onClick={() => setUnitSystem('Metric')}
                        className={`px-6 py-2 rounded-md transition-colors ${
                          unitSystem === 'Metric' 
                            ? 'bg-green-100 text-gray-800 shadow-sm' 
                            : 'text-gray-600'
                        }`}
                      >
                        <span className={unitSystem === 'Metric' ? 'flex items-center' : ''}>
                          {unitSystem === 'Metric' && (
                            <span className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mr-2">
                              <span className="text-white text-xs">✓</span>
                            </span>
                          )}
                          Metric
                        </span>
                      </button>
                    </div>
                  </div>

                  {unitSystem === 'Metric' ? (
                    <>
                      {/* Metric Height Input */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Height (cm)
                        </label>
                        <input
                          type="text"
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          placeholder="170"
                          className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      {/* Metric Weight Input */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Weight (kg)
                        </label>
                        <input
                          type="text"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          placeholder="50"
                          className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Imperial Height Inputs */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Height
                        </label>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Feet
                            </label>
                            <input
                              type="text"
                              value={heightFeet}
                              onChange={(e) => setHeightFeet(e.target.value)}
                              placeholder="5"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Inches
                            </label>
                            <input
                              type="text"
                              value={heightInches}
                              onChange={(e) => setHeightInches(e.target.value)}
                              placeholder="7"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Imperial Weight Inputs */}
                      <div>
                        <label className="block text-center text-gray-700 font-medium mb-3">
                          Weight
                        </label>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Stone
                            </label>
                            <input
                              type="text"
                              value={weightStone}
                              onChange={(e) => setWeightStone(e.target.value)}
                              placeholder="7"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-center text-gray-600 text-sm mb-2">
                              Pounds
                            </label>
                            <input
                              type="text"
                              value={weightPounds}
                              onChange={(e) => setWeightPounds(e.target.value)}
                              placeholder="12"
                              className="w-full p-4 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-4 mb-8">
                  {/* Special layout for medical conditions questions */}
                  {(currentQuestion.id === 7 || currentQuestion.id === 8) ? (
                    <div className="space-y-4">
                      {/* Medical conditions list - shown for both Yes and No */}
                      {currentQuestion?.hasConditionalInput && answers[currentQuestion.id] !== undefined && currentQuestion.medicalConditionsList && (
                        <div>
                          {/* Medical conditions list */}
                          <div className="text-sm text-gray-700 space-y-1 mb-4">
                            {currentQuestion.medicalConditionsList.map((condition, index) => (
                              <div key={index} className="py-1">
                                {condition}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Yes/No options for medical conditions */}
                      {currentQuestion?.options.map((option, index) => {
                        const isSelected = answers[currentQuestion.id] === option;
                        
                        return (
                          <label
                            key={index}
                            className={`flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors group ${
                              isSelected ? 'bg-green-100 border-green-200' : 'hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${currentQuestion.id}`}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleOptionSelect(option)}
                              className="w-5 h-5 text-green-500"
                            />
                            <span className={`flex-1 ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
                              {option}
                            </span>
                            {isSelected && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-2">
                                <span className="text-white text-sm">✓</span>
                              </div>
                            )}
                          </label>
                        );
                      })}

                      {/* Please specify input - only for "Yes" selection */}
                      {currentQuestion?.hasConditionalInput && answers[currentQuestion.id] === 'Yes' && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                          </div>
                          <textarea
                            value={currentQuestion.id === 7 ? medicalConditionsDetails : weightConditionsDetails}
                            onChange={(e) => currentQuestion.id === 7 ? setMedicalConditionsDetails(e.target.value) : setWeightConditionsDetails(e.target.value)}
                            placeholder={currentQuestion.id === 7 ? "Please provide details about your medical conditions..." : "Please provide details about your weight-related conditions..."}
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Regular layout for all other questions */
                    <>
                      {currentQuestion?.options.map((option, index) => {
                        const isSelected = answers[currentQuestion.id] === option;
                        const isEthnicityQuestion = currentQuestion.id === 4;
                        const shouldShowInfoIcon = isEthnicityQuestion && option !== "Not listed";
                        
                        return (
                          <label
                            key={index}
                            className={`flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer transition-colors group ${
                              isSelected ? 'bg-green-100 border-green-200' : 'hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${currentQuestion.id}`}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleOptionSelect(option)}
                              className="w-5 h-5 text-green-500"
                            />
                            <span className={`flex-1 ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
                              {option}
                            </span>
                            {shouldShowInfoIcon && (
                              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">i</span>
                              </div>
                            )}
                            {isSelected && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-2">
                                <span className="text-white text-sm">✓</span>
                              </div>
                            )}
                          </label>
                        );
                      })}
                      
                      {/* Conditional input for pregnancy question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 2.1 && answers[currentQuestion.id] === 'Yes' && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                          </div>
                          <textarea
                            value={pregnancyDetails}
                            onChange={(e) => setPregnancyDetails(e.target.value)}
                            placeholder="Please provide details..."
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}

                      {/* Conditional input for ethnicity question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 4 && answers[currentQuestion.id] === 'Not listed' && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                          </div>
                          <textarea
                            value={ethnicityDetails}
                            onChange={(e) => setEthnicityDetails(e.target.value)}
                            placeholder="Please provide details..."
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}

                      {/* Conditional warning for contraception question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 2.2 && answers[currentQuestion.id] === 'No' && (
                        <div className="mt-4">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-start space-x-2">
                              <span className="text-yellow-600 text-lg mt-0.5">!</span>
                              <div className="text-yellow-800 text-sm leading-relaxed">
                                Weight loss treatment is not recommended during pregnancy, and it is crucial to prevent unintended pregnancies while on this medication. Effective contraceptive use ensures that individuals on Weight loss treatment can focus on their health and weight management goals without the added concern of pregnancy, which may not be advisable due to the potential risks associated with the medication during pregnancy. If you need more information about this, please get in touch and read the information provided with any orders.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Conditional message for exercise question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 5 && (answers[currentQuestion.id] === 'None' || answers[currentQuestion.id] === 'Less than 1 hour') && (
                        <div className="mt-4">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-start space-x-2">
                              <span className="text-yellow-600 text-lg mt-0.5">!</span>
                              <div className="text-yellow-800 text-sm leading-relaxed">
                                It is recommended that patients prescribed weight loss treatment incorporate a comprehensive approach to manage their health, which includes maintaining a balanced diet, engaging in regular physical activity, and adopting a healthy lifestyle. To optimise the therapeutic benefits of weight loss treatment, we advise patients to undertake at least 150 minutes of moderate-intensity exercise per week.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Conditional message for diet question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 6 && answers[currentQuestion.id] !== 'Mostly healthy, filled with fruits, veggies, and whole grains' && answers[currentQuestion.id] !== undefined && (
                        <div className="mt-4">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-start space-x-2">
                              <span className="text-yellow-600 text-lg mt-0.5">!</span>
                              <div className="text-yellow-800 text-sm leading-relaxed">
                                Acknowledging dietary challenges is crucial for your health improvement. To complement your treatment with medications, adopting a balanced diet and reducing calorie intake are essential steps. We suggest starting with manageable changes: increase fruits and vegetables, opt for whole grains, include lean proteins, and importantly, reduce processed foods and sugary snacks. Cutting down on portion sizes and avoiding high-calorie meals can significantly contribute to your overall calorie reduction. Our team is prepared to offer further guidance and connect you with a health professional for personalised advice.
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Conditional input for weight loss treatment question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 9 && answers[currentQuestion.id] !== 'Never taken weight loss treatment' && answers[currentQuestion.id] !== undefined && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <div className="text-yellow-800 text-sm">
                              Could you please share with us when you first started taking this medication, how long you&apos;ve been using it, and the last time you took it? It helps us understand your treatment history better.
                            </div>
                          </div>
                          <textarea
                            value={treatmentHistoryDetails}
                            onChange={(e) => setTreatmentHistoryDetails(e.target.value)}
                            placeholder="Please provide details about your weight loss treatment history..."
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}

                      {/* Conditional input for allergy question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 10 && answers[currentQuestion.id] === 'Yes' && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                          </div>
                          <textarea
                            value={allergyDetails}
                            onChange={(e) => setAllergyDetails(e.target.value)}
                            placeholder="Please provide details about your allergies..."
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}

                      {/* Conditional input for medication question */}
                      {currentQuestion?.hasConditionalInput && currentQuestion.id === 11 && answers[currentQuestion.id] === 'Yes' && (
                        <div className="mt-4 space-y-3">
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center space-x-2">
                            <span className="text-yellow-600 text-lg">!</span>
                            <span className="text-yellow-800 text-sm font-medium">Please specify</span>
                          </div>
                          <textarea
                            value={medicationDetails}
                            onChange={(e) => setMedicationDetails(e.target.value)}
                            placeholder="Please provide details about your medications..."
                            className="w-full p-4 border border-gray-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            rows={3}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="px-6 py-2 text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed hover:text-gray-800 transition-colors flex items-center space-x-1"
                >
                  {currentQuestion?.isTermsPage ? (
                    <>
                      <ChevronRight size={16} className="rotate-180" />
                      <span>Go back to questions</span>
                    </>
                  ) : (
                    <>
                      <ChevronRight size={16} className="rotate-180" />
                      <span>Previous</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>{currentQuestion?.isTermsPage ? 'Submit' : 'Next'}</span>
                  {!currentQuestion?.isTermsPage && (
                    <ChevronRight size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer - Positioned at bottom */}
      <div className="bg-white py-8 text-center mt-auto">
        <p className="text-sm text-gray-600">
          Copyright Assured Pharmacy 2025
        </p>
      </div>
    </main>
  );
}
