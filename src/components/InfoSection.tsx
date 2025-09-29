'use client';

import Image from 'next/image';

interface InfoItem {
  question: string;
  answer?: string;
}

interface InfoSectionProps {
  title: string;
  imageTitle: string;
  imageDescription: string;
  imageBackgroundColor?: string;
  items: InfoItem[];
  showAnswers?: boolean;
}

export default function InfoSection({
  title,
  imageTitle,
  imageDescription,
  imageBackgroundColor = "bg-green-100",
  items,
  showAnswers = false
}: InfoSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      
      {/* Left - Information Image */}
      <div className={`${imageBackgroundColor} rounded-2xl overflow-hidden h-96`}>
        <div className="relative w-full h-full">
          <Image
            src={
              imageTitle?.includes('Hair') ? '/hair_loss/faq-cover.png' :
              imageTitle?.includes('PE') ? '/pe_treatment/faq.webp' :
              '/ed_treatment/faq-cover.png'
            }
            alt={`${imageTitle} - ${imageDescription}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right - FAQ/Info */}
      <div>
        <h2 
          className="text-3xl md:text-4xl font-bold text-black mb-8"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <span className="font-semibold text-black text-lg">{item.question}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showAnswers && item.answer && (
                <div className="mt-3 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 