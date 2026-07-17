import "./BookingCTA.css";

function BookingCTA({ destination }) {
  return (
    <section className="booking-cta">

      <div className="cta-content">

        <span>Start Your Journey</span>

        <h2>
          Ready to Explore {destination.name}?
        </h2>

        <p>
          Book your dream vacation today and experience unforgettable memories,
          breathtaking landscapes, and world-class hospitality.
        </p>

        <button>
          ✈ Book This Trip
        </button>

      </div>

    </section>
  );
}

export default BookingCTA;