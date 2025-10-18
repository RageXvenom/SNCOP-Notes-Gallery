import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Download, FileText, Play, ArrowRight, MessageSquare } from 'lucide-react';
import PharmacyLogo from '../components/PharmacyLogo';

const Home: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Notes Gallery',
      description: 'Access subject-wise organized notes with customizable units',
      link: '/notes',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'SNCOP-AI Chat',
      description: 'Ask questions and get instant AI-powered help with your studies',
      link: '/ai-chat',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Practice Tests',
      description: 'Practice with comprehensive test materials',
      link: '/practice-tests',
      gradient: 'from-violet-500 to-pink-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Education',
      description: 'Premium study materials for B.Pharm students',
      link: '/about',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '100+', label: 'Study Materials' },
    { number: '7', label: 'Subjects Covered' },
    { number: '24/7', label: 'Available Access' },
    { number: '100%', label: 'Free Resources' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="slide-up">
              <PharmacyLogo />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">SNCOP</span>
                <br />
                <span className="text-4xl md:text-6xl text-gray-800 dark:text-gray-200">
                  B.Pharm Notes
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your complete digital companion for B.Pharm studies at{' '}
                <span className="font-semibold text-gradient">Sainath College of Pharmacy</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/notes"
                className="inline-flex items-center px-8 py-4 rounded-xl button-primary text-lg hover-scale shadow-2xl shimmer-effect text-shadow"
              >
                <BookOpen className="mr-3 h-5 w-5" />
                Browse Notes
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/ai-chat"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover-scale shadow-2xl shimmer-effect"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Ask SNCOP-AI
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 fade-in-up" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-effect p-6 rounded-xl card-hover enhanced-shadow">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 neon-glow">{stat.number}</div>
                <div className="text-sm text-high-contrast opacity-80 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 neon-glow">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-high-contrast opacity-80 max-w-3xl mx-auto">
              Comprehensive study materials, practice tests, and resources designed specifically for B.Pharmacy students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group glass-effect p-8 rounded-2xl card-hover transition-all duration-300 slide-up enhanced-shadow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-high-contrast neon-glow">
                  {feature.title}
                </h3>
                <p className="text-high-contrast opacity-80 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-gradient group-hover:translate-x-1 transition-transform duration-300 neon-glow">
                  Explore now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl card-hover enhanced-shadow">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 neon-glow">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-high-contrast opacity-80 mb-8 max-w-2xl mx-auto">
              Join hundreds of B.Pharmacy students who are already using our platform to excel in their studies
            </p>
            <Link
              to="/notes"
              className="inline-flex items-center px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover-scale shadow-2xl shimmer-effect text-shadow"
            >
              <Download className="mr-3 h-5 w-5" />
              Access Notes Now
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
