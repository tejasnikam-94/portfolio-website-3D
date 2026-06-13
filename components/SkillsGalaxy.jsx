"use client";

const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Transformers",
  "LangChain",
  "AWS",
  "Databricks",
  "Kubernetes",
  "MLFlow",
  "Spark",
  "LLMs",
  "RAG"
];

export default function SkillsGalaxy() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-8">

      <h2 className="text-5xl font-bold mb-20">
        Skills Galaxy
      </h2>

      <div className="
      flex
      flex-wrap
      gap-6
      justify-center
      ">

        {skills.map((skill) => (

          <div
            key={skill}
            className="
            px-8
            py-4
            rounded-full
            bg-sky-500/20
            border
            border-sky-400/30
            backdrop-blur-md
            text-lg
            "
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}