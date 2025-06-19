import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-semibold text-indigo-600 mb-6 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
      >
        I’m Karthik, a passionate Full Stack Developer and ML Engineer with experience building scalable web applications and intelligent systems.  
        Skilled in MERN stack, Machine Learning, and IoT, I thrive on turning complex ideas into clean, maintainable code.  
        When I’m not coding, I’m exploring AI innovations or playing with new technologies to stay ahead.
      </motion.p>
    </section>
  );
};

export default About;
