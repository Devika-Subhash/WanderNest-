import "./WhyChoose.css";

import {
  FaGlobeAsia,
  FaShieldAlt,
  FaHeadset,
  FaWallet,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaWallet />,
      title: "Best Price Guarantee",
      text: "Get the best travel deals with transparent pricing and no hidden charges.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Handpicked Destinations",
      text: "Discover carefully selected destinations loved by travelers around the world.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Secure Booking",
      text: "Book your trips confidently with secure payment and trusted partners.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      text: "Our travel experts are always available to assist you anytime, anywhere.",
    },
  ];

  return (
    <section className="why-choose">

      <div className="section-title">
        <h2>Why Choose WanderNest?</h2>
        <p>
          We make every journey memorable with trusted services,
          affordable pricing and exceptional customer experience.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChoose;