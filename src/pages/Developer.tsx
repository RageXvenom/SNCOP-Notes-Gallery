import React from 'react';
import { ExternalLink, Code, Laptop, Heart, User, Award } from 'lucide-react';

const Developer: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Soft animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 pharmacy-gradient opacity-15" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full soft-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center mb-6 wave-animation">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-600 text-white soft-glow enhanced-shadow">
              <Code className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 typewriter neon-glow">
            About Developer
          </h1>
          <p className="text-xl text-high-contrast opacity-80 leading-relaxed fade-in-up" style={{ animationDelay: '3s' }}>
            Meet the mind behind this educational platform
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12 relative z-10">
          {/* Developer Info */}
          <section className="glass-effect p-8 rounded-2xl card-hover slide-up soft-glow enhanced-shadow">
            <div className="flex items-center mb-6 wave-animation">
              <User className="h-8 w-8 text-blue-500 mr-3 soft-particles" />
              <h2 className="text-2xl font-bold text-gradient neon-glow">
                Website Developed By
              </h2>
            </div>
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-blue-400 card-hover soft-glow enhanced-shadow">
                <img
                  src="https://i.ibb.co/hyCn4h7/Arvind.jpg"
                  alt="Arvind Babu Nag"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2 wave-animation neon-glow">
                Arvind Babu Nag
              </h3>
              <p className="text-lg text-high-contrast opacity-80 mb-4 fade-in-up font-semibold" style={{ animationDelay: '0.5s' }}>
                Full Stack Developer & B.Pharm Student
              </p>
            </div>
            <p className="text-high-contrast opacity-90 leading-relaxed fade-in-up" style={{ animationDelay: '0.7s' }}>
              This website is proudly developed and maintained by <strong>Arvind Babu Nag</strong>, 
              a Pharmaceutical and Computer Science student, currently pursuing his Bachelor in Pharmacy (B.Pharm) at 
              Sainath College of Pharmacy, Hinduari, Sonbhadra (U.P.).
            </p>
          </section>

          {/* Skills */}
          <section className="glass-effect p-8 rounded-2xl card-hover slide-up soft-glow enhanced-shadow" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6 wave-animation">
              <Laptop className="h-8 w-8 text-blue-500 mr-3 soft-particles" />
              <h2 className="text-2xl font-bold text-gradient neon-glow">
                Technical Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="space-y-2 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h4 className="font-bold text-gradient neon-glow">Frontend Development</h4>
                <Skill name="React.js" color="from-blue-500 to-purple-600" percentage={95} />
                <Skill name="TypeScript" color="from-green-500 to-teal-600" percentage={90} />
                <Skill name="Tailwind CSS" color="from-purple-500 to-pink-600" percentage={92} />
              </div>

              {/* Other */}
              <div className="space-y-2 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-bold text-gradient neon-glow">Other Skills</h4>
                <Skill name="Java" color="from-red-500 to-orange-600" percentage={88} />
                <Skill name="Node.js" color="from-green-600 to-lime-500" percentage={85} />
                <Skill name="UI/UX Design" color="from-orange-500 to-red-600" percentage={90} />
                <Skill name="Ethical Hacking" color="from-gray-800 to-gray-500" percentage={75} />
                <Skill name="Pharmaceutical Knowledge" color="from-green-500 to-teal-600" percentage={30} />
                <Skill name="Problem Solving" color="from-blue-500 to-purple-600" percentage={93} />
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="glass-effect p-8 rounded-2xl card-hover slide-up soft-glow enhanced-shadow" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6 wave-animation">
              <Award className="h-8 w-8 text-teal-500 mr-3 soft-particles" />
              <h2 className="text-2xl font-bold text-gradient neon-glow">
                Mission & Vision
              </h2>
            </div>
            <p className="text-lg text-high-contrast opacity-90 leading-relaxed mb-4 text-center fade-in-up font-semibold" style={{ animationDelay: '0.5s' }}>
              "Bridging the gap between technology and pharmaceutical education to create 
              accessible, innovative learning solutions for students worldwide."
            </p>
            <div className="flex justify-center items-center gap-2 text-high-contrast opacity-80 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span>Developed with</span>
              <Heart className="h-5 w-5 text-red-500 pulse-animation" fill="currentColor" />
              <span>for the SNCOP community</span>
            </div>
          </section>

          {/* Contact */}
          <section className="glass-effect p-8 rounded-2xl text-center card-hover slide-up soft-glow enhanced-shadow" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center items-center mb-6 wave-animation">
              <ExternalLink className="h-8 w-8 text-blue-500 mr-3 soft-particles" />
              <h2 className="text-2xl font-bold text-gradient neon-glow">
                Connect With Developer
              </h2>
            </div>
            <p className="text-high-contrast opacity-90 mb-6 fade-in-up" style={{ animationDelay: '0.7s' }}>
              Want to learn more about the developer or discuss collaborations? 
              Visit the portfolio below.
            </p>
            <a
              href="https://arvindnag.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-teal-600 text-white hover-scale shadow-2xl soft-glow shimmer-effect text-shadow"
            >
              <ExternalLink className="mr-3 h-5 w-5" />
              Visit Portfolio
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

// ✅ Reusable Skill Component
const Skill = ({ name, color, percentage }: { name: string; color: string; percentage: number }) => (
  <div className="flex justify-between items-center mb-3 card-hover">
    <span className="text-sm text-high-contrast opacity-80 font-bold">{name}</span>
    <div className="flex items-center space-x-2">
      <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden enhanced-shadow">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out soft-glow`}
          style={{ 
            width: `${percentage}%`,
            animation: 'slideIn 2s ease-out'
          }}
        />
      </div>
      <span className="text-xs text-high-contrast opacity-70 font-bold">{percentage}%</span>
    </div>
  </div>
);

export default Developer;