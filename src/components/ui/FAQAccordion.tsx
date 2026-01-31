import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

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
    <div className="w-full border-t border-[#0463c7]/30">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          onMouseEnter={() => setOpenItems([faq.id])}
          className={cn(
            "w-full border-b border-[#0463c7]/30 transition-colors duration-300 bg-white",
            openItems.includes(faq.id) ? "bg-slate-50/30" : "hover:bg-slate-50/30"
          )}
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full text-left py-6 focus:outline-none block group"
          >
            <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
              <h3 className={cn(
                "text-lg font-bold pr-8 transition-colors",
                openItems.includes(faq.id) ? "text-[#0463c7]" : "text-slate-900 group-hover:text-[#0463c7]"
              )}>
                {faq.question}
              </h3>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
                openItems.includes(faq.id) ? "bg-[#0463c7] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-[#E8F3FC] group-hover:text-[#0463c7]"
              )}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          <AnimatePresence>
            {openItems.includes(faq.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="max-w-4xl mx-auto px-6 pb-8">
                  <div className="pr-12 md:pr-24">
                    <p className="text-slate-500 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}