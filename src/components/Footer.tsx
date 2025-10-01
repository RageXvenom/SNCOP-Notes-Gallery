import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20">
      <div className="glass-effect py-8 border-t border-white/20 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 floating-animation">
              <span>©{currentYear} Developed By</span>
              <span className="font-semibold text-gradient">Arvind Nag</span>
              <span>with</span>
              <Heart className="h-4 w-4 text-red-500 pulse-animation" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;