import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Numina',
    role: 'Product Manager',
    period: 'May 2025 - Present',
    link: 'https://strong-cactus-eb4d2d.netlify.app',
    description: [
      'Identified accounting workflow inefficiencies through interviews with CPAs and SMBs to define AI-driven product requirements',
      'Improved general ledger accuracy by 80% by automating reconciliation of multi-sourced transactions in QuickBooks using agentic AI',
      'Reduced anomalous ledger entries by 20% using AI to convert CPA-defined plaintext rules into iterable checks',
      'Developing RAG use cases for enterprise knowledge retrieval via chat-based accounting regulatory assistance',
    ],
  },
  {
    title: 'Alarm.com BAS Assessment',
    role: 'Technical and Product Consultant',
    period: 'Sep 2025 - Nov 2025',
    description: [
      'Analyzed BAS protocols and deployment architectures (edge, cloud, hybrid) to determine the optimal technical approach for Alarm.com\'s commercial expansion',
      'Synthesized regulatory, modernization, and energy-efficiency trends into prioritized opportunities and a structured roadmap defining milestones and partner integration phases',
    ],
  },
  {
    title: 'Chidori',
    role: 'Backend and Hardware Development',
    period: 'Apr - May 2021',
    link: 'https://nimble-dieffenbachia-d945ce.netlify.app/',
    description: [
      'Improved emergency response by designing a gesture-based wearable and Flutter app for seniors, delivering contextual medical alerts',
      'Increased usability by 30% through a customer-first design process and user feedback, leading to a patent submission',
    ],
  },
  {
    title: 'Driveguard',
    role: 'Backend Development',
    period: 'Dec 2020',
    description: [
      'Delivered an accident alerting system for Elektrobit, improving emergency response time leveraging accelerometer data and blood detection via computer vision',
      'Reduced false positives by 40% conducting user testing, leading to a more reliable alert system with integrated push/email notifications',
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Code size={24} className="text-slate-900" />
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <p className="text-slate-700 font-medium mb-2">{project.role}</p>
              <p className="text-slate-600 text-sm mb-4">{project.period}</p>

              <ul className="space-y-2">
                {project.description.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
