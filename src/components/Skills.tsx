import { Brain, Code2, Cloud, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI',
    skills: ['RAG pipelines', 'VectorDBs', 'Embedding models', 'Langchain', 'LLM orchestration', 'MCP', 'AWS Bedrock', 'Cursor', 'Bolt.new'],
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    skills: ['DevOps', 'CI/CD', 'Python', 'C++', 'Javascript', 'Node.js', 'Flutter', 'RESTful APIs', 'Sockets', 'MongoDB', 'SQL', 'R Programming'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Orchestration',
    skills: ['OCI', 'AWS', 'GCP', 'Openstack', 'Docker', 'Kubernetes', 'CI/CD', 'Gitlab', 'Jenkins', 'Terraform'],
  },
  {
    icon: Lightbulb,
    title: 'Product Management',
    skills: ['Product discovery', 'Roadmap definition', 'User research', 'Metrics tracking', 'PRDs', 'Stakeholder alignment'],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-900 text-white rounded-xl">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
