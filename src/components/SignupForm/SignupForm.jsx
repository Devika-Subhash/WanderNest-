import "./SignupForm.css";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="signup-form">

      <h2>Create Account ✨</h2>

      <p>Join WanderNest and start planning your next adventure.</p>

      <form>

        <input
          type="text"
          placeholder=" Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          placeholder= " Phone Number"
          required
        />

        <input
          type="password"
          placeholder=" Password"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
        />

        <label className="terms">

          <input type="checkbox" required />

          I agree to the Terms & Conditions

        </label>

        <button type="submit" className="signup-btn">
          Create Account
        </button>

      </form>

      <p className="login-link">

        Already have an account?

        <Link to="/login"> Login</Link>

      </p>

    </div>
  );
}

export default SignupForm;