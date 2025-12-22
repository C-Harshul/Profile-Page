import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <img
            src={`${import.meta.env.BASE_URL}c7bc760d-bf47-4efe-ae91-80c587c3ee1e.jpg`}
            alt="Harshul Chandrashekhar"
            className="w-48 h-48 rounded-full object-cover shadow-2xl mx-auto border-4 border-white"
          />
        </div>

        <h1 className="text-6xl font-bold text-slate-900 mb-4 animate-fade-in">
          Harshul Chandrashekhar
        </h1>

        <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="http://98.85.81.4:8080/"
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
