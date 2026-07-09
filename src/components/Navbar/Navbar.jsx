import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPlaneDeparture } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaPlaneDeparture className="logo-icon" />
        <span>WanderNest</span>
      </Link>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/destinations" onClick={() => setMenuOpen(false)}>
            Destinations
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="nav-buttons">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/signup" className="signup-btn">
          Sign Up
        </NavLink>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;