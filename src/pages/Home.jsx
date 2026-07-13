import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonials from "../components/Testimonials/Testimonials";
import Statistics from "../components/Statistics/Statistics";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import destinations from "../data/destinations";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations destinations={destinations} />
      <WhyChoose />
      <Testimonials />
      <Statistics />
      <Newsletter />
      <Footer  />
    </>
  );
}

export default Home;