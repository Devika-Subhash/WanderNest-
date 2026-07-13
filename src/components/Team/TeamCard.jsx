import "./Team.css";

function TeamCard({ image, name, role }) {
  return (
    <div className="team-card">

      <img
        src={image}
        alt={name}
        className="team-img"
      />

      <h3>{name}</h3>

      <p>{role}</p>

    </div>
  );
}

export default TeamCard;