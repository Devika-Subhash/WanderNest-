import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DestinationAbout from "../components/DestinationAbout/DestinationAbout";
import DestinationHeroDetails from "../components/DestinationHeroDetails/DestinationHeroDetails";
import DestinationFeatures from "../components/DestinationFeatures/DestinationFeatures";
import destinations from "../data/destinations";
import DestinationGallery from "../components/DestinationGallery/DestinationGallery";
import IncludedSection from "../components/IncludedSection/IncludedSection";
import BookingCTA from "../components/BookingCTA/BookingCTA";
function DestinationDetails() {

  const { id } = useParams();

  const destination = destinations.find(
    item => item.id === Number(id)
  );

  if (!destination) {

    return (
      <>
        <Navbar />
        <h1 style={{padding:"150px",textAlign:"center"}}>
          Destination Not Found
        </h1>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <DestinationHeroDetails destination={destination}/>
      <DestinationAbout destination={destination}/>
      <DestinationGallery destination={destination}/>
      <DestinationFeatures destination={destination} />
      <IncludedSection destination={destination} />
      <BookingCTA destination={destination} />
      
      <Footer />
    </>
  );
}
export default DestinationDetails;