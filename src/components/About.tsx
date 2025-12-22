import { GraduationCap } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>

        <div className="space-y-8">
          <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 text-white rounded-xl">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Master of Engineering Management (MEM)</h3>
                  <span className="text-slate-600 font-medium">Sep 2025 - Dec 2026</span>
                </div>
                <p className="text-lg text-slate-700 mb-3">Dartmouth College, Hanover, NH, USA</p>
                <p className="text-slate-600 leading-relaxed">
                  Coursework: Marketing, Technology Assessment, Statistics, Pricing Strategy, Optimisation Methods & Analytics, Operations Research
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 text-white rounded-xl">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Bachelor of Technology in Electronics and Communication Engineering</h3>
                  <span className="text-slate-600 font-medium">Jul 2019 - Apr 2023</span>
                </div>
                <p className="text-lg text-slate-700 mb-3">Vellore Institute of Technology, Vellore, India</p>
                <p className="text-slate-600 mb-2"><strong>GPA: 4.0</strong></p>
                <p className="text-slate-600 leading-relaxed">
                  Coursework: Artificial Intelligence, Data Structures and Algorithm, Consumer Behaviour, Cryptography, IOT System Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
