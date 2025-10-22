import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, BookOpen, Settings, MessageSquare, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { fileStorageService } from '../services/fileStorage';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { isLoggedIn, syncWithServer } = useData();
  const { user } = useAuth();
  const location = useLocation();

  // Auto-sync when component mounts and periodically
  React.useEffect(() => {
    const performSync = async () => {
      try {
        await syncWithServer();
      } catch (error) {
        console.error('Auto-sync failed:', error);
      }
    };

    // Initial sync
    performSync();

    // Sync every 10 seconds for better real-time updates
    const interval = setInterval(performSync, 10000);

    return () => clearInterval(interval);
  }, [syncWithServer]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Notes Gallery', href: '/notes' },
    { name: 'Practice Tests', href: '/practice-tests' },
    { name: 'SNCOP-AI', href: '/ai-chat' },
    { name: 'About', href: '/about' },
    { name: 'Developer', href: '/developer' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-scale">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gradient">SNCOP</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">B.Pharm Notes</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-scale ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass-effect hover:scale-110 transition-all duration-300 hover:shadow-lg"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-600" />
                )}
              </button>

              {/* Profile Button (for logged in users) */}
              {user && (
                <Link
                  to="/profile"
                  className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-medium hover-scale shadow-lg"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              )}

              {/* Admin Button */}
              <Link
                to={isLoggedIn ? "/admin" : "/admin-login"}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover-scale shadow-lg"
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg glass-effect hover:scale-110 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20 dark:border-gray-800/50 fade-in-up">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {user && (
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium shadow-lg"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                )}
                <Link
                  to={isLoggedIn ? "/admin" : "/admin-login"}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg"
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin Panel</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
