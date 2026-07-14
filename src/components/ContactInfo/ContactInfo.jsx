import "./ContactInfo.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <section className="contact-info">

      <div className="section-title">
        <h2>Get In Touch</h2>

        <p>
          Have questions about your next adventure? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-card">

          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Our Office</h3>

          <p>
            Kochi, Kerala,
            <br />
            India
          </p>

        </div>

        <div className="contact-card">

          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <h3>Email</h3>

          <p>
            support@wandernest.com
            <br />
            bookings@wandernest.com
          </p>

        </div>

        <div className="contact-card">

          <div className="contact-icon">
            <FaPhoneAlt />
          </div>

          <h3>Phone</h3>

          <p>
            +91 98765 43210
            <br />
            Mon - Sat, 9 AM - 6 PM
          </p>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;