import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import dartmouthLogo from '../assets/D-Pine_Black.jpg';
import vitLogo from '../assets/VIT.png';

function About() {
  const [expandedDartmouth, setExpandedDartmouth] = useState(false);
  const [expandedVIT, setExpandedVIT] = useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>

        <div className="space-y-8">
          <div 
            className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setExpandedDartmouth(!expandedDartmouth)}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl flex-shrink-0">
                <img src={dartmouthLogo} alt="Dartmouth College" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">Dartmouth College</h3>
                    <p className="text-lg text-slate-700 mt-1">Hanover, NH, USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-medium">Sep 2025 - Dec 2026</span>
                    {expandedDartmouth ? (
                      <ChevronUp className="text-slate-600" size={20} />
                    ) : (
                      <ChevronDown className="text-slate-600" size={20} />
                    )}
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-3 font-medium">Master of Engineering Management (MEM)</p>
                {expandedDartmouth && (
                  <div className="mb-3">
                    <p className="text-slate-700 leading-relaxed">
                      Through a collaborative program between the Tuck School of Business and Thayer School of Engineering, I am learning to translate technical skills into product and business decisions positioning myself to lead the development of user-centric products that deliver customer value while driving sustainable growth.
                    </p>
                  </div>
                )}
                <p className="text-slate-600 leading-relaxed">
                  Coursework: Marketing, Technology Assessment, Statistics, Pricing Strategy, Optimisation Methods & Analytics, Operations Research
                </p>
              </div>
            </div>
          </div>

          <div 
            className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setExpandedVIT(!expandedVIT)}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl flex-shrink-0">
                <img src={vitLogo} alt="VIT" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">Vellore Institute of Technology</h3>
                    <p className="text-lg text-slate-700 mt-1">Vellore, India</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-medium">Jul 2019 - Apr 2023</span>
                    {expandedVIT ? (
                      <ChevronUp className="text-slate-600" size={20} />
                    ) : (
                      <ChevronDown className="text-slate-600" size={20} />
                    )}
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-2 font-medium">Bachelor of Technology in Electronics and Communication Engineering</p>
                <p className="text-slate-600 mb-2"><strong>GPA: 4.0</strong></p>
                {expandedVIT && (
                  <div className="mb-3">
                    <p className="text-slate-700 leading-relaxed">
                      During my time at VIT, I developed a strong technical foundation across engineering and computer science, gaining hands-on experience engineering products through projects and hackathons.
                    </p>
                  </div>
                )}
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
