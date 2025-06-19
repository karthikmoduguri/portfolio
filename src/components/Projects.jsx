const projects = [
  {
    id: 1,
    name: "Smart Crop Advisor",
    description: "ML-powered crop recommendation system with IoT integration.",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
    link: "https://github.com/karthik/smart-crop-advisor",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Modern portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-10 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(({ id, name, description, tech, link }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 hover:shadow-indigo-500/50 transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {techItem}
                </span>
              ))}
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-semibold"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
