export default function App() {

  const projects = [
    {
      title: 'AI Sports Analyst System',
      desc: 'Built an AI-powered sports analytics platform for combat sports with real-time performance tracking athlete analysis match statistics and predictive insights using AI and data visualization.',
      tech: 'Python • Power BI • Machine Learning • Data Analytics'
    },

    {
      title: 'Criminal Investigation Tracker',
      desc: 'Developed a smart investigation system with suspect prediction and biometric scanning using Java JSP Servlets and MySQL.',
      tech: 'Java • JSP • Servlets • MySQL'
    },

    {
      title: 'Virtual Mouse',
      desc: 'Created a touch-free virtual mouse using computer vision and hand gesture recognition for intuitive interaction.',
      tech: 'Python • OpenCV • AI'
    },

    {
      title: 'Sports Application',
      desc: 'Trainer-client booking and management platform for combat sports trainers with scheduling and session tracking.',
      tech: 'Java • Web Development • Database'
    }
  ]

  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'React',
    'MySQL',
    'Power BI',
    'Machine Learning',
    'Cybersecurity',
    'HTML',
    'CSS',
    'Data Analytics',
    'Web Development'
  ]

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%)]"></div>

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-3xl font-black tracking-widest text-cyan-400">
            AMAN
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-[3px] text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[4px] text-cyan-400 mb-6 text-sm md:text-base leading-8 max-w-3xl">

              AI Developer • Data Analyst • Web Developer <br />

              Software Developer • Sports Analyst • Boxer

            </p>

            <h1 className="text-5xl md:text-8xl font-black leading-tight">

              AMAN <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">

                YADAV

              </span>

            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">

              M.Sc IT student passionate about AI ML cybersecurity software development and data analytics. National level boxing medalist building intelligent systems sports analytics dashboards and impactful digital experiences.

            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition duration-300">

                View Projects

              </button>

              <button className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">

                Download Resume

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative flex justify-center">

            <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl shadow-cyan-500/20 hover:scale-105 transition duration-500">

              <img
  src="/Aman .jpeg"
  alt="profile"
  className="w-[350px] md:w-[420px] h-[450px] md:h-[520px] object-cover rounded-[30px]"
/>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="mb-14">

            <p className="text-cyan-400 tracking-[4px] uppercase mb-3">

              About Me

            </p>

            <h2 className="text-5xl font-black">

              Who Am I

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-5xl font-black text-cyan-400">

                01

              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">

                Passionate about AI ML cybersecurity and full stack development with strong problem solving skills.

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-5xl font-black text-cyan-400">

                02

              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">

                National level boxing athlete bringing discipline leadership and consistency into technology.

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-5xl font-black text-cyan-400">

                03

              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">

                Focused on building innovative sports analytics and AI powered systems for real world impact.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="py-28 px-6 bg-white/[0.03]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <p className="text-cyan-400 tracking-[4px] uppercase mb-3">

              Portfolio

            </p>

            <h2 className="text-5xl font-black">

              Featured Projects

            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="group bg-black/40 border border-white/10 rounded-[32px] p-8 hover:border-cyan-400 transition duration-500 hover:-translate-y-2"
              >

                <div className="flex justify-between items-start gap-4">

                  <h3 className="text-3xl font-black group-hover:text-cyan-400 transition">

                    {project.title}

                  </h3>

                  <span className="text-5xl font-black text-white/10">

                    0{index + 1}

                  </span>

                </div>

                <p className="text-gray-300 mt-6 leading-relaxed text-lg">

                  {project.desc}

                </p>

                <div className="mt-6 inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">

                  {project.tech}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" className="py-28 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-cyan-400 tracking-[4px] uppercase mb-3">

            Skills

          </p>

          <h2 className="text-5xl font-black mb-14">

            Tech Stack

          </h2>

          <div className="flex flex-wrap justify-center gap-5">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-lg font-semibold hover:bg-cyan-500 hover:text-black hover:scale-110 transition duration-300"
              >

                {skill}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-28 px-6">

        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-[40px] p-14 backdrop-blur-xl">

          <p className="text-cyan-400 tracking-[4px] uppercase mb-3">

            Contact

          </p>

          <h2 className="text-5xl font-black mb-6">

            Lets Build Something Amazing

          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">

            Open for internships collaborations freelance projects and AI development opportunities.

          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-lg">

            <div className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10">

              📧 amn12yadav1234@gmail.com

            </div>

            <div className="px-6 py-4 rounded-2xl bg-black/40 border border-white/10">

              📍 Mumbai India

            </div>

          </div>

        </div>

      </section>

    </div>

  )
}