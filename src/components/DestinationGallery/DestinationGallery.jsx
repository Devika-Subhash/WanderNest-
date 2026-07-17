import "./DestinationGallery.css";

function DestinationGallery({ destination }) {

  return (

    <section className="destination-gallery">

      <div className="gallery-header">

        <span>Gallery</span>

        <h2>Explore {destination.name}</h2>

        <p>
          A glimpse of the unforgettable beauty waiting for you.
        </p>

      </div>

      <div className="gallery-grid">

        {destination.gallery.map((image,index)=>(

          <div
            className="gallery-card"
            key={index}
          >

            <img
              src={image}
              alt={destination.name}
            />

          </div>

        ))}

      </div>

    </section>

  );

}

export default DestinationGallery;