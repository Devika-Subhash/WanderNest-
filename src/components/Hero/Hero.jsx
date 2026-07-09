import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          ✈️ Explore the World
        </span>

        <h1>
          Discover Your
          <br />
          <span>Next Adventure</span>
        </h1>

        <p>
          Find breathtaking destinations, unforgettable experiences,
          and plan your perfect journey with WanderNest.
        </p>

        <div className="hero-buttons">

          <button className="explore-btn">
            Explore Now
          </button>

          <button className="learn-btn">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;