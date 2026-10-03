export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-intro">Hello, I&apos;m</p>

          <h1>Nutthachai Sawatduang</h1>

          <h2>Developer &amp; Technical Creator</h2>

          <p className="hero-description">
            I build software, web applications, AI systems,
            and technical tools to solve practical problems.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="/about" className="btn btn-secondary">
              About Me
            </a>
          </div>

          <p className="hero-identity">
            Ines Kesselring — Online Creator Identity
          </p>
        </div>
      </section>

      {/* What I Build */}
      <section className="build-section">
        <div className="section-container">
          <p className="section-label">WHAT I BUILD</p>

          <h2>Turning ideas into working systems.</h2>

          <div className="build-grid">
            <article className="build-card">
              <h3>Web Applications</h3>

              <p>
                Modern web applications built with
                practical functionality, clean interfaces,
                and real deployment workflows.
              </p>
            </article>

            <article className="build-card">
              <h3>Software &amp; Tools</h3>

              <p>
                Desktop applications, automation tools,
                and software systems designed around
                specific problems and workflows.
              </p>
            </article>

            <article className="build-card">
              <h3>AI &amp; Local AI</h3>

              <p>
                AI-powered systems using local models,
                custom processing pipelines, memory,
                voice systems, and application integration.
              </p>
            </article>

            <article className="build-card">
              <h3>Technical Systems</h3>

              <p>
                Linux, deployment, system integration,
                troubleshooting, and infrastructure
                supporting the software I build.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="projects-preview">
        <div className="section-container">
          <p className="section-label">SELECTED PROJECTS</p>

          <h2>Proof through things I&apos;ve built.</h2>

          <p>
            Explore projects that demonstrate my approach
            to software development, AI integration,
            and solving technical problems.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">
              Explore Projects →
            </a>
          </div>
        </div>
      </section>

      {/* Technical Focus */}
      <section className="build-section">
        <div className="section-container">
          <p className="section-label">TECHNICAL FOCUS</p>

          <h2>Tools I use to turn ideas into systems.</h2>

          <div className="build-grid">
            <article className="build-card">
              <h3>Development</h3>

              <p>
                Python · TypeScript · JavaScript · React ·
                Next.js · HTML · CSS
              </p>
            </article>

            <article className="build-card">
              <h3>AI &amp; Automation</h3>

              <p>
                Ollama · Local LLM · AI integration ·
                automation · audio processing
              </p>
            </article>

            <article className="build-card">
              <h3>Systems</h3>

              <p>
                Linux · Git · GitHub · Docker ·
                deployment · system troubleshooting
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}