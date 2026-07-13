import "./AboutHero.css";
import aboutHero from "../../assets/images/about-hero.jpg";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="about-overlay">
        <h1>About WanderNest</h1>
        <p>
          Creating unforgettable journeys and connecting travelers with the
          world's most beautiful destinations.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;