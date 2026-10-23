import { useState } from 'react'

const skills = [
  { icon: '</>', name: 'HTML & CSS', type: 'Web fundamentals' },
  { icon: 'JS', name: 'JavaScript', type: 'Programming' },
  { icon: '⚛', name: 'React', type: 'Frontend' },
  { icon: '⌘', name: 'Git & GitHub', type: 'Version control' },
  { icon: 'C', name: 'C / C++', type: 'Programming' },
  { icon: '▤', name: 'Problem solving', type: 'Core skill' },
]

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    category: 'WEB DEVELOPMENT',
    description: 'A responsive personal website to introduce myself, highlight my skills, and showcase selected projects.',
    tags: ['React', 'Vite', 'CSS'],
    link: '',
  },
  {
    number: '02',
    title: 'Student Project',
    category: 'ACADEMIC PROJECT',
    description: 'Replace this card with a real school project. Describe the problem, what you built, and the tools you used.',
    tags: ['Add technology', 'Add language'],
    link: '',
  },
  {
    number: '03',
    title: 'Hardware / Embedded Project',
    category: 'COMPUTER ENGINEERING',
    description: 'Add an electronics, microcontroller, or hardware project here when you are ready to feature one.',
    tags: ['Add hardware', 'Add tools'],
    link: '',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const githubUrl = 'https://github.com/Ursua_JakeAllen'

  const copyGithub = async () => {
    try {
      await navigator.clipboard.writeText(githubUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.open(githubUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Jake Ursua home">
          <span className="brand-mark">J<span>.</span></span>
          <span className="brand-name">JAKE URSUA<span className="brand-dot">/</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              COMPUTER ENGINEERING STUDENT
            </div>

            <h1>
              Hello, I'm Jake<br />
              <span className="gradient-text">Allen C. Ursua.</span>
            </h1>

            <h2>Future Computer Engineer</h2>

            <p className="hero-intro">
              A Computer Engineering student passionate about
              web development, networking, and electronics.
              Adaptable, eager to learn, and focused on building
              practical tech solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <Arrow />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <Arrow diagonal />
              </a>
            </div>

            <div className="hero-meta">
    <span>
      <span className="meta-icon">⌁</span>
      Curious by nature
    </span>
              <span>
      <span className="meta-icon">⌘</span>
      Learning by building
    </span>
            </div>
          </div>





          <div className="hero-visual" aria-label="Decorative code card">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span className="mono">jake.js</span>
                <span className="card-top-icon">⌘</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="line-number">01</span><span className="code-purple">const</span>&nbsp; <span className="code-blue">developer</span> = {'{'}</div>
                <div className="code-line indent"><span className="code-cyan">name</span>: <span className="code-green">'Jake Ursua'</span>,</div>
                <div className="code-line indent"><span className="code-cyan">field</span>: <span className="code-green">'Computer Engineering'</span>,</div>
                <div className="code-line indent"><span className="code-cyan">skills</span>: [</div>
                <div className="code-line indent-more"><span className="code-green">'web developmet'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'networking'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'electronics'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'problem solving'</span></div>
                <div className="code-line indent"><span className="code-cyan">projects</span>: [</div>
                <div className="code-line indent-more"><span className="code-green">'electronics project'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'electrohub'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'personal portfolio'</span>,</div>
                <div className="code-line indent">],</div>
                <div className="code-line indent"><span className="code-cyan">mindset</span>: <span className="code-green">'always learning'</span></div>
                <div className="code-line">{'}'};</div>
                <div className="code-line code-comment">// turning curiosity into projects</div>
                <div className="code-cursor" />
              </div>
              <div className="card-footer"><span className="footer-pulse" /> OPEN TO LEARNING & COLLABORATION</div>
            </div>
            <div className="floating-chip chip-top"><span>✳</span> Creative thinking</div>
            <div className="floating-chip chip-bottom"><span>⌘</span> Code · Learn · Repeat</div>
            <div className="visual-index">01 <span>/</span> 04</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>INTERESTED IN</span>
            <p>Software Development <b>✳</b> Web Technology <b>✳</b> Computer Hardware <b>✳</b> Continuous Learning</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">

          <div className="section-heading">
            <div className="eyebrow">GET TO KNOW ME</div>
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <p>
              Hi! I'm <strong>Jake Allen C. Ursua</strong>, a
              4th-year Computer Engineering student at
              Cagayan State University - Carig Campus.
            </p>

            <p>
              I am Jake Allen C. Ursua, a 4th-year
              Computer Engineering student with a strong
              interest in web development, networking,
              and electronics. I enjoy exploring new
              technologies, learning new skills, and
              working on projects that help me grow
              both technically and personally. I am
              adaptable, eager to learn, and committed
              to improving my problem-solving abilities.
              My goal is to become a skilled Computer
              Engineer and use technology to create
              practical and meaningful solutions.

            </p>

            <p>
              My goal is to become a Computer Engineer and
              continue developing my technical skills through
              hands-on projects and continuous learning.
            </p>
          </div>

        </section>


        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <p className="section-label">WHAT I CAN DO</p>
            <h2>My Skills</h2>
            <p>
              Skills I am developing as a Computer Engineering student.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Web Development</h3>
              <p>Building and designing websites.</p>
            </div>

            <div className="skill-card">
              <h3>Networking</h3>
              <p>Learning computer networks and connectivity.</p>
            </div>

            <div className="skill-card">
              <h3>Electronics</h3>
              <p>Exploring electronic components and circuits.</p>
            </div>

            <div className="skill-card">
              <h3>Adaptability</h3>
              <p>Flexible and willing to learn new skills.</p>
            </div>
          </div>
        </section>



        <section className="content-section section-wrap" id="experience">
          <div className="section-heading">
            <p className="section-label">MY JOURNEY</p>
            <h2>My Experience</h2>
            <p>
              My journey as a Computer Engineering student through
              academic projects and hands-on learning.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Power Supply</h3>
              <p>
                An electronics project focused on hardware,
                components, and basic circuit concepts.
              </p>
            </div>

            <div className="skill-card">
              <h3>ElectroHub</h3>
              <p>
                A website project where I practice HTML, CSS,
                and JavaScript.
              </p>
            </div>

            <div className="skill-card">
              <h3>Computer Engineering</h3>
              <p>
                4th-year student developing technical knowledge
                and problem-solving skills.
              </p>
            </div>
          </div>
        </section>




        <section className="content-section projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="section-label">MY WORK</p>
              <h2>My Projects</h2>
              <p>
                Projects that reflect my interest in electronics,
                web development, and technology.
              </p>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <h3>Electronics Project</h3>
                <p>
                  An electronics project focused on learning hardware,
                  components, and basic circuit concepts.
                </p>
                <span>Electronics</span>
              </article>

              <article className="project-card">
                <h3>ElectroHub</h3>
                <p>
                  A website project created to practice web development
                  and front-end design.
                </p>
                <span>Web Development</span>
              </article>

              <article className="project-card">
                <h3>Personal Portfolio</h3>
                <p>
                  A personal website showcasing my background, skills,
                  projects, and career goals.
                </p>
                <span>React · Vite</span>
              </article>
            </div>
          </div>
        </section>


        <section className="contact-section section-wrap" id="contact">


          <div className="section-heading">
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Let's Connect</h2>
            <p>
              Have a project idea or want to connect? Feel free
              to send me an email.
            </p>
          </div>

          <div className="contact-content">
            <p>
              I'm always open to learning opportunities,
              collaboration, and conversations about technology.
            </p>

            <a
                className="button button-primary"
                href="mailto:uallen660@gmail.com"
            >
              Email Me
              <Arrow diagonal />
            </a>

            <p className="contact-email">
              uallen660@gmail.com
            </p>
          </div>


        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JAKE URSUA<span className="brand-dot">/</span></span></a>
        <p>Designed & built with curiosity.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Jake Allen C. Ursua</span><span>Made with React + Vite</span></div>
      </footer>
    </div>
  )
}

export default App

