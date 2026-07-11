import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations"
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations  />
    </>
  );
}

export default Home;