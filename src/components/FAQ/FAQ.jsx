import { useState } from "react";
import "./FAQ.css";
import faq from "../../data/faq";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq">

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about WanderNest.
        </p>
      </div>

      <div className="faq-container">

        {faq.map((item) => (
          <div className="faq-item" key={item.id}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(item.id)}
            >
              <span>{item.question}</span>

              {openId === item.id ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {openId === item.id && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;