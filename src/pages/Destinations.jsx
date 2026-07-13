import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import DestinationHero from "../components/DestinationHero/DestinationHero";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import Footer from "../components/Footer/Footer";

import destinations from "../data/destinations";

function Destinations() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <DestinationHero />

      <SearchFilter
        search={search}
        setSearch={setSearch}
      />

      <PopularDestinations destinations={filteredDestinations} />

      <Footer />
    </>
  );
}

export default Destinations;