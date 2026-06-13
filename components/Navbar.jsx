"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between">

        <div className="font-bold text-xl">
          Tejas Nikam
        </div>

        <div className="space-x-8">

          <a href="#about">About</a>
          <a href="#experience">Experience</a>

        </div>

      </div>

    </nav>
  );
}