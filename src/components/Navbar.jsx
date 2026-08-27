import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#050812]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-bold">
          Prem <span className="text-purple-500">Kumar.R</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              className="text-sm text-gray-300 transition hover:text-purple-400"
            >
              {name}
            </a>
          ))}

          <a
            href="/images/PREM_KUMAR_R_Frontend1_Resume_(1)(1).pdf"
            download
            className="rounded-lg border border-purple-500/50 px-4 py-2 text-sm text-purple-400 transition hover:bg-purple-500 hover:text-white"
          >
            Download CV ↓
          </a>
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-[#080c18] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-purple-400"
              >
                {name}
              </a>
            ))}

            <a
              href="/images/PREM_KUMAR_R_Frontend1_Resume_(1)(1).pdf"
              download
              className="w-fit rounded-lg border border-purple-500 px-4 py-2 text-purple-400"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
