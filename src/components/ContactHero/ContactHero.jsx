import "./ContactHero.css";
import heroImage from "../../assets/images/contact-hero.jpg";

function ContactHero() {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="contact-overlay">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Whether you're planning your next trip
          or have a question, our team is here to help.
        </p>

      </div>
    </section>
  );
}

export default ContactHero;