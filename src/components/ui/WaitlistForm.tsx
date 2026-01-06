import React, { useState } from 'react';
import { Mail, ArrowRight, Check, User, Phone, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { Card } from './Card';

interface FormData {
  name: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

export function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="text-center max-w-md mx-auto glass-card animate-scale-in">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">You're on the list! 🎉</h3>
        <p className="text-gray-300 mb-4">
          Thanks {formData.name}! We'll notify you as soon as GetLanded is ready. You'll be among the first to experience 
          AI-powered job search optimization.
        </p>
        <p className="text-sm text-gray-400">
          Expected launch: Q2 2025
        </p>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto glass-card" id="waitlist">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
        <p className="text-gray-300">
          Be the first to experience the future of AI-powered job search. 
          Get early access and exclusive updates.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          icon={User}
          required
          className="glass-card border-white/20"
        />

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email address"
          icon={Mail}
          required
          className="glass-card border-white/20"
        />

        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          icon={Phone}
          className="glass-card border-white/20"
        />

        <div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Tell us about your background or any specific needs..."
              className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors glass-card text-white placeholder-gray-400 resize-none"
              rows={3}
            />
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full btn-neon"
          size="lg"
          loading={isLoading}
          icon={ArrowRight}
          iconPosition="right"
        >
          Join Waitlist
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400">
          🚀 Early access • 🎓 Student-first features • 🆓 Free to start
        </p>
      </div>
    </Card>
  );
}