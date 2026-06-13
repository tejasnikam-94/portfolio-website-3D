"use client";

import { motion } from "framer-motion";

const patents = [
  {
    title: "Multilingual Contextual Translation",
    desc: "Financial transaction intelligence using contextual AI."
  },
  {
    title: "Financial Streaming Fingerprints",
    desc: "Adaptive personalization using transaction streams."
  },
  {
    title: "ClearMerchant",
    desc: "Merchant disambiguation using Agentic AI."
  }
];

export default function PatentShowcase() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-8">

      <h2 className="text-5xl font-bold mb-20">
        Patent Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {patents.map((patent, idx) => (

          <motion.div
            key={idx}
            whileHover={{
              rotateY: 10,
              scale: 1.05
            }}
            className="
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            rounded-3xl
            p-8
            "
          >
            <h3 className="text-2xl font-bold mb-4">
              {patent.title}
            </h3>

            <p className="text-gray-400">
              {patent.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}