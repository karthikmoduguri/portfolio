import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QRSection from "./components/QRSection";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <QRSection />
    </div>
  );
}

export default App;
