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
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={cn(
            "rounded-3xl border transition-all duration-300 overflow-hidden bg-white",
            openItems.includes(faq.id)
              ? "border-primary/20 shadow-professional ring-1 ring-primary/5"
              : "border-gray-100 hover:border-blue-100 hover:bg-gray-50/50"
          )}
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full text-left p-6 md:p-8 focus:outline-none flex items-center justify-between group"
          >
            <h3 className={cn(
              "text-lg md:text-xl font-bold pr-8 transition-colors",
              openItems.includes(faq.id) ? "text-primary" : "text-slate-900 group-hover:text-primary"
            )}>
              {faq.question}
            </h3>
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              openItems.includes(faq.id) ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
            )}>
              <ChevronDown className="w-5 h-5" />
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
                <div className="px-6 md:px-8 pb-8 pt-0">
                  <p className="text-slate-500 leading-relaxed text-lg border-t border-gray-100 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}