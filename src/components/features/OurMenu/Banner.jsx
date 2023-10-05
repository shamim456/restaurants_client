import SectionCover from "../../Cards/SectionCover";
import bannerImage from "../../../assets/menu/banner3.jpg";

const Banner = () => {
  return (
    <SectionCover
      image={bannerImage}
      title="OUR MENU"
      description="Would you like to try a dish?"
    />
  );
};

export default Banner;
