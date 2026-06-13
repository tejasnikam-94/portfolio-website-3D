"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="h-screen relative">

      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 flex flex-col justify-center items-center h-full"
      >

        <h1 className="text-7xl font-bold mb-4">
          Tejas R. Nikam
        </h1>

        <h2 className="text-2xl text-sky-400">

          Senior Data Scientist •
          PhD Candidate •
          Patent Inventor

        </h2>

      </motion.div>

    </section>
  );
}