import { useState } from "react";
import vincentPhoto from "./assets/vincent_silver_grey.webp";
import {
  ArrowUpRight,
  Code2,
  Terminal,
  Cpu,
  Menu,
  X,
} from "lucide-react";


function DeveloperTerminal() {
  const [command, setCommand] = useState("");

  const [history, setHistory] = useState([
    {
      type: "output",
      text: "Welcome to LOTELEI.EXE terminal.",
    },
    {
      type: "output",
      text: 'Type "help" to see available commands.',
    },
  ]);

  const commands = {
    help: "Available commands: help, whoami, about, skills, projects, clear",

    whoami: "Vincent Lotelei — Software Engineer and AI enthusiast.",

    about: "Computer Science and IT graduate passionate about building practical digital solutions.",

    skills: "React, JavaScript, Python, Django, PHP, MySQL, HTML and CSS.",

    projects: "Turkana Connect — A digital opportunities platform for Turkana County.",
  };

  function handleCommand(event) {
    if (event.key !== "Enter") return;

    const enteredCommand = command.trim().toLowerCase();

    if (!enteredCommand) return;

    if (enteredCommand === "clear") {
      setHistory([]);
    } else {
      const response =
        commands[enteredCommand] ||
        `Command not found: ${enteredCommand}. Type "help".`;

      setHistory((previousHistory) => [
        ...previousHistory,
        { type: "command", text: command },
        { type: "output", text: response },
      ]);
    }

    setCommand("");
  }

  return (
    <section className="py-20 px-6" id="terminal">
      <div className="max-w-4xl mx-auto">

        <div className="mb-6">
          <p className="text-lime-400 text-sm font-mono">
            INTERACTIVE EXPERIENCE
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Explore my terminal<span className="text-lime-400">.</span>
          </h2>

          <p className="text-gray-400 mt-2">
            A little command-line experience. Try typing help.
          </p>
        </div>

        <div className="bg-[#0d110e] border border-lime-400/20 rounded-xl overflow-hidden shadow-2xl">

          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>

            <span className="text-gray-400 text-xs font-mono ml-3">
              lotelei@exe:~
            </span>
          </div>

          <div className="p-5 font-mono text-sm min-h-[16rem]">

            {history.map((line, index) => (
              <p
                key={index}
                className={
                  line.type === "command"
                    ? "text-white mt-3"
                    : "text-lime-400 mt-2"
                }
              >
                {line.type === "command" ? "$ " : ""}
                {line.text}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-4">
              <span className="text-lime-400 whitespace-nowrap">
                visitor@lotelei-exe:~$
              </span>

              <input
                type="text"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type a command..."
                aria-label="Terminal command"
                className="bg-transparent outline-none text-white flex-1 min-w-[10rem] placeholder:text-gray-600"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-white/10">

        <a href="#" className="text-2xl font-black tracking-widest">
          LOTELEI<span className="text-lime-400">.EXE</span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">
          <a href="#about" className="hover:text-lime-400">About</a>
          <a href="#skills" className="hover:text-lime-400">Skills</a>
          <a href="#projects" className="hover:text-lime-400">Projects</a>
          <a href="#contact" className="hover:text-lime-400">Contact</a>
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 border border-lime-400/50 px-5 py-3 rounded-full text-sm hover:bg-lime-400 hover:text-black transition"
        >
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-lime-400"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0d110e] border-b border-white/10 px-6 py-6 flex flex-col gap-6">

          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-lime-400 transition"
            >
              {label}
            </a>
          ))}

        </div>
      )}


      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-16 py-24 md:py-32">

        {/* Background glow */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="hero-reveal">

            <div className="inline-flex items-center gap-3 border border-lime-400/20 bg-lime-400/5 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
              <span className="text-lime-400 text-xs tracking-widest font-mono">
                SYSTEM ONLINE · OPEN TO OPPORTUNITIES
              </span>
            </div>

            <p className="text-gray-400 text-lg mb-4">
              Hello, I'm <span className="text-white font-semibold">Vincent Lotelei.</span>
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Building ideas
              <br />
              into <span className="text-lime-400">intelligent</span>
              <br />
              digital experiences<span className="text-lime-400">.</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mt-8 leading-relaxed">
              Software engineer and AI enthusiast focused on developing
              modern applications, solving real-world problems and
              turning ambitious ideas into practical technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="bg-lime-400 text-black px-7 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-lime-300 hover:scale-105 transition duration-300"
              >
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-7 py-4 rounded-full font-semibold hover:border-lime-400 hover:text-lime-400 transition duration-300"
              >
                Contact Me
              </a>

            </div>

            <div className="flex flex-wrap gap-8 mt-14 text-sm text-gray-500">
              <span>01. Software Engineering</span>
              <span>02. Artificial Intelligence</span>
              <span>03. Web Development</span>
            </div>

          </div>

          {/* RIGHT SIDE - DEVELOPER VISUAL */}
          <div className="hero-reveal hero-delay-2">

            <div className="relative max-w-lg mx-auto">

              <div className="absolute inset-0 bg-lime-400/10 blur-3xl rounded-full"></div>

              <div className="relative bg-[#0d110e] border border-lime-400/20 rounded-2xl overflow-hidden shadow-2xl float-slow">

                {/* Window header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>

                  <span className="text-gray-500 text-xs font-mono">
                    developer.js
                  </span>

                  <Terminal size={16} className="text-lime-400" />

                </div>

                {/* Code display */}
                <div className="p-6 md:p-8 font-mono text-sm leading-8">

                  <p className="text-gray-500">// Meet the developer</p>

                  <p className="mt-4">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-lime-400">developer</span> = {"{"}
                  </p>

                  <div className="pl-6">

                    <p>
                      <span className="text-sky-300">name</span>:{" "}
                      <span className="text-yellow-300">"Vincent Lotelei"</span>,
                    </p>

                    <p>
                      <span className="text-sky-300">role</span>:{" "}
                      <span className="text-yellow-300">"Software Engineer"</span>,
                    </p>

                    <p>
                      <span className="text-sky-300">focus</span>: [
                    </p>

                    <div className="pl-5 text-yellow-300">
                      "Web Development",
                      <br />
                      "Artificial Intelligence",
                      <br />
                      "Problem Solving"
                    </div>

                    <p className="text-white">],</p>

                    <p>
                      <span className="text-sky-300">mindset</span>:{" "}
                      <span className="text-yellow-300">"Always learning"</span>
                    </p>

                  </div>

                  <p>{"};"}</p>

                  <div className="border-t border-white/10 mt-8 pt-5 flex items-center justify-between">

                    <span className="text-gray-500 text-xs">
                      STATUS
                    </span>

                    <span className="text-lime-400 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                      READY TO BUILD
                    </span>

                  </div>

                </div>

              </div>

              {/* Floating label */}
              <div className="absolute -bottom-6 -left-5 md:-left-10 bg-[#151a15] border border-lime-400/20 rounded-xl px-5 py-4 shadow-xl">
                <p className="text-lime-400 text-xs font-mono">
                  CURRENTLY EXPLORING
                </p>
                <p className="text-white font-bold mt-1">
                  AI & Software Engineering
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* TECHNOLOGY CARDS */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-32">

          <div className="border border-white/10 bg-white/[0.03] p-7 rounded-2xl hover:border-lime-400/40 transition duration-300">
            <Code2 className="text-lime-400 mb-5" size={30} />
            <h3 className="font-bold text-xl">Software Engineering</h3>
            <p className="text-gray-500 mt-3 text-sm">
              Designing and developing modern web applications.
            </p>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-7 rounded-2xl hover:border-lime-400/40 transition duration-300">
            <Cpu className="text-lime-400 mb-5" size={30} />
            <h3 className="font-bold text-xl">Artificial Intelligence</h3>
            <p className="text-gray-500 mt-3 text-sm">
              Exploring intelligent systems and AI-powered solutions.
            </p>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-7 rounded-2xl hover:border-lime-400/40 transition duration-300">
            <Terminal className="text-lime-400 mb-5" size={30} />
            <h3 className="font-bold text-xl">Problem Solving</h3>
            <p className="text-gray-500 mt-3 text-sm">
              Turning ideas into useful digital products.
            </p>
          </div>

        </div>

      </section>

      <DeveloperTerminal />

      {/* ABOUT */}
      <section
        id="about"
        className="px-6 md:px-16 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-lime-400 uppercase tracking-widest text-xs mb-5">
            01 / About Me
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* PORTRAIT */}
            <div className="relative flex justify-center items-end">
              <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-lime-400/10 blur-3xl rounded-full"></div>

              <div className="relative w-full max-w-md border border-lime-400/30 rounded-2xl overflow-hidden bg-gradient-to-b from-[#151b15] to-[#080808]">
                <img
                  src={vincentPhoto}
                  alt="Portrait of Vincent Lotelei"
                  className="w-full h-auto object-contain"
                />

                <div className="absolute bottom-4 left-4">
  <p className="text-lime-400 text-xs font-mono font-bold tracking-widest drop-shadow-lg">
    SYSTEM USER
  </p>
  <p className="text-white font-bold text-lg tracking-wide drop-shadow-lg">
    LOTELEI.EXE
  </p>
</div>
              </div>
            </div>

            {/* ABOUT TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Hello, I'm Lotelei
                <span className="block text-lime-400 mt-2">
                  Developer & Problem Solver.
                </span>
              </h2>

              <p className="text-gray-400 mt-8 leading-relaxed">
                I am a Computer Science and IT graduate from The East African
                University, passionate about software engineering, web
                development and emerging technologies.
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                I enjoy transforming ideas into practical digital solutions
                using modern technologies. My interests include building
                web applications, developing backend systems and exploring
                artificial intelligence.
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                I believe in continuous learning, solving real-world problems
                and using technology to create meaningful impact.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="border-l-2 border-lime-400 pl-4">
                  <p className="text-white font-bold text-xl">
                    BSc / CS & IT
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Second Class Upper
                  </p>
                </div>

                <div className="border-l-2 border-lime-400 pl-4">
                  <p className="text-white font-bold text-xl">
                    2024
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Graduate
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section
        id="skills"
        className="px-6 md:px-16 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-lime-400 uppercase tracking-widest text-xs mb-5">
            02 / Technical Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            My engineering <span className="text-gray-500">toolkit.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mt-6 leading-relaxed">
            Technologies and tools I use to design, develop and build
            practical software solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

            {/* FRONTEND */}
            <div className="group border border-white/10 bg-white/[0.02] rounded-2xl p-8 hover:border-lime-400/40 transition duration-300">

              <div className="flex justify-between items-center mb-7">
                <Code2 size={30} className="text-lime-400" />
                <span className="text-gray-600 text-xs font-mono">01</span>
              </div>

              <h3 className="text-2xl font-bold">Frontend Development</h3>

              <p className="text-gray-500 text-sm mt-3">
                Building responsive and interactive user interfaces.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Vite"].map(skill => (
                  <span key={skill} className="border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 group-hover:border-lime-400/30 transition">
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* BACKEND */}
            <div className="group border border-white/10 bg-white/[0.02] rounded-2xl p-8 hover:border-lime-400/40 transition duration-300">

              <div className="flex justify-between items-center mb-7">
                <Terminal size={30} className="text-lime-400" />
                <span className="text-gray-600 text-xs font-mono">02</span>
              </div>

              <h3 className="text-2xl font-bold">Backend Development</h3>

              <p className="text-gray-500 text-sm mt-3">
                Developing application logic, APIs and server-side systems.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                {["Python", "Django", "PHP", "REST APIs"].map(skill => (
                  <span key={skill} className="border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 group-hover:border-lime-400/30 transition">
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* DATABASE AND TOOLS */}
            <div className="group border border-white/10 bg-white/[0.02] rounded-2xl p-8 hover:border-lime-400/40 transition duration-300">

              <div className="flex justify-between items-center mb-7">
                <Cpu size={30} className="text-lime-400" />
                <span className="text-gray-600 text-xs font-mono">03</span>
              </div>

              <h3 className="text-2xl font-bold">Databases & Tools</h3>

              <p className="text-gray-500 text-sm mt-3">
                Managing data and working with modern development tools.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                {["MySQL", "SQLite", "Git", "GitHub", "VS Code", "npm"].map(skill => (
                  <span key={skill} className="border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 group-hover:border-lime-400/30 transition">
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* AI AND EMERGING TECHNOLOGY */}
            <div className="group border border-white/10 bg-white/[0.02] rounded-2xl p-8 hover:border-lime-400/40 transition duration-300">

              <div className="flex justify-between items-center mb-7">
                <Cpu size={30} className="text-lime-400" />
                <span className="text-gray-600 text-xs font-mono">04</span>
              </div>

              <h3 className="text-2xl font-bold">AI & Emerging Technology</h3>

              <p className="text-gray-500 text-sm mt-3">
                Exploring intelligent applications and AI-powered solutions.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                {["Artificial Intelligence", "Prompt Engineering", "AI Integration", "Python for AI"].map(skill => (
                  <span key={skill} className="border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 group-hover:border-lime-400/30 transition">
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>

          <div className="mt-12 border-l-2 border-lime-400 pl-5">
            <p className="text-white font-semibold">
              Always learning. Always building.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Continuously expanding my engineering knowledge through
              practical projects and experimentation.
            </p>
          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 md:px-16 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-lime-400 uppercase tracking-widest text-xs mb-5">
            03 / Selected Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold">
                Projects that matter.
              </h2>

              <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
                A selection of projects where I turn ideas into practical
                digital solutions through software engineering.
              </p>
            </div>

            <span className="text-gray-500 text-sm font-mono">
              01 FEATURED PROJECT
            </span>
          </div>

          {/* TURKANA CONNECT */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 border border-white/10 rounded-3xl overflow-hidden bg-[#0d110e]">

            {/* PROJECT INFORMATION */}
            <div className="p-8 md:p-12">

              <div className="flex items-center justify-between gap-3 mb-10">
                <span className="text-lime-400 text-xs font-mono tracking-widest">
                  WEB APPLICATION / 001
                </span>

                <span className="text-xs border border-yellow-400/30 text-yellow-400 rounded-full px-3 py-2">
                  In Development
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black">
                Turkana <span className="text-lime-400">Connect.</span>
              </h3>

              <p className="text-gray-400 mt-6 leading-8">
                A digital opportunities platform designed to connect
                people in Turkana County with jobs, internships,
                attachments and bursaries.
              </p>

              <div className="mt-10">
                <h4 className="text-white font-bold mb-4">
                  The objective
                </h4>

                <p className="text-gray-500 text-sm leading-7">
                  Make opportunity discovery and applications easier
                  through one accessible digital platform focused
                  exclusively on Turkana County.
                </p>
              </div>

              <div className="mt-10">
                <h4 className="text-white font-bold mb-4">
                  Core features
                </h4>

                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>↗ User registration and authentication</li>
                  <li>↗ Opportunity discovery and filtering</li>
                  <li>↗ Online opportunity applications</li>
                  <li>↗ Application status tracking</li>
                </ul>
              </div>

              <div className="mt-10">
                <h4 className="text-white font-bold mb-4">
                  Technology stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {["React", "Vite", "Django", "SQLite", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 rounded-full px-4 py-2 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* PROJECT VISUAL */}
            <div className="relative bg-[#111811] border-t lg:border-t-0 lg:border-l border-white/10 p-6 md:p-10 flex items-center">

              <div className="w-full">

                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <span className="font-bold tracking-wide">
                    TURKANA<span className="text-lime-400"> CONNECT</span>
                  </span>

                  <span className="text-lime-400 text-xs font-mono">
                    PLATFORM PREVIEW
                  </span>
                </div>

                <div className="bg-[#080b09] border border-white/10 rounded-xl p-5 mb-5">
                  <p className="text-gray-500 text-xs mb-3">
                    DISCOVER OPPORTUNITIES
                  </p>

                  <h4 className="text-2xl font-bold">
                    Find your next opportunity.
                  </h4>

                  <p className="text-gray-500 text-sm mt-2">
                    Explore opportunities across Turkana County.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6">

                    <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                      <p className="text-lime-400 text-xs">01</p>
                      <p className="font-semibold mt-2">Jobs</p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                      <p className="text-lime-400 text-xs">02</p>
                      <p className="font-semibold mt-2">Internships</p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                      <p className="text-lime-400 text-xs">03</p>
                      <p className="font-semibold mt-2">Bursaries</p>
                    </div>

                    <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
                      <p className="text-lime-400 text-xs">04</p>
                      <p className="font-semibold mt-2">Attachments</p>
                    </div>

                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>BUILT WITH REACT + DJANGO</span>
                  <span className="text-lime-400">● ACTIVE DEVELOPMENT</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 md:px-16 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-lime-400 uppercase tracking-widest text-xs mb-5">
            04 / Get In Touch
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Have a project?
                <span className="block text-lime-400">
                  Let's talk.
                </span>
              </h2>

              <p className="text-gray-400 mt-8 max-w-lg leading-relaxed">
                I'm interested in software engineering opportunities,
                collaborations and building meaningful digital solutions.
                If you have an idea or opportunity, I'd love to hear from you.
              </p>

              <a
                href="mailto:vincentlotelei@gmail.com"
                className="inline-flex items-center gap-3 mt-10 bg-lime-400 text-black px-7 py-4 rounded-lg font-semibold hover:bg-lime-300 transition"
              >
                Send me an email
                <ArrowUpRight size={20} />
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center gap-5">

              <a
                href="mailto:vincentlotelei@gmail.com"
                className="group flex items-center justify-between border border-white/10 bg-white/[0.02] rounded-xl p-6 hover:border-lime-400/50 transition"
              >
                <div>
                  <p className="text-gray-500 text-sm mb-2">Email</p>
                  <p className="text-white font-medium">
                    vincentlotelei@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </a>

              {/* TODO: replace with your real GitHub profile URL, e.g. https://github.com/your-username */}
              <a
                href="https://github.com/GWIJI71/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-white/10 bg-white/[0.02] rounded-xl p-6 hover:border-lime-400/50 transition"
              >
                <div>
                  <p className="text-gray-500 text-sm mb-2">GitHub</p>
                  <p className="text-white font-medium">
                    Explore my repositories
                  </p>
                </div>
                <ArrowUpRight className="text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </a>

              {/* TODO: replace with your real LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-username */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-white/10 bg-white/[0.02] rounded-xl p-6 hover:border-lime-400/50 transition"
              >
                <div>
                  <p className="text-gray-500 text-sm mb-2">LinkedIn</p>
                  <p className="text-white font-medium">
                    Connect professionally
                  </p>
                </div>
                <ArrowUpRight className="text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <footer className="px-6 md:px-16 py-8 border-t border-white/10 text-gray-600 text-sm flex flex-wrap justify-between gap-4">
        <p>© 2026 LOTELEI.EXE</p>
        <p>Designed & Built with React.</p>
      </footer>

    </main>
  );
}

export default App;