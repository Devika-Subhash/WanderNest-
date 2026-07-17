import "./DestinationFeatures.css";

function DestinationFeatures({ destination }) {
  return (
    <section className="destination-features">

      <div className="section-header">
        <span>Experience</span>
        <h2>Why You'll Love {destination.name}</h2>
        <p>
          Every destination offers unforgettable experiences. Here's what makes{" "}
          {destination.name} special.
        </p>
      </div>

      <div className="features-grid">

        {destination.highlights.map((item, index) => (

          <div
            className="feature-card"
            key={index}
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default DestinationFeatures;