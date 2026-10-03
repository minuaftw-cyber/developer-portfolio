import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Developer Portfolio",
    category: "Web Application",
    description:
      "A personal developer portfolio designed and developed from the ground up to showcase my technical skills, projects, and ability to build and deploy modern web applications.",
    technologies: ["Next.js", "TypeScript", "CSS", "Git"],
    skills: [
      "Frontend Development",
      "Responsive UI",
      "Component Design",
      "Git Workflow",
    ],
    href: "/",
  },
  {
    number: "02",
    title: "Project EK",
    category: "AI / Local AI",
    description:
      "A local AI VTuber system built from the ground up to create an interactive Thai-speaking virtual character using locally controlled AI components, voice processing, memory, vision, and conversational systems.",
    technologies: [
      "Python",
      "Ollama",
      "Local LLM",
      "TTS",
      "RVC",
      "STT",
    ],
    skills: [
      "AI Integration",
      "System Architecture",
      "Audio Processing",
      "Local AI",
      "Python Development",
    ],
    href: "/projects/project-ek",
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      {/* Header */}
      <section className="projects-hero">
        <div className="section-label">SELECTED WORK</div>

        <h1>
          Projects
          <br />
          &amp; Experiments.
        </h1>

        <p>
          A collection of systems, applications, and experiments
          I&apos;ve built to explore technology, solve practical
          problems, and develop new technical skills.
        </p>
      </section>

      {/* Project List */}
      <section className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <div className="project-category">
                {project.category}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* Skills demonstrated */}
              <div className="project-skills">
                <div className="project-skills-label">
                  SKILLS DEMONSTRATED
                </div>

                <div className="project-skills-list">
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Project link */}
              <Link
                href={project.href}
                className="project-link"
              >
                View Project →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}