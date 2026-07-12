import "./StatCard.css";


function StatCard({ icon: Icon, number, title }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <Icon />
      </div>

      <h2>{number}</h2>

      <p>{title}</p>
    </div>
  );
}

export default StatCard;