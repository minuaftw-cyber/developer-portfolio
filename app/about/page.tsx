export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>

          <h1>
            IT Support
            <br />
            & Developer.
          </h1>

          <p className="about-intro">
            I'm Nutthachai Sawatduang, an IT Support professional
            who is developing my skills in software and web development.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="section-container about-story-grid">
          <div>
            <p className="section-label">MY BACKGROUND</p>
            <h2>From supporting systems to building them.</h2>
          </div>

          <div className="about-text">
            <p>
              My background is in IT Support and technical support,
              where I work with hardware, software, networks, and users.
            </p>

            <p>
              Alongside IT Support, I have been developing my skills
              in programming and building practical software systems.
            </p>

            <p>
              This portfolio is a place where I experiment, build,
              and demonstrate what I can actually create.
            </p>
          </div>
        </div>
      </section>

      <section className="about-skills">
        <div className="section-container">
          <p className="section-label">WHAT I DO</p>

          <div className="about-skill-grid">
            <article className="about-skill-card">
              <span>01</span>
              <h2>IT Support</h2>
              <p>
                Hardware, software, network troubleshooting,
                user support and system maintenance.
              </p>
            </article>

            <article className="about-skill-card">
              <span>02</span>
              <h2>Development</h2>
              <p>
                Building web applications, business systems,
                automation tools and interactive software.
              </p>
            </article>

            <article className="about-skill-card">
              <span>03</span>
              <h2>Systems</h2>
              <p>
                Working with Linux, databases, dashboards,
                POS systems and practical internal tools.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}