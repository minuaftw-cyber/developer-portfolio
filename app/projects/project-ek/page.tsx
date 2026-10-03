import Image from "next/image";
import Link from "next/link";

export default function ProjectEKPage() {
  return (
    <main className="ek-page">

      {/* HERO */}
      <section className="ek-hero">
        <div className="ek-hero-content">

          <div className="ek-label">
            PROJECT EK / LOCAL AI
          </div>

          <h1>
            Elizabeth
            <br />
            Kesselring.
          </h1>

          <p className="ek-lead">
            A local AI VTuber system built from the ground up to create
            an interactive Thai-speaking virtual character.
          </p>

          <div className="ek-tags">
            <span>PYTHON</span>
            <span>LOCAL AI</span>
            <span>AI VTUBER</span>
          </div>

        </div>

        <div className="ek-hero-image">
          <Image
            src="/project-ek/hero.png"
            alt="Elizabeth Kesselring"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="ek-section">

        <div className="ek-section-label">
          OVERVIEW
        </div>

        <h2>
          More than a chatbot.
        </h2>

        <p>
          Project EK is an experimental AI VTuber system created around
          Elizabeth Kesselring, a virtual character designed to interact
          with viewers in Thai through voice, conversation, vision and
          long-term memory.
        </p>

        <p>
          The goal was not simply to demonstrate an AI model. The system
          was designed as a complete character platform that could
          eventually participate in live streams, videos and music content.
        </p>

      </section>


      {/* DESIGN GOALS */}
      <section className="ek-section">

        <div className="ek-section-label">
          DESIGN GOALS
        </div>

        <h2>
          Built around independence.
        </h2>

        <div className="ek-grid">

          <div className="ek-card">
            <span className="ek-number">01</span>

            <h3>
              Single Application
            </h3>

            <p>
              Keep the system inside one desktop application instead of
              requiring multiple external tools to operate the character.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">02</span>

            <h3>
              Local AI
            </h3>

            <p>
              Use locally running AI components wherever possible to reduce
              dependence on external services.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">03</span>

            <h3>
              Consistent Character
            </h3>

            <p>
              Build the character around a persistent persona, memory,
              voice pipeline and behavioral rules.
            </p>
          </div>

        </div>

      </section>


      {/* SYSTEM ARCHITECTURE */}
      <section className="ek-section">

        <div className="ek-section-label">
          SYSTEM ARCHITECTURE
        </div>

        <h2>
          One brain. Multiple inputs.
        </h2>

        <div className="ek-architecture">

          <div className="ek-flow">
            <span>YouTube Chat</span>
            <span>Microphone / STT</span>
            <span>Screen Vision</span>
            <span>Long-term Memory</span>
            <span>Reference Data</span>
          </div>

          <div className="ek-arrow">
            ↓
          </div>

          <div className="ek-core">
            <strong>LLM + PERSONA</strong>
            <small>
              Local conversational intelligence
            </small>
          </div>

          <div className="ek-arrow">
            ↓
          </div>

          <div className="ek-core">
            <strong>TTS</strong>
            <small>
              Thai speech generation
            </small>
          </div>

          <div className="ek-arrow">
            ↓
          </div>

          <div className="ek-core">
            <strong>RVC</strong>
            <small>
              Character voice conversion
            </small>
          </div>

        </div>

      </section>


      {/* CONTROLLER */}
      <section className="ek-media-section">

        <div className="ek-media-image">
          <Image
            src="/project-ek/controller.png"
            alt="Project EK controller interface"
            width={1600}
            height={1000}
          />
        </div>

        <div className="ek-media-content">

          <div className="ek-section-label">
            DESKTOP APPLICATION
          </div>

          <h2>
            Everything in one place.
          </h2>

          <p>
            The controller brings the different parts of the system together
            into a single desktop application built with Python and Tkinter.
          </p>

          <div className="ek-tech-list">
            <span>Python 3.12</span>
            <span>Tkinter</span>
            <span>Ollama</span>
            <span>Edge TTS</span>
            <span>RVC</span>
            <span>PyAudio</span>
          </div>

        </div>

      </section>


      {/* ELIZABEAT */}
      <section className="ek-media-section ek-media-reverse">

        <div className="ek-media-content">

          <div className="ek-section-label">
            ELIZABEAT
          </div>

          <h2>
            A character that can sing.
          </h2>

          <p>
            Project EK also includes a singing workflow built around
            Elizabeth Kesselring. The system uses RVC to apply the
            character&apos;s vocal color while keeping the original
            melody and rhythm.
          </p>

          <p>
            The first published cover was &quot;ฟ้า&quot; by Tattoo Colour.
          </p>

        </div>

        <div className="ek-media-image">
          <Image
            src="/project-ek/elizabeat.png"
            alt="ELIZABEAT cover"
            width={1600}
            height={900}
          />
        </div>

      </section>


      {/* POSTER */}
      <section className="ek-poster">

        <Image
          src="/project-ek/poster.png"
          alt="Project EK artwork"
          width={1200}
          height={1600}
        />

      </section>


      {/* LIMITATIONS */}
      <section className="ek-section">

        <div className="ek-section-label">
          CURRENT LIMITATIONS
        </div>

        <h2>
          Built with real constraints.
        </h2>

        <div className="ek-grid">

          <div className="ek-card">
            <span className="ek-number">01</span>

            <h3>
              No NVIDIA GPU
            </h3>

            <p>
              The system currently runs without an NVIDIA GPU, resulting in
              slower response times of around 5–10 seconds.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">02</span>

            <h3>
              RVC Limitations
            </h3>

            <p>
              Voice conversion has limitations with multiple voices,
              extremely high notes and shouting.
            </p>
          </div>

          <div className="ek-card">
            <span className="ek-number">03</span>

            <h3>
              Speech Generation
            </h3>

            <p>
              Edge TTS still requires an internet connection and may
              occasionally fail.
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
          A working AI character system.
        </h2>

        <p>
          Project EK currently operates as a complete end-to-end system,
          connecting conversation, voice, vision, memory and character
          behavior into a single workflow.
        </p>

        <div className="ek-result-tags">
          <span>WORKING</span>
          <span>LOCAL AI</span>
          <span>THAI LANGUAGE</span>
          <span>AI VTUBER</span>
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