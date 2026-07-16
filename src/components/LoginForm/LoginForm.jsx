import "./LoginForm.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="login-form">

      <h2>Welcome Back 👋</h2>

      <p>Sign in to continue your journey with WanderNest.</p>

      <form>

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <div className="login-options">

          <label>

            <input type="checkbox" />

            Remember Me

          </label>

          <a href="#">Forgot Password?</a>

        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="google-btn">

        <FaGoogle />

        Continue with Google

      </button>

      <p className="signup-link">

        Don't have an account?

        <Link to="/signup"> Sign Up</Link>

      </p>

    </div>
  );
}

export default LoginForm;