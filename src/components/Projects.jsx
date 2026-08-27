const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A modern e-commerce web application built with React and Tailwind CSS.",
    image: "/images/shopease.png",
    live: "https://shopeaseproject1.netlify.app/",
    github: "https://github.com/PREMKUMARR121004/shopeaseproject1",
  },
  {
    title: "Job Tracker Website",
    description:
        "A responsive job tracker application to manage job applications and track their status efficiently.",
    image: "/images/jobtracker.png",
    live: "https://job-trackerproject2.netlify.app/",
    github: "https://github.com/PREMKUMARR121004/jobTrackerproject2",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase my projects and skills.",
    image: "/images/portfolio.png",
    live: "https://premkumarrportfolio.netlify.app/",
    github: "https://github.com/PREMKUMARR121004/portfolio",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-10"
    >
      <div className="rounded-xl border border-white/10 bg-[#0c1220]/80 p-7 sm:p-8">

        <div className="flex items-center justify-between">

          <SectionTitle title="Projects" />

          <a
            href="#projects"
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            View All Projects →
          </a>

        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-[#0b111e] transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">

      <div className="h-40 overflow-hidden bg-slate-900">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

      </div>

      <div className="p-5">

        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        <div className="mt-5 flex gap-6 text-sm">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Live Demo ↗
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-3 text-purple-400">
      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
      <span>{title}</span>
    </div>
  );
}

export default Projects;