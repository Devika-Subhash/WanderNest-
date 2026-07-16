import "./AuthLayout.css";
import authImage from "../../assets/images/auth-bg.jpg";

function AuthLayout({ children }) {
  return (
    <section className="auth">

      <div
        className="auth-left"
        style={{ backgroundImage: `url(${authImage})` }}
      >
        <div className="auth-overlay">
          <h1>Adventure Awaits</h1>

          <p>
            Explore breathtaking destinations and create unforgettable
            memories with WanderNest.
          </p>
        </div>
      </div>

      <div className="auth-right">
        {children}
      </div>

    </section>
  );
}

export default AuthLayout;