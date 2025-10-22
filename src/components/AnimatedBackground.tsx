import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Soft gradient background */}
      <div className={`absolute inset-0 opacity-20 soft-gradient`} />
      
      {/* Gentle floating shapes */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-32 h-32 opacity-10 gentle-float rounded-full ${
          isDark ? 'bg-blue-600' : 'bg-blue-200'
        }`} />
        <div className={`absolute top-40 right-20 w-24 h-24 opacity-8 gentle-float rounded-full ${
          isDark ? 'bg-teal-600' : 'bg-teal-200'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute bottom-32 left-32 w-20 h-20 opacity-12 gentle-float rounded-full ${
          isDark ? 'bg-green-600' : 'bg-green-200'
        }`} style={{ animationDelay: '4s' }} />
        <div className={`absolute bottom-20 right-40 w-28 h-28 opacity-10 gentle-float rounded-full ${
          isDark ? 'bg-indigo-600' : 'bg-indigo-200'
        }`} style={{ animationDelay: '1s' }} />
      </div>

      {/* Soft particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-30 soft-particles ${
              isDark ? 'bg-blue-300' : 'bg-blue-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `softParticles ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Additional gentle shapes */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-5 rounded-full gentle-float ${
              isDark ? 'bg-blue-500' : 'bg-blue-100'
            }`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;