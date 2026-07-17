import "./DestinationAbout.css";

function DestinationAbout({ destination }) {
  return (
    <section className="destination-about">

      <div className="about-container">

        <div className="about-content">

          <span className="about-tag">
            Discover {destination.name}
          </span>

          <h2>Why Visit {destination.name}?</h2>

          <p>
            {destination.description}
          </p>

        </div>

      </div>
    </section>
  );
}

export default DestinationAbout;