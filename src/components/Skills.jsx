const skills = [
  {
    name: "HTML",
    icon: '/images/html.png',
  },
  {
    name: "CSS",
    icon: '/images/Css.png',
  },
  {
    name: "JavaScript",
    icon: '/images/Js.png',
  },
  {
    name: "React",
    icon: "/images/react.png",
  },
  {
    name: "Tailwind CSS",
    icon: '/images/tcss.png',
  },
  {
    name: "Git",
    icon: '/images/gith.png',
  },
  {
    name: "GitHub",
    icon: '/images/github.png',
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-3"
    >
      <div className="rounded-xl border border-white/10 bg-[#0c1220]/80 p-7 sm:p-8">

        <SectionTitle title="Skills" />

        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-lg border border-white/5 bg-[#0d1424] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/5"
            >

              <div className="flex h-14 items-center justify-center text-2xl font-bold text-purple-400 transition group-hover:scale-110">
                <img src={skill.icon} className="h-20 w-20 object-contain"/>
              </div>

              <p className="mt-3 text-sm font-medium text-gray-300">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-3 text-purple-400">
      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
      <span className="font-medium">
        {title}
      </span>
    </div>
  );
}

export default Skills;