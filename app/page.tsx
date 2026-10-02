export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>Nutthachai Sawatduang</h1>

          <h2>IT Support & Developer</h2>

          <p className="hero-description">
            I build practical systems, web applications,
            and interactive software projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="section-container">
          <p className="section-label">WHAT I BUILD</p>

          <h2>Practical systems, not just websites.</h2>

          <div className="build-grid">
            <article className="build-card">
              <h3>Web Applications</h3>
              <p>
                Interactive websites and web applications
                designed to solve practical problems.
              </p>
            </article>

            <article className="build-card">
              <h3>Business Systems</h3>
              <p>
                POS systems, attendance systems,
                dashboards and internal tools.
              </p>
            </article>

            <article className="build-card">
              <h3>IT & Infrastructure</h3>
              <p>
                Linux, system administration,
                troubleshooting and technical support.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-preview">
        <div className="section-container">
          <p className="section-label">SELECTED PROJECTS</p>

          <h2>Things I've built.</h2>

          <p>
            Explore my projects and interactive demonstrations.
          </p>
        </div>
      </section>
    </main>
  );
}