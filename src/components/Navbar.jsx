const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a192f] border-b border-[#233554]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-accent text-xl font-mono">Karthik()</h1>
        <ul className="flex gap-6 font-mono text-sm text-subText">
          <li><a href="#about" className="hover:text-accent">01. About</a></li>
          <li><a href="#skills" className="hover:text-accent">02. Skills</a></li>
          <li><a href="#projects" className="hover:text-accent">03. Projects</a></li>
          <li><a href="#contact" className="hover:text-accent">04. Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
