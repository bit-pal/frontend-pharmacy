'use client';

import Image from 'next/image';

interface MedicationDetail {
  label: string;
  value: string;
}

interface Medication {
  name: string;
  image?: string;
  isRecommended?: boolean;
  badge?: string;
  buttonText?: string;
  buttonLink?: string;
  rating?: {
    text: string;
    platform: string;
    stars: number;
  };
  features: string[];
  details: MedicationDetail[];
}

interface MedicationsSectionProps {
  title: string;
  medications: Medication[];
  backgroundColor?: string;
}

export default function MedicationsSection({
  title,
  medications,
  backgroundColor = "bg-white"
}: MedicationsSectionProps) {
  return (
    <div className={`${backgroundColor} rounded-2xl p-8 md:p-12`}>
      <div>
        <h2 
          className="text-3xl md:text-4xl font-bold text-black mb-8 text-left"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className={`grid ${medications.length <= 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-2'} gap-6 max-w-6xl mx-auto`}>
          {medications.map((medication, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-3 relative">
              {/* Badge (Recommended or custom) */}
              {(medication.isRecommended || medication.badge) && (
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    {medication.isRecommended && <span className="text-white mr-1">★</span>}
                    <span>{medication.badge || "Recommended"}</span>
                  </div>
                </div>
              )}

                          <div className="relative mb-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{medication.name}</h3>
                </div>
                  
                  <div className="flex flex-col items-end">
                    {medication.buttonText && medication.buttonLink && (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-medium mb-2">
                        {medication.buttonText}
                      </button>
                    )}
                    {/* Medication image */}
                    <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                      {medication.image ? (
                        <Image
                          src={medication.image}
                          alt={medication.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-16 h-20 bg-gray-300 rounded"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              {medication.rating && (
                <div className="flex items-center mb-1">
                  <span className="text-xs font-medium text-black mr-2">{medication.rating.text}</span>
                  <div className="flex items-center mr-2">
                    <span className="text-green-600 text-sm">★</span>
                    <span className="text-xs font-medium text-black ml-1">{medication.rating.platform}</span>
                  </div>
                  <div className="flex">
                    {[...Array(medication.rating.stars)].map((_, i) => (
                      <span key={i} className="text-green-500 text-xs">★</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="space-y-0.5 mb-2 text-xs">
                {medication.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom details */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                {medication.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    <p className="font-medium text-gray-900 mb-0.5 text-xs">{detail.label}</p>
                    <p className="font-bold text-black text-xs">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 