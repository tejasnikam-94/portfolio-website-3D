"use client";

import CountUp from "react-countup";

export default function StatCounter() {
  return (
    <section className="py-24">

      <div className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-4
      gap-8
      text-center
      ">

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={6} />
          </h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={3} />
          </h2>
          <p>Patents</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={2} />
          </h2>
          <p>Publications</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={1} />
          </h2>
          <p>PhD Candidate</p>
        </div>

      </div>

    </section>
  );
}