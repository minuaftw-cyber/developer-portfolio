export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">GET IN TOUCH</p>

        <h1>
          Let&apos;s build
          <br />
          something.
        </h1>

        <p className="contact-intro">
          I&apos;m Nutthachai Sawatduang, an IT professional and
          technical creator focused on building practical software,
          web applications, AI systems, and technical tools.
        </p>

        <p className="contact-intro">
          I&apos;m open to developer opportunities, IT / Application
          Support roles, web application projects, and technical
          collaboration.
        </p>
      </section>

      <section className="contact-section">
        <p className="contact-section-label">OPEN TO</p>

        <div className="contact-opportunities">
          <div>Developer opportunities</div>
          <div>IT / Application Support</div>
          <div>Web Application projects</div>
          <div>Technical collaboration</div>
        </div>
      </section>

      <section className="contact-section">
        <p className="contact-section-label">CONTACT</p>

        <div className="contact-list">
          <div className="contact-item">
            <div className="contact-item-info">
              <span className="contact-item-label">PHONE</span>
              <span className="contact-item-value">
                086-364-8723
              </span>
            </div>

            <a
              href="tel:0863648723"
              className="contact-item-link"
            >
              Call Me →
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-item-info">
              <span className="contact-item-label">EMAIL</span>
              <span className="contact-item-value">
                nuthtachaisawatduang@gmail.com
              </span>
            </div>

            <a
              href="mailto:nuthtachaisawatduang@gmail.com"
              className="contact-item-link"
            >
              Send Email →
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-item-info">
              <span className="contact-item-label">LINE</span>
              <span className="contact-item-value">
                10578113
              </span>
            </div>

            <a
              href="https://line.me/ti/p/~10578113"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-link"
            >
              Open LINE →
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-item-info">
              <span className="contact-item-label">GITHUB</span>
              <span className="contact-item-value">
                github.com/minuaftw-cyber
              </span>
            </div>

            <a
              href="https://github.com/minuaftw-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-link"
            >
              View GitHub →
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-item-info">
              <span className="contact-item-label">YOUTUBE</span>
              <span className="contact-item-value">
                Ines Kesselring
              </span>
            </div>

            <a
              href="https://www.youtube.com/@InesKesselring"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-link"
            >
              Visit Channel →
            </a>
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <p>
          Have an opportunity, project, or idea you&apos;d like
          to discuss?
        </p>

        <a
          href="mailto:nuthtachaisawatduang@gmail.com"
          className="contact-email-button"
        >
          Start a conversation →
        </a>
      </section>
    </main>
  );
}

