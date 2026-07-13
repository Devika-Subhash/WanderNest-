import "./Team.css";

import team from "../../data/team";
import TeamCard from "./TeamCard.jsx";

function Team() {
  return (
    <section className="team">

      <div className="section-title">

        <h2>Meet Our Team</h2>

        <p>
          Our passionate travel experts are dedicated to making every journey
          unforgettable.
        </p>

      </div>

      <div className="team-grid">

        {team.map((member) => (
          <TeamCard
            key={member.id}
            {...member}
          />
        ))}

      </div>

    </section>
  );
}

export default Team;