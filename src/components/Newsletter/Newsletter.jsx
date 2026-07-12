import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <h2>Ready for Your Next Adventure?</h2>

        <p>
          Join over <strong>50,000 travelers</strong> and receive exclusive travel
          deals, destination guides and special offers directly to your inbox.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}

export default Newsletter;