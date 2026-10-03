import Image from "next/image";

export default function ProjectEKPage() {
  return (
    <main className="project-ek-page">

      {/* HERO */}
      <section className="project-ek-hero">
        <div className="project-ek-hero-content">
          <span className="project-ek-label">
            PROJECT EK / LOCAL AI
          </span>

          <h1>
            Elizabeth
            <br />
            Kesselring.
          </h1>

          <p>
            A local AI VTuber system built from the ground up to create
            an interactive Thai-speaking virtual character.
          </p>

          <div className="project-ek-meta">
            <span>PYTHON</span>
            <span>LOCAL AI</span>
            <span>AI VTUBER</span>
          </div>
        </div>

        <div className="project-ek-hero-image">
          <Image
            src="/project-ek/project-ek-assets/hero.png"
            alt="Elizabeth Kesselring"
            width={1200}
            height={900}
            priority
          />
        </div>
      </section>


      {/* OVERVIEW */}
      <section className="project-ek-section">
        <div className="project-ek-section-label">
          01 / OVERVIEW
        </div>

        <div className="project-ek-section-content">
          <h2>
            More than
            <br />
            a chatbot.
          </h2>

          <div className="project-ek-text">
            <p>
              Project EK is a desktop-based AI VTuber system designed
              around Elizabeth Kesselring, a fictional AI character
              created to interact with viewers through live streams,
              conversations, music, and visual interaction.
            </p>

            <p>
              The entire system runs locally on Windows. Instead of
              depending on a collection of external services, the
              project combines language models, speech processing,
              voice conversion, memory, vision, and YouTube interaction
              into a single application.
            </p>
          </div>
        </div>
      </section>


      {/* CONTROLLER */}
      <section className="project-ek-feature">
        <div className="project-ek-feature-image">
          <Image
            src="/project-ek/project-ek-assets/controller.png"
            alt="AI VTuber Controller"
            width={1200}
            height={800}
          />
        </div>

        <div className="project-ek-feature-content">
          <span>DESKTOP APPLICATION</span>

          <h2>
            One application.
            <br />
            One system.
          </h2>

          <p>
            The controller acts as the central interface for the
            entire AI VTuber pipeline. It manages the AI model,
            speech processing, memory, voice conversion, microphone,
            screen vision, YouTube chat, and music systems.
          </p>

          <p>
            The goal was simple: keep the experience inside one
            application and reduce the number of external programs
            required during a stream.
          </p>
        </div>
      </section>


      {/* ARCHITECTURE */}
      <section className="project-ek-section project-ek-dark-section">
        <div className="project-ek-section-label">
          02 / ARCHITECTURE
        </div>

        <div className="project-ek-section-content">
          <h2>
            One brain.
            <br />
            Multiple inputs.
          </h2>

          <div className="project-ek-architecture">
            <div>YouTube Chat</div>
            <div>Microphone / STT</div>
            <div>Screen Vision</div>
            <div>Long-term Memory</div>
            <div>Reference Data</div>

            <strong>↓</strong>

            <div className="architecture-core">
              LLM
              <small>
                Persona + Memory + Context
              </small>
            </div>

            <strong>↓</strong>

            <div>TTS</div>
            <div>RVC</div>
            <div>VB-Cable</div>
            <div>VMagicMirror</div>
          </div>
        </div>
      </section>


      {/* VOICE PIPELINE */}
      <section className="project-ek-section">
        <div className="project-ek-section-label">
          03 / VOICE PIPELINE
        </div>

        <div className="project-ek-section-content">
          <h2>
            The voice
            <br />
            problem.
          </h2>

          <div className="project-ek-text">
            <p>
              Anime-style voice models often struggle with Thai
              pronunciation. Instead of forcing the voice model to
              generate Thai directly, Project EK separates language
              generation from voice identity.
            </p>

            <div className="project-ek-pipeline">
              <span>Thai Text</span>
              <b>→</b>
              <span>Edge TTS</span>
              <b>→</b>
              <span>RVC</span>
              <b>→</b>
              <span>VB-Cable</span>
              <b>→</b>
              <span>VMagicMirror</span>
            </div>

            <p>
              Edge TTS handles Thai pronunciation while RVC changes
              the vocal characteristics into Elizabeth's voice.
              This allows the system to preserve Thai pronunciation
              without sacrificing character identity.
            </p>
          </div>
        </div>
      </section>


      {/* TECHNOLOGY */}
      <section className="project-ek-tech">
        <div className="project-ek-section-label">
          04 / TECHNOLOGY
        </div>

        <h2>
          Built with
          <br />
          practical tools.
        </h2>

        <div className="project-ek-tech-grid">
          <span>Python 3.12</span>
          <span>Tkinter</span>
          <span>Ollama</span>
          <span>Llama 3.1 Typhoon</span>
          <span>Edge TTS</span>
          <span>RVC</span>
          <span>PyTorch</span>
          <span>pytchat</span>
          <span>SpeechRecognition</span>
          <span>PyAudio</span>
          <span>mss</span>
          <span>Pillow</span>
        </div>
      </section>


      {/* ELIZABEAT */}
      <section className="project-ek-feature project-ek-elizabeat">
        <div className="project-ek-feature-content">
          <span>ELIZABEAT / MUSIC</span>

          <h2>
            The character
            <br />
            became a creator.
          </h2>

          <p>
            Project EK eventually expanded beyond conversation.
            Elizabeth also became a music-focused character through
            ELIZABEAT, a cover music segment created as part of the
            project.
          </p>

          <p>
            The same RVC-based voice pipeline is used to transform
            recorded vocals while keeping the original performance,
            melody, and timing.
          </p>
        </div>

        <div className="project-ek-feature-image">
          <Image
            src="/project-ek/project-ek-assets/elizabeat.png"
            alt="ELIZABEAT"
            width={1600}
            height={900}
          />
        </div>
      </section>


      {/* STATUS */}
      <section className="project-ek-status">
        <span>05 / CURRENT STATUS</span>

        <h2>
          Built.
          <br />
          Tested.
          <br />
          Released.
        </h2>

        <p>
          Project EK is currently a working system used for actual
          content production. The project has already produced and
          published its first music cover.
        </p>
      </section>

    </main>
  );
}