"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Transaction Intelligence",
    stack: "LLM, NLP, Financial Data"
  },
  {
    title: "Financial Entity Recognition",
    stack: "Transformers, NER"
  },
  {
    title: "Credit Risk Prediction",
    stack: "XGBoost, ML"
  },
  {
    title: "Snow Avalanche Detection",
    stack: "SAR, Deep Learning"
  }
];

export default function ProjectGallery() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-8">

      <h2 className="text-5xl font-bold mb-20">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project) => (

          <motion.div
            whileHover={{
              y: -10
            }}
            key={project.title}
            className="
            bg-gradient-to-br
            from-slate-900
            to-slate-800
            rounded-3xl
            p-8
            border border-white/10
            "
          >

            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.stack}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}