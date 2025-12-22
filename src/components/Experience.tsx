import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Oracle',
    location: 'Bangalore, India',
    period: 'Jan 2023 - Sep 2025',
    description: 'As a software developer at Oracle, I worked in the Communications unit building Diameter Signaling Routing, a product designed to handle high-volume traffic and the inherent complexities of 4G network architecture.',
    achievements: [
      'Spearheaded CI/CD pipeline design on Oracle Cloud Infrastructure (OCI), accelerating release cycles by 3x and saving 200+ engineering hours by automating build and deployment workflows',
      'Led a cross-team effort to build third-party plugins from source on OCI, improving development and deployment efficiency while enforcing security and enabling seamless integration across teams',
      'Drove cross-cloud containerization strategy by identifying deployment inefficiencies and pitching a scalable solution to leadership, accelerating experimentation and aligning with long-term cloud-native goals through early-stage PoC delivery',
      'Reduced manual effort by 97% by automating BlackDuck and Fortify security scans, strengthening compliance workflows',
      'Supported the sales team in developing a tailored upsell proposition for a high-value client, leading to a successful conversion',
      'Reduced Fortify vulnerabilities to 60% by implementing AES-256 encryption in runtime scripts to eliminate unencrypted passwords',
      'Developed the Diameter Security Application test suite to automate validation, reducing manual effort and ensuring timely releases',
    ],
  },
  {
    title: 'Backend Development Intern',
    company: 'Housy - Lank Hospitality Private Limited',
    location: 'Pune, India',
    period: 'July - Sep 2021',
    description: 'Housy was a company providing niche pet services such as dog walking and grooming. As a Backend Developer, I helped launch the MVP mobile application by building a scalable backend infrastructure.',
    achievements: [
      'Developed and launched the backend for Housy\'s MVP using Node.js and Firebase, delivering real-time chat features and RESTful APIs that enabled a functional first version of the platform',
      'Increased adoption by 30% by implementing scalable infrastructure and integrating user analytics and push notifications',
      'Improved retention and usability by engaging early adopters, collecting feedback, and iterating on feature development',
    ],
  },
  {
    title: 'Flutter App Development Intern',
    company: 'Vorby',
    location: 'Vellore, India',
    period: 'May - Jun 2020',
    description: 'Vorby was a startup built to connect students with mentors in the industry and provide career guidance and as the Flutter Developer I helped launch the mobile app for this startup.',
    achievements: [
      'Using Flutter implemented the chat and video calling features with Firebase Firestore and Agora',
      'Created the admin page for application management',
    ],
  },
];

function Experience() {
  const [expandedOracle, setExpandedOracle] = useState(false);
  const [expandedHousy, setExpandedHousy] = useState(false);
  const [expandedVorby, setExpandedVorby] = useState(false);

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isOracle = exp.company === 'Oracle';
            const isHousy = exp.company === 'Housy - Lank Hospitality Private Limited';
            const isVorby = exp.company === 'Vorby';
            const isExpanded = isOracle ? expandedOracle : (isHousy ? expandedHousy : (isVorby ? expandedVorby : false));
            const handleClick = isOracle 
              ? () => setExpandedOracle(!expandedOracle)
              : isHousy 
              ? () => setExpandedHousy(!expandedHousy)
              : isVorby
              ? () => setExpandedVorby(!expandedVorby)
              : undefined;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${(isOracle || isHousy || isVorby) ? 'cursor-pointer' : ''}`}
                onClick={handleClick}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 text-white rounded-xl flex-shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                        <p className="text-lg text-slate-700 mt-1">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 font-medium">{exp.period}</span>
                        {(isOracle || isHousy || isVorby) && (
                          isExpanded ? (
                            <ChevronUp className="text-slate-600" size={20} />
                          ) : (
                            <ChevronDown className="text-slate-600" size={20} />
                          )
                        )}
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 mb-3 font-medium">{exp.title}</p>
                    {exp.description && (
                      <p className={`text-slate-700 leading-relaxed mb-3 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                        {exp.description}
                      </p>
                    )}
                    {isExpanded && exp.achievements && (
                      <div className="mt-3">
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-slate-600 leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-slate-900 before:font-bold">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
