import "./Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPlaneDeparture
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo */}
                <div className="footer-column">

                    <h2 className="footer-logo">
                        <FaPlaneDeparture /> WanderNest
                    </h2>

                    <p>
                        Discover breathtaking destinations and create unforgettable memories
                        with WanderNest.
                    </p>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>

                </div>

                {/* Quick Links */}
                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>

                </div>

                {/* Destinations */}
                <div className="footer-column">

                    <h3>Popular Destinations</h3>

                    <ul>
                        <li>Bali</li>
                        <li>Paris</li>
                        <li>Maldives</li>
                        <li>Dubai</li>
                        <li>Switzerland</li>
                    </ul>

                </div>

                {/* Contact */}
                <div className="footer-column">

                    <h3>Contact</h3>

                    <p>
                        <FaEnvelope /> support@wandernest.com
                    </p>

                    <p>
                        <FaPhoneAlt /> +91 98765 43210
                    </p>

                    <p>
                        <FaMapMarkerAlt /> Kochi, Kerala
                    </p>

                </div>

            </div>

            <hr />

            <div className="footer-bottom">

                <p>
                    © 2026 WanderNest. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;