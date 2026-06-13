const research = [
  {
    year: "2016",
    title: "Brain Wave Control System"
  },
  {
    year: "2019",
    title: "M.Tech Data Science"
  },
  {
    year: "2020",
    title: "Mastercard Finicity"
  },
  {
    year: "2021",
    title: "PhD IIT Bombay"
  },
  {
    year: "2025",
    title: "Patent Portfolio Expansion"
  }
];

export default function ResearchTimeline() {
  return (
    <section className="max-w-6xl mx-auto py-32 px-8">

      <h2 className="text-5xl font-bold mb-20">
        Research Journey
      </h2>

      <div className="relative">

        <div className="absolute left-5 top-0 bottom-0 w-1 bg-sky-500" />

        {research.map((item) => (

          <div
            key={item.year}
            className="relative pl-20 mb-16"
          >

            <div className="
              absolute
              left-0
              w-10
              h-10
              rounded-full
              bg-sky-500
            " />

            <h3 className="text-3xl font-bold">
              {item.year}
            </h3>

            <p className="text-gray-400">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}