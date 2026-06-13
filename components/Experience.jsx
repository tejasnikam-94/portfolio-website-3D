const jobs = [
  {
    role: "Data Scientist II",
    company: "Mastercard",
    year: "2024-Present"
  },
  {
    role: "Data Scientist I",
    company: "Mastercard",
    year: "2022-2023"
  },
  {
    role: "Associate Data Scientist",
    company: "Mastercard",
    year: "2020-2021"
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-32 px-8"
    >

      <h2 className="text-5xl font-bold mb-16">
        Experience
      </h2>

      {jobs.map((job) => (
        <div
          key={job.role}
          className="mb-10 p-8 rounded-xl
          bg-white/5 border border-white/10"
        >

          <h3 className="text-2xl font-semibold">
            {job.role}
          </h3>

          <p className="text-sky-400">
            {job.company}
          </p>

          <p>{job.year}</p>

        </div>
      ))}

    </section>
  );
}