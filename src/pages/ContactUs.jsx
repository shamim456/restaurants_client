import SectionCover from "../components/Cards/SectionCover";
import banner from "../assets/contact/banner.jpg";

const ContactUs = () => {
  return (
    <main>
      <SectionCover
        image={banner}
        title="CONTACT US"
        description="Would you like to try a dish?"
      />
    </main>
  );
};

export default ContactUs;
