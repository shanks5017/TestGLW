import React from 'react';
import { Check, AlertTriangle, User, Sparkles } from 'lucide-react';

export function ResumeOptimizerMockup() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 min-h-[400px] relative overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
          <p className="text-gray-600">Full stack software engineer</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Resume Sections */}
        <div className="lg:col-span-2 space-y-4">
          {/* Summary Section */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800 flex items-center">
                Summary
                <Check className="w-4 h-4 text-green-500 ml-2" />
              </h4>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-full"></div>
              <div className="h-2 bg-green-200 rounded w-3/4 relative">
                <span className="absolute -top-6 left-1/3 text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded">
                  achieve its marketing goal
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800 flex items-center">
                Experience
                <Check className="w-4 h-4 text-green-500 ml-2" />
              </h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-6 bg-green-100 text-green-700 text-xs font-medium rounded px-2 py-1 flex items-center justify-center">
                  Google
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded w-4/5"></div>
              <div className="h-2 bg-gray-200 rounded w-3/5"></div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800 flex items-center">
                Education
                <Check className="w-4 h-4 text-green-500 ml-2" />
              </h4>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-full"></div>
              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-4">
          {/* Professional Summary Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-medium text-gray-700">Professional Summary</h5>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-medium text-gray-700">Work Experience</h5>
              <div className="flex items-center space-x-1">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Resume Score */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <h5 className="font-medium text-gray-700 mb-4">Resume Score</h5>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#10b981"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${95 * 2.51} ${100 * 2.51}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">95%</span>
              </div>
            </div>
            <button className="bg-[#3D84D8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2A74C9] transition-colors">
              TAILOR TO JOB
            </button>
          </div>
        </div>
      </div>

      {/* Floating AI Badge */}
      <div className="absolute top-4 right-4 bg-[#3D84D8] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
        <Sparkles className="w-3 h-3" />
        <span>AI Optimized</span>
      </div>
    </div>
  );
}
