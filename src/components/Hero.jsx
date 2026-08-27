import Cube from "./Cube";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden px-8 pt-24 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />

      {/* Background Grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-[calc(100vh-96px)] w-full items-center">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-4xl">

          <p className="mb-4 text-xl font-medium text-purple-400">
            Hi, I'm
          </p>

          <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight sm:text-6xl lg:text-6xl">
            PREM{" "}
            <span className="text-white-500">
              KUMAR.R
            </span>
          </h1>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            <span className="text-purple-500">
              Frontend
            </span>{" "}
            Developer
            <span className="ml-1 animate-pulse text-purple-500">
              |
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I build responsive, user-friendly and modern websites
            with a focus on performance and great user experience.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3 font-semibold shadow-lg shadow-purple-500/20 transition hover:-translate-y-1"
            >
              View My Work ↗
            </a>

            

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex gap-8 text-sm text-gray-400">

            <a
              href="https://github.com/PREMKUMARR121004/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-purple-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/prem-kumar-r-6480752ba"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-purple-400"
            >
              LinkedIn
            </a>

            

            

          </div>

        </div>

        {/* CUBE */}
        <div className="absolute right-[-40px] top-1/2 hidden -translate-y-1/2 lg:block xl:right-10">
          <Cube />
        </div>

      </div>
    </section>
  );
}

export default Hero;