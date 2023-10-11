import SectionCover from "../components/Cards/SectionCover";
import banner from "../assets/contact/banner.jpg";
import OurLocation from "../components/features/Contact/OurLocation";
import ContactForm from "../components/features/Contact/ContactForm";

const ContactUs = () => {
  return (
    <main>
      <SectionCover
        image={banner}
        title="CONTACT US"
        description="Would you like to try a dish?"
      />
      <OurLocation />
      <ContactForm />
    </main>
  );
};

export default ContactUs;
