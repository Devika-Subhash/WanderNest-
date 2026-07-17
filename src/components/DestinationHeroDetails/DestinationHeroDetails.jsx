import "./DestinationHeroDetails.css";
import { FaStar, FaClock, FaTag } from "react-icons/fa";

function DestinationHeroDetails({ destination }) {
  return (
    <section
      className="destination-hero"
      style={{
        backgroundImage: `url(${destination.image})`,
      }}
    >
      <div className="hero-overlay">

        <div className="hero-card">

          <h1>{destination.name}</h1>

          <p className="hero-country">
            {destination.flag} {destination.country}
          </p>

          <div className="hero-rating">

            <FaStar />

            <span>
              {destination.rating} ({destination.reviews})
            </span>

          </div>

          <div className="hero-details">

            <div className="detail-item">

              💰

              <div>

                <small>Starting From</small>

                <h3>{destination.price}</h3>

              </div>

            </div>

            <div className="detail-item">

              <FaClock />

              <div>

                <small>Duration</small>

                <h3>{destination.duration}</h3>

              </div>

            </div>

            <div className="detail-item">

              <FaTag />

              <div>

                <small>Category</small>

                <h3>{destination.category}</h3>

              </div>

            </div>

          </div>

          <button className="hero-btn">

            ✈️ Book This Trip

          </button>

        </div>

      </div>
    </section>
  );
}

export default DestinationHeroDetails;