import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Chrome, MessageSquare, Users, User, FileText, Brain, Target, Zap } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { ResumeOptimizerMockup } from './ResumeOptimizerMockup';

interface AITool {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  mockupContent: React.ReactNode;
}

export function AIToolsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const aiTools: AITool[] = [
    {
      id: 'linkedin-optimizer',
      title: 'LinkedIn Profile Optimizer',
      description: 'Optimize your LinkedIn profile with AI-powered suggestions for better visibility',
      icon: Linkedin,
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      mockupContent: (
        <div className="bg-black rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-[#5299E5] rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="h-3 bg-[#5299E5] rounded w-24 mb-1"></div>
              <div className="h-2 bg-gray-600 rounded w-16"></div>
            </div>
            <div className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Banner
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-xs text-green-400">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Profile Photo
            </div>
            <div className="h-2 bg-gray-700 rounded w-full"></div>
            <div className="h-2 bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      )
    },
    {
      id: 'chrome-extension',
      title: 'Chrome Extension',
      description: 'Track jobs across all platforms with our intelligent browser extension',
      icon: Chrome,
      bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
      mockupContent: (
        <div className="bg-black rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Chrome className="w-4 h-4 text-[#5299E5]" />
              <span className="text-xs font-medium text-white">Chrome Extension</span>
            </div>
            <div className="w-2 h-2 bg-[#5299E5] rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-700 rounded w-full"></div>
            <div className="h-2 bg-gray-700 rounded w-2/3"></div>
            <div className="h-2 bg-[#3D84D8] rounded w-1/2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'interview-prep',
      title: 'Interview Preparation',
      description: 'Practice with AI-powered mock interviews and get instant feedback',
      icon: MessageSquare,
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      mockupContent: (
        <div className="bg-black rounded-lg p-4 shadow-sm">
          <div className="text-sm font-medium mb-3 text-white">Interview Questions</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#5299E5] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">1</span>
              </div>
              <div className="h-2 bg-gray-700 rounded flex-1"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#5299E5] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">2</span>
              </div>
              <div className="h-2 bg-gray-700 rounded flex-1"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cover-letter',
      title: 'AI Cover Letter Generator',
      description: 'Generate personalized cover letters that match job requirements perfectly',
      icon: FileText,
      bgColor: 'bg-gradient-to-br from-cyan-100 to-cyan-200',
      mockupContent: (
        <div className="bg-black rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-2 mb-3">
            <FileText className="w-4 h-4 text-[#5299E5]" />
            <span className="text-sm font-medium text-white">Your Cover Letter</span>
            <div className="ml-auto w-8 h-8 bg-[#D6EAFF] rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#5299E5]" />
            </div>
          </div>
          <div className="text-xs text-gray-300 mb-2">Dear Recruiter,</div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-700 rounded w-full"></div>
            <div className="h-2 bg-green-100 rounded w-3/4"></div>
            <div className="text-xs text-green-400 font-medium">achieve its marketing goals</div>
            <div className="h-2 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      )
    },
    {
      id: 'networking-tracker',
      title: 'Networking Tracker',
      description: 'Manage your professional connections and track networking progress',
      icon: Users,
      bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
      mockupContent: (
        <div className="bg-black rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-white">Hi John</span>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="h-2 bg-gray-700 rounded flex-1"></div>
            </div>
            <div className="bg-[#E8F3FC] rounded p-2">
              <div className="text-xs text-gray-800">Hi! Nice to meet you</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'resume-templates',
      title: 'Resume Templates',
      description: 'Professional resume templates optimized for ATS and modern hiring',
      icon: FileText,
      bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
      mockupContent: (
        <div className="h-48 overflow-hidden">
          <ResumeOptimizerMockup />
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === aiTools.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, aiTools.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? aiTools.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === aiTools.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getVisibleTools = () => {
    const tools = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % aiTools.length;
      tools.push(aiTools[index]);
    }
    return tools;
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getVisibleTools().map((tool, index) => (
          <Card 
            key={`${tool.id}-${currentIndex}-${index}`}
            className={`${tool.bgColor} border-0 overflow-hidden transition-all duration-500 hover:scale-105`}
            padding="lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
              <div className="w-8 h-8 bg-white/50 rounded-lg flex items-center justify-center">
                <tool.icon className="w-4 h-4 text-gray-900" />
              </div>
            </div>
            <div className="mb-4">
              {tool.mockupContent}
            </div>
            <p className="text-sm text-white font-medium">{tool.description}</p>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex space-x-2">
          {aiTools.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
