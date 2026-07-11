import "./PopularDestinations.css";

import DestinationCard from "../DestinationCard/DestinationCard";

import destinations from "../../data/destinations";

function PopularDestinations() {
  return (
    <section className="popular-destinations">

      <h2>Popular Destinations</h2>

      <p>
        Explore the world's most loved destinations carefully selected for unforgettable experiences.
      </p>

      <div className="destination-grid">

        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            name={destination.name}
            country={destination.country}
            rating={destination.rating}
            reviews={destination.reviews}
            duration={destination.duration}
            price={destination.price}
          />
        ))}

      </div>

    </section>
  );
}

export default PopularDestinations;