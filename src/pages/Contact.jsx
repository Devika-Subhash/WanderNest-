import Navbar from "../components/Navbar/Navbar";
import ContactHero from "../components/ContactHero/ContactHero";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactForm from "../components/ContactForm/ContactForm";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
}

export default Contact;