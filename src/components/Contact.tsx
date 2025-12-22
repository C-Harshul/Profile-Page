import { Mail, Linkedin, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Get In Touch</h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          I'm always open to discussing product management, development work, or opportunities to collaborate.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href="mailto:harshulc2001@gmail.com"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail size={24} />
            <span className="font-medium">harshulc2001@gmail.com</span>
          </a>

          <a
            href="tel:+16033221424"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            <span className="font-medium">+1 (603) 322-1424</span>
          </a>
        </div>

        <a
          href="https://linkedin.com/in/Harshul-Chandrasekhar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <Linkedin size={20} />
          <span>Connect on LinkedIn</span>
        </a>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500">
            © 2025 Harshul Chandrashekhar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
