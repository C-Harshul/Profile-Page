import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <img
            src={profileImage}
            alt="Harshul Chandrashekhar"
            className="w-48 h-48 rounded-full object-cover shadow-2xl mx-auto border-4 border-white"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 animate-fade-in">
          Harshul Chandrashekhar
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Product Builder with strong cloud and AI-infrastructure background, focused on AI adoption and workflow automation
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap items-center">
          <a
            href="https://linkedin.com/in/Harshul-Chandrasekhar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:harshulc2001@gmail.com"
            className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/C-Harshul"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="http://app.harshulc.com/chat.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Chat with Me
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <span>Learn more</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
