function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-5 py-10"
    >
      <div className="rounded-xl border border-white/10 bg-[#0c1220]/80 p-7 shadow-2xl sm:p-10">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Text */}
          <div>

            <SectionTitle title="About Me" />

            <h2 className="mt-5 text-2xl font-bold leading-relaxed sm:text-3xl">
              A passionate developer who
              <br />
              likes to{" "}
              <span className="text-purple-500">
                build
              </span>{" "}
              and{" "}
              <span className="text-purple-500">
                explore.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
             I'm a MERN Stack and Backend Developer with hands-on experience building web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. Proficient in developing RESTful APIs, implementing JWT authentication, role-based authorization, and integrating frontend interfaces with backend services. Familiar with API testing, database management, debugging, and Git/GitHub.. </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3 md:grid-cols-3">

              <Info
                title="Name"
                value="Prem Kumar.R"
              />

              <Info
                title="Email"
                value="praveenkumar37667@gmail.com"
              />

              

            </div>

          </div>

          {/* Coding image */}
          <div className="relative overflow-hidden rounded-xl border border-purple-500/40">
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#111a32] via-purple-950/50 to-[#050812]">

              <div className="text-center">

                <div className="mb-5 text-6xl">
                  {"</>"}
                </div>

                <p className="text-xl font-semibold text-purple-400">
                  Code • Build • Learn
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  MERN stack || Backend Developer
                </p>

              </div>

            </div>
          </div>

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

function Info({ title, value }) {
  return (
    <div>
      <p className="text-sm text-purple-400">
        {title}
      </p>

      <p className="mt-1 text-sm text-gray-300">
        {value}
      </p>
    </div>
  );
}

export default About;