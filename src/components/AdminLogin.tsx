import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useData();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (login(email, password)) {
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white soft-glow">
              <Lock className="h-12 w-12" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gradient neon-glow">Admin Login</h2>
          <p className="mt-2 text-high-contrast opacity-80">
            Access the admin panel to manage content
          </p>
        </div>

        <div className="glass-effect p-8 rounded-2xl slide-up enhanced-shadow" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center space-x-2 p-4 bg-red-100 dark:bg-red-900/50 border border-red-300 dark:border-red-700 rounded-lg enhanced-shadow">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-800 dark:text-red-200 text-sm font-semibold">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-high-contrast mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-high-contrast rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-high-contrast border border-gray-300 dark:border-gray-600 enhanced-shadow"
                  placeholder="Enter admin email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-high-contrast mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-high-contrast rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-high-contrast border border-gray-300 dark:border-gray-600 enhanced-shadow"
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-high-contrast opacity-60 hover:opacity-100 transition-opacity"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full button-primary py-3 rounded-lg hover-scale shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shimmer-effect text-shadow"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-bold">Signing in...</span>
                </div>
              ) : (
                <span className="font-bold">Sign In</span>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;