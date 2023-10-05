import Banner from "../components/features/OurMenu/Banner";
import Desserts from "../components/features/OurMenu/Desserts";
import Pizza from "../components/features/OurMenu/Pizza";
import Salads from "../components/features/OurMenu/Salads";
import Soups from "../components/features/OurMenu/Soups";
import TodayOffer from "../components/features/OurMenu/TodayOffer";

const OurMenu = () => {
  return (
    <>
      <Banner />
      <TodayOffer />
      <Desserts />
      <Pizza />
      <Salads />
      <Soups />
    </>
  );
};

export default OurMenu;
