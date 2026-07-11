import "./DestinationCard.css";
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function DestinationCard(props) {
  return (
    <div className="destination-card">

      <img
        src={props.image}
        alt={props.name}
        className="destination-image"
      />

      <div className="card-content">

        <h3>{props.name}</h3>

        <p><FaMapMarkerAlt />{props.country}</p>

        <div className="card-info">
          <span><FaStar color="#F4A261" /> {props.rating} ({props.reviews})</span>
          <span>{props.duration}</span>
        </div>

        <div className="card-footer">

          <h2>{props.price}</h2>

          <button>Book Now →</button>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;