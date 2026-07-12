import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonials from "../components/Testimonials/Testimonials";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations  />
      <WhyChoose />
      <Testimonials />
    </>
  );
}

export default Home;