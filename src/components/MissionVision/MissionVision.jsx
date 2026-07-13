import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="section-title">
        <h2>Our Mission & Vision</h2>
        <p>
          We strive to inspire people to explore the world by creating
          memorable, safe, and affordable travel experiences.
        </p>
      </div>

      <div className="mission-grid">

        {/* Mission Card */}
        <div className="mission-card">

          <div className="mission-icon">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            To make travel accessible, affordable, and enjoyable for everyone by
            providing carefully curated destinations, seamless booking
            experiences, and exceptional customer service.
          </p>

        </div>

        {/* Vision Card */}
        <div className="mission-card">

          <div className="mission-icon">
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            To become one of the world's most trusted travel platforms,
            connecting millions of travelers with unforgettable adventures
            across the globe.
          </p>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;