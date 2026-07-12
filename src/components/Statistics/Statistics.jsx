import "./Statistics.css";

import statistics from "../../data/statistics";
import StatCard from "./StatCard";

function Statistics() {
  return (
    <section className="statistics">

      <div className="section-title">

        <h2>Our Journey in Numbers</h2>

        <p>
          Trusted by thousands of travelers worldwide, we continue to
          create unforgettable travel experiences every day.
        </p>

      </div>

      <div className="statistics-grid">

        {statistics.map((item) => (
          <StatCard
            key={item.id}
            icon={item.icon}
            number={item.number}
            title={item.title}
          />
        ))}

      </div>

    </section>
  );
}

export default Statistics;