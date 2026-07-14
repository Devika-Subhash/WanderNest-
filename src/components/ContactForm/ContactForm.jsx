import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="section-title">
        <h2>Send Us a Message</h2>
        <p>
          Fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form">

        <div className="input-group">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          required
        />

        <textarea
          rows="6"
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default ContactForm;