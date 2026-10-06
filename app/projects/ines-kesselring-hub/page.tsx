import Image from "next/image";
import Link from "next/link";

const LIVE_URL = "https://ines-kesselring-hub.vercel.app";
const GITHUB_URL = "https://github.com/minuaftw-cyber/ines-kesselring-hub";

export default function InesKesselringHubPage() {
  return (
    <main className="ek-page">

      {/* HERO */}
      <section className="ek-hero">
        <div className="ek-hero-content">

          <div className="ek-label">
            INES KESSELRING HUB / FULL-STACK
          </div>

          <h1>
            Ines Kesselring
            <br />
            Hub.
          </h1>

          <p className="ek-lead">
            The website and backoffice for my YouTube channel: a live
            stream countdown, videos synced from YouTube, news and member
            accounts, all managed by staff from a Django backoffice.
          </p>

          <div className="ek-tags">
            <span>NEXT.JS</span>
            <span>DJANGO REST</span>
            <span>POSTGRESQL</span>
            <span>LIVE IN PRODUCTION</span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            <a className="project-link" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
              Visit Live Site ↗
            </a>
            <a className="project-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              View on GitHub ↗
            </a>
          </div>

        </div>

        <div className="ek-hero-image">
          <Image
            src="/ines-hub/home.png"
            alt="Ines Kesselring Hub home page with the live stream countdown"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "left top" }}
          />
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="ek-section">

        <div className="ek-section-label">
          OVERVIEW
        </div>

        <h2>
          A real product, end to end.
        </h2>

        <p>
          Fans open the site to see when the next live starts, browse
          videos by series, read channel news and sign up as members.
          The team updates the schedule, videos and news from a backoffice,
          without touching code.
        </p>

        <p>
          I designed and built every part myself: the database schema,
          the REST API, authentication and roles, the website, the
          deployment, automated tests and monitoring.
        </p>

      </section>


      {/* WHAT IT DOES */}
      <section className="ek-section">

        <div className="ek-section-label">
          WHAT IT DOES
        </div>

        <h2>
          One system, three audiences.
        </h2>

        <div className="ek-grid">

          <div className="ek-card">
            <span className="ek-number">01</span>
            <h3>Fans</h3>
            <p>
              Live countdown, videos by series, a weekly schedule in Thai
              time and news. Responsive on phone, tablet and desktop.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">02</span>
            <h3>Members</h3>
            <p>
              Free accounts with email login. Members read full
              members-only articles and see members-only stream links.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">03</span>
            <h3>Staff &amp; Admins</h3>
            <p>
              Staff manage content in the backoffice. Admins also manage
              user accounts. Public sign-up can never create staff.
            </p>
          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section className="ek-section">

        <div className="ek-section-label">
          SYSTEM ARCHITECTURE
        </div>

        <h2>
          Three services, one region.
        </h2>

        <div className="ek-architecture">

          <div className="ek-flow">
            <span>Fans &amp; Members</span>
            <span>Staff (Backoffice)</span>
            <span>YouTube RSS / Data API</span>
          </div>

          <div className="ek-arrow">↓</div>

          <div className="ek-core">
            <strong>NEXT.JS on VERCEL</strong>
            <small>Server-rendered website, login token kept in an httpOnly cookie</small>
          </div>

          <div className="ek-arrow">↓</div>

          <div className="ek-core">
            <strong>DJANGO REST API on RENDER</strong>
            <small>API, backoffice, roles and YouTube sync</small>
          </div>

          <div className="ek-arrow">↓</div>

          <div className="ek-core">
            <strong>POSTGRESQL on NEON</strong>
            <small>Managed database, all three services in Singapore</small>
          </div>

        </div>

      </section>


      {/* BACKOFFICE */}
      <section className="ek-media-section">

        <div className="ek-media-image">
          <Image
            src="/ines-hub/backoffice.png"
            alt="Django backoffice dashboard for videos, live streams, series and news"
            width={960}
            height={600}
          />
        </div>

        <div className="ek-media-content">

          <div className="ek-section-label">
            BACKOFFICE
          </div>

          <h2>
            Built for the people who run it.
          </h2>

          <p>
            Staff publish or hide videos in bulk, schedule live streams,
            write members-only news and pull new uploads from YouTube with
            one action. Re-syncing never overwrites what staff decided to
            hide.
          </p>

          <div className="ek-tech-list">
            <span>Django 5.2 LTS</span>
            <span>Django REST Framework</span>
            <span>Django Admin</span>
            <span>Role-based access</span>
            <span>YouTube Data API</span>
          </div>

        </div>

      </section>


      {/* OPERATIONS */}
      <section className="ek-section">

        <div className="ek-section-label">
          RUNNING IN PRODUCTION
        </div>

        <h2>
          Tested, deployed, monitored.
        </h2>

        <div className="ek-grid">

          <div className="ek-card">
            <span className="ek-number">01</span>
            <h3>Automated Tests &amp; CI</h3>
            <p>
              31 backend tests run against a real PostgreSQL database,
              plus type checking, linting and a production build, on every
              push with GitHub Actions.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">02</span>
            <h3>Monitoring</h3>
            <p>
              A health endpoint checks the API and its database. UptimeRobot
              calls it every 5 minutes and emails me if anything goes down.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">03</span>
            <h3>Security</h3>
            <p>
              HTTPS with HSTS, httpOnly session cookies, rate-limited login,
              role-based permissions and secrets kept out of the repository.
            </p>
          </div>

        </div>

      </section>


      {/* LIMITATIONS */}
      <section className="ek-section">

        <div className="ek-section-label">
          CURRENT LIMITATIONS
        </div>

        <h2>
          Running on free tiers.
        </h2>

        <div className="ek-grid">

          <div className="ek-card">
            <span className="ek-number">01</span>
            <h3>Sleeping API</h3>
            <p>
              Render&apos;s free plan sleeps after 15 idle minutes. The uptime
              monitor keeps it awake as a side effect of health checks.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">02</span>
            <h3>Temporary Uploads</h3>
            <p>
              Uploaded news images are lost on restart. The next step is
              moving uploads to object storage.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">03</span>
            <h3>Two Logins</h3>
            <p>
              Staff sign in again when opening the backoffice. Single
              sign-on between the website and backoffice is planned.
            </p>
          </div>

        </div>

      </section>


      {/* RESULT */}
      <section className="ek-result">

        <div className="ek-section-label">
          STATUS
        </div>

        <h2>
          Live and in use.
        </h2>

        <p>
          The site serves the channel&apos;s real videos and schedule, and the
          whole stack runs in production at no hosting cost.
        </p>

        <div className="ek-result-tags">
          <span>LIVE</span>
          <span>FULL-STACK</span>
          <span>CI / CD</span>
          <span>MONITORED</span>
        </div>

      </section>


      {/* BACK */}
      <section className="ek-back">

        <Link href="/projects">
          ← Back to Projects
        </Link>

      </section>

    </main>
  );
}
