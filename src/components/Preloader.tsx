import { useEffect, useState } from "react";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate smooth progress
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 4 + 1.5;
        const newProgress = Math.min(prev + increment, 100);
        
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  // Fade out after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white transition-all duration-1000 z-50 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Main container */}
      <div className="relative flex flex-col items-center p-8">
        
        {/* Central logo with glowing effect */}
        <div className="relative mb-12">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 animate-spin-slow blur-sm"></div>
          
          {/* Main ring */}
          <div className="relative w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-spin-slow">
            {/* Rotating indicator */}
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-yellow-400/50"></div>
          </div>
          
          {/* Inner core */}
          <div className="absolute inset-6 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-full shadow-2xl shadow-yellow-400/30 animate-pulse-gentle">
            <div className="w-full h-full bg-gradient-to-br from-yellow-200/80 to-yellow-300/80 rounded-full animate-pulse-slow"></div>
            {/* Inner light */}
            <div className="absolute inset-2 bg-white/40 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Simple brand text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-wider bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4">
            Root Lamp Trust
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-lg font-light tracking-wide opacity-80">
            Illuminating Hope & Trust
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>

        {/* Modern progress bar */}
        <div className="w-80 mb-8">
          {/* Progress track */}
          <div className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
            {/* Background track */}
            <div className="absolute inset-0 bg-gray-700/50 rounded-full"></div>
            
            {/* Progress fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-full transition-all duration-500 ease-out shadow-sm shadow-yellow-400/50"
              style={{ width: `${progress}%` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-amber-400/50 rounded-full blur-sm"></div>
            </div>
          </div>
          
          {/* Progress info */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-yellow-400 font-medium">Loading...</span>
            <span className="text-gray-500 font-mono">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading indicator dots */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-8 text-center">
          <p className="text-gray-600 text-xs tracking-wide">
            Building a brighter future together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
