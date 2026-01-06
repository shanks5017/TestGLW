import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './Card';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-blue-200 transition-colors">
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full text-left p-6 focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 pr-4">
                {faq.question}
              </h3>
              {openItems.includes(faq.id) ? (
                <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </div>
          </button>
          <div
            className={`faq-content ${openItems.includes(faq.id) ? 'open' : ''}`}
            style={{
              maxHeight: openItems.includes(faq.id) ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-out'
            }}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-slate-500 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}