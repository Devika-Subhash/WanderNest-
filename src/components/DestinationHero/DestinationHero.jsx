import "./DestinationHero.css";
import heroImage from "../../assets/images/destination-hero.jpg";

function DestinationHero() {
  return (
    <section
      className="destination-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1>Explore Amazing Destinations</h1>

        <p>
          Discover breathtaking places around the world and find your perfect
          getaway with WanderNest.
        </p>
      </div>
    </section>
  );
}

export default DestinationHero;