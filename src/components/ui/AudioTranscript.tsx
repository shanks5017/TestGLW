import React, { useEffect, useState } from 'react';

interface AudioTranscriptProps {
  text?: string;
  className?: string;
}

export function AudioTranscript({ 
  text = "GetLanded helps students track jobs, optimize resumes, and land their dream roles with AI-powered insights.",
  className = '' 
}: AudioTranscriptProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Create waveform bars
  const waveformBars = Array.from({ length: 8 }, (_, i) => {
    const height = Math.sin((progress / 10) + i * 0.5) * 8 + 12;
    return (
      <div
        key={i}
        className="bg-white/80 rounded-full transition-all duration-200 ease-out"
        style={{
          width: '2px',
          height: `${height}px`,
          animationDelay: `${i * 0.1}s`
        }}
      />
    );
  });

  return (
    <div className={`relative w-full h-32 overflow-hidden ${className}`}>
      {/* Full width curved band */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 128"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="curve"
            d="M 0,90 Q 300,50 600,70 T 1200,60"
            fill="none"
          />
        </defs>
        
        {/* Dark curved band spanning full width */}
        <path
          d="M 0,90 Q 300,50 600,70 T 1200,60 L 1200,128 L 0,128 Z"
          fill="rgba(15, 23, 42, 0.8)"
          className="drop-shadow-lg"
        />
        
        {/* Text following the curve */}
        <text className="fill-white/70 text-sm font-medium">
          <textPath href="#curve" startOffset={`${-progress * 2}%`}>
            {text} • {text} • {text}
          </textPath>
        </text>
      </svg>

      {/* Moving audio capsule */}
      <div
        className="absolute flex items-center justify-center w-20 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg transition-all duration-100 ease-out"
        style={{
          left: `${progress}%`,
          top: `${60 + Math.sin((progress / 100) * Math.PI * 4) * 15}px`,
          transform: 'translateX(-50%)',
          boxShadow: '0 4px 20px rgba(0, 245, 255, 0.3)'
        }}
      >
        {/* Waveform inside capsule */}
        <div className="flex items-center justify-center space-x-1">
          {waveformBars}
        </div>
      </div>
    </div>
  );
}