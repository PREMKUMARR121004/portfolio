import React from 'react'


function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row">

      <p>
        © 2026 Prem Kumar. All rights reserved.
      </p>

      <p>
  Designed & developed using{" "}
  <span className="text-purple-400">
    React & Tailwind CSS
  </span>
</p>
    </footer>
  );
}

export default Footer;