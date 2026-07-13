import "./OurStory.css";
import storyImage from "../../assets/images/our-story.jpg";

function OurStory() {
  return (
    <section className="our-story">

      <div className="story-image">
        <img src={storyImage} alt="Our Story" />
      </div>

      <div className="story-content">

        <h2>Our Story</h2>

        <p>
          WanderNest was born from a passion for travel and a dream of helping
          people discover the world's most beautiful destinations. We believe
          every journey should create unforgettable memories and meaningful
          experiences.
        </p>

        <p>
          From relaxing beach vacations to exciting mountain adventures and
          vibrant city escapes, our goal is to make travel simple, affordable,
          and enjoyable for everyone.
        </p>

        <p>
          Today, WanderNest proudly connects thousands of travelers with
          carefully curated destinations, trusted accommodations, and memorable
          experiences around the globe.
        </p>

      </div>

    </section>
  );
}

export default OurStory;