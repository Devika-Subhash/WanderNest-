import DestinationCard from "../DestinationCard/DestinationCard";
import "./PopularDestinations.css";

function PopularDestinations({ destinations }) {
  return (
    <section className="popular-destinations">
      <div className="section-title">
        <h2>Popular Destinations</h2>
        <p>Discover our most loved destinations around the world.</p>
      </div>

      <div className="destination-grid">
        {destinations.length > 0 ? (
          destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              {...destination}
            />
          ))
        ) : (
          <h2>No destinations found.</h2>
        )}
      </div>
    </section>
  );
}

export default PopularDestinations;