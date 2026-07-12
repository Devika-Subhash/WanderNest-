import "./TestimonialCard.css";

function TestimonialCard(props) {
  return (
    <div className="testimonial-card">
      <img
        src={props.image}
        alt={props.name}
        className="testimonial-img"
      />

      <h3>{props.name}</h3>

      <p>{props.location}</p>

      <p>⭐⭐⭐⭐⭐</p>

      <p>"{props.review}"</p>
    </div>
  );
}

export default TestimonialCard;