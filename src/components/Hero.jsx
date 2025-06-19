import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0a192f] via-[#112240] to-[#1c2b3a] px-6 overflow-hidden">
      
      {/* Background floating circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#64ffda33] rounded-full filter blur-3xl animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64ffda22] rounded-full filter blur-2xl animate-spin-slow mix-blend-screen"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl flex flex-col md:flex-row items-center gap-12 z-10"
      >
        {/* Profile pic with hover scale */}
        <motion.img
          src={profile}
          alt="Karthik M"
          className="w-48 h-48 rounded-full border-4 border-[#64ffda] shadow-[0_0_50px_#64ffdaaa]"
          whileHover={{ scale: 1.1, boxShadow: "0 0 80px #64ffdacc" }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-5xl font-extrabold text-[var(--accent)] drop-shadow-lg"
          >
            Hey, I’m Karthik!
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              2000,
              "ML Engineer 🤖",
              2000,
              "IoT Innovator 🌐",
              2000,
              "Problem Solver 🚀",
              2000,
            ]}
            speed={50}
            wrapper="h2"
            repeat={Infinity}
            className="mt-4 text-3xl font-mono text-[#64ffda] drop-shadow-md"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 max-w-lg text-gray-300"
          >
            Turning bold ideas into blazing-fast, scalable real-world apps with a blend of creativity and code.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            className="inline-block mt-8 px-8 py-3 rounded-full bg-orange-500 text-white font-bold uppercase tracking-wider shadow-lg hover:bg-orange-600 transition"

          >
            Check My WORK
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
