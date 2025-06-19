const skills = [
  "JavaScript", "React", "Node.js", "Express", "MongoDB",
  "Python", "Machine Learning", "TensorFlow", "IoT",
  "Tailwind CSS", "Git", "Docker"
];

const Skills = () => {
  return (
    <section id="skills" className="bg-indigo-50 dark:bg-gray-800 py-20 px-6">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-8 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white dark:bg-gray-900 shadow-md rounded-lg py-3 px-4 text-center font-medium text-indigo-700 dark:text-indigo-300 hover:scale-105 transition-transform cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
