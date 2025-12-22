import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Software Developer',
    company: 'Oracle',
    location: 'Bangalore, India',
    period: 'Aug 2023 - Sep 2025',
    achievements: [
      'Spearheaded CI/CD pipeline design on Oracle Cloud Infrastructure (OCI), accelerating release cycles by 3x and saving 200+ engineering hours by automating build and deployment workflows',
      'Led a cross-team effort to build third-party plugins from source on OCI, improving development and deployment efficiency while enforcing security and enabling seamless integration across teams',
      'Drove cross-cloud containerization strategy by identifying deployment inefficiencies and pitching a scalable solution to leadership, accelerating experimentation and aligning with long-term cloud-native goals through early-stage PoC delivery',
      'Reduced manual effort by 97% by automating BlackDuck and Fortify security scans, strengthening compliance workflows',
      'Supported the sales team in developing a tailored upsell proposition for a high-value client, leading to a successful conversion',
    ],
  },
  {
    title: 'Software Development Intern',
    company: 'Oracle',
    location: 'Bangalore, India',
    period: 'Jan - Jul 2023',
    achievements: [
      'Reduced Fortify vulnerabilities to 60% by implementing AES-256 encryption in runtime scripts to eliminate unencrypted passwords',
      'Developed the Diameter Security Application test suite to automate validation, reducing manual effort and ensuring timely releases',
    ],
  },
  {
    title: 'Backend Development Intern',
    company: 'Housy - Lank Hospitality Private Limited',
    location: 'Pune, India',
    period: 'July - Sep 2021',
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
    achievements: [
      'Developed the Vorby mobile application using Flutter to connect mentors and high school students, implementing chat and video calling features with Firebase Firestore and Agora and created the admin page for application management',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-white rounded-xl flex-shrink-0">
                  <Briefcase size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    <span className="text-slate-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg text-slate-700 mb-4">
                    {exp.company} | {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-600 leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-slate-900 before:font-bold">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
