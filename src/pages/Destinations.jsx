import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import DestinationHero from "../components/DestinationHero/DestinationHero";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import Footer from "../components/Footer/Footer";

import destinations from "../data/destinations";

function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredDestinations = destinations.filter((destination) => {
  const matchesSearch = destination.name.toLowerCase().includes(search.toLowerCase());
  const matchesCategory = category === "All" || destination.category === category;
  return matchesSearch && matchesCategory;
});
  

  return (
    <>
      <Navbar />
      <DestinationHero />

      <SearchFilter
        search={search}
        setSearch={setSearch}
         category={category}
         setCategory={setCategory}
      />

      <PopularDestinations destinations={filteredDestinations} />

      <Footer />
    </>
  );
}

export default Destinations;