import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

import { Badge } from './Badge';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge?: string;
  href?: string;
}

interface FeatureDropdownProps {
  title: string;
  features: FeatureItem[];
  className?: string;
}

export function FeatureDropdown({ title, features, className = '' }: FeatureDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl border border-gray-200 shadow-2xl z-50 animate-fade-in-up"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <a
                  key={index}
                  href={feature.href || '#'}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {feature.title}
                      </h4>
                      {feature.badge && (
                        <Badge variant="primary" size="sm">{feature.badge}</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-200" />
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="/features"
                className="flex items-center justify-center space-x-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <span>View all features</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}