import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>What Our Travelers Say</h2>
        <p>
          Real experiences from thousands of happy travelers around the world.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;