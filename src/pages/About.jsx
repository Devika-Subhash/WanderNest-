import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/AboutHero/AboutHero";
import OurStory from "../components/OurStory/OurStory";
import MissionVision from "../components/MissionVision/MissionVision";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhyChoose />
      <Team />
      <Footer />
    </>
  );
}

export default About;