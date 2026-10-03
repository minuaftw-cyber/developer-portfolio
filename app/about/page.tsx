import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-image">
          <Image
            src="/images/profile-photo.png"
            alt="Portrait of Nutthachai Sawatduang"
            width={600}
            height={750}
            sizes="(max-width: 600px) 240px, (max-width: 900px) 280px, 300px"
            loading="eager"
          />
        </div>

        <div className="about-hero-content">
          <p className="about-label">About Me</p>

          <h1>
            Nutthachai
            <br />
            Sawatduang.
          </h1>

          <h2>Developer &amp; Technical Creator</h2>

          <p className="about-intro">
            I build software, web applications, AI systems,
            and technical tools to solve practical problems.
          </p>

          <p className="about-intro">
            My background is in IT support and systems, which shapes
            how I build: practical, reliable, and designed around
            how things actually run.
          </p>

          <div className="about-actions">
            <Link href="/projects" className="about-button about-button-primary">
              View Projects
            </Link>

            <Link href="/lab" className="about-button">
              Explore the Lab
            </Link>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="about-section about-section-light">
        <div className="about-container">
          <p className="about-label">My Background</p>

          <h2>
            From supporting systems
            <br />
            to building them.
          </h2>

          <div className="about-section-grid">
            <div className="about-text">
              <p>
                My background is in IT support and technical support,
                working with hardware, software, networks, and users.
              </p>

              <p>
                Alongside that work, I have been developing my skills
                in programming and building practical software systems.
              </p>

              <p>
                This portfolio is a place where I experiment, build,
                and demonstrate what I can actually create.
              </p>
            </div>

            <div className="about-skills">
              <div className="about-skill-group">
                <h3>Development</h3>
                <p>
                  Python · TypeScript · JavaScript · React ·
                  Next.js · HTML · CSS
                </p>
              </div>

              <div className="about-skill-group">
                <h3>AI &amp; Automation</h3>
                <p>
                  Ollama · Local LLM · AI integration ·
                  automation · audio processing
                </p>
              </div>

              <div className="about-skill-group">
                <h3>Systems</h3>
                <p>
                  Linux · Git · GitHub · Docker ·
                  deployment · system troubleshooting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="about-section">
        <div className="about-container">
          <p className="about-label">What I Build</p>

          <h2>
            Turning ideas into
            <br />
            working systems.
          </h2>

          <div className="about-build-grid">
            <article className="about-build-card">
              <span>01</span>
              <h3>Web Applications</h3>
              <p>
                Modern web applications built with practical
                functionality, clean interfaces, and real
                deployment workflows.
              </p>
            </article>

            <article className="about-build-card">
              <span>02</span>
              <h3>Software &amp; Tools</h3>
              <p>
                Desktop applications, automation tools, and
                software systems designed around specific
                problems and workflows.
              </p>
            </article>

            <article className="about-build-card">
              <span>03</span>
              <h3>AI &amp; Local AI</h3>
              <p>
                AI-powered systems using local models, custom
                processing pipelines, memory, voice systems,
                and application integration.
              </p>
            </article>

            <article className="about-build-card">
              <span>04</span>
              <h3>Technical Systems</h3>
              <p>
                Linux, deployment, system integration,
                troubleshooting, and infrastructure supporting
                the software I build.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="about-section about-philosophy">
        <div className="about-container">
          <p className="about-label">Selected Work</p>

          <h2>
            Proof through things
            <br />
            I&apos;ve built.
          </h2>

          <p className="about-philosophy-text">
            Explore projects that demonstrate my approach to
            software development, AI integration, and solving
            technical problems.
          </p>

          <div className="about-actions">
            <Link href="/projects" className="about-button about-button-primary">
              Explore Projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
