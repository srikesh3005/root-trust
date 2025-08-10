import { useEffect, useState } from "react";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  // Simulate loading progress
  useEffect(() => {
    const texts = [
      "Initializing...",
      "Loading Resources...",
      "Preparing Interface...",
      "Almost Ready...",
      "Welcome!"
    ];

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 3 + 1, 100);
        
        // Update text based on progress
        if (newProgress < 20) setCurrentText(texts[0]);
        else if (newProgress < 40) setCurrentText(texts[1]);
        else if (newProgress < 60) setCurrentText(texts[2]);
        else if (newProgress < 90) setCurrentText(texts[3]);
        else setCurrentText(texts[4]);
        
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(progressTimer);
  }, []);

  // Simulate loading complete after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white transition-all duration-1000 z-50 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-8">
        
        {/* Modern Logo/Icon */}
        <div className="relative mb-12">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-24 h-24 border-2 border-yellow-400/20 rounded-full animate-spin-slow"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 w-20 h-20 border-2 border-yellow-400/40 rounded-full animate-pulse"></div>
          
          {/* Inner Lamp Core */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Central Light */}
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-full shadow-2xl shadow-yellow-400/50 animate-pulse-slow">
              {/* Inner Glow */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-80 animate-ping-slow"></div>
              {/* Core Light */}
              <div className="absolute inset-3 bg-white rounded-full opacity-60 animate-pulse"></div>
            </div>
            
            {/* Light Rays */}
            <div className="absolute inset-0 animate-spin-slow">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-6 bg-gradient-to-t from-yellow-400 to-transparent"
                  style={{
                    left: '50%',
                    top: '-12px',
                    transformOrigin: '50% 60px',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-pulse-slow">
            Root Lamp
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-wide opacity-80">
            Illuminating Hope & Trust
          </p>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-yellow-400 text-sm font-medium">{currentText}</span>
            <span className="text-gray-400 text-sm font-mono">{Math.round(progress)}%</span>
          </div>
          
          {/* Progress Track */}
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gray-700 rounded-full"></div>
            {/* Progress Fill */}
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-yellow-400/30 relative -mt-2"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        {/* Subtle Footer */}
        <div className="absolute bottom-8 text-center">
          <p className="text-gray-500 text-xs">
            Building a brighter future together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
