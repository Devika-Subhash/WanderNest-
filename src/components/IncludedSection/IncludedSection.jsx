import "./IncludedSection.css";

function IncludedSection({ destination }) {
  return (
    <section className="included-section">

      <div className="included-header">

        <span>Included</span>

        <h2>What's Included</h2>

        <p>
          Everything you need for a comfortable and memorable trip.
        </p>

      </div>

      <div className="included-grid">

        {destination.included.map((item, index) => (

          <div
            className="included-card"
            key={index}
          >

            <div className="check-icon">
              ✓
            </div>

            <h3>{item}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default IncludedSection;