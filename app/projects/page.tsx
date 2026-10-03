import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Developer Portfolio",
    category: "Web Application",
    description:
      "A personal developer portfolio built to present my technical skills, projects, and experience through an interactive web application.",
    technologies: ["Next.js", "TypeScript", "CSS", "Git"],
    href: "/",
  },
  {
    number: "02",
    title: "Project EK",
    category: "AI / Local AI",
    description:
      "An experimental AI VTuber project designed to work with local AI systems, exploring conversational AI and interactive character systems.",
    technologies: ["Ollama", "Local AI", "Python", "Web"],
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
          I&apos;ve built or contributed to.
        </p>
      </section>

      {/* Project List */}
      <section className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-content">
              <div className="project-category">
                {project.category}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

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