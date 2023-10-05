import useMenuItems from "../../../hooks/useMenuItems";
import MenuItemCard from "../../Cards/MenuItemCard";

const TodayOffer = () => {
  const [menuItems, loading] = useMenuItems();
  const todayOffer = menuItems.filter((item) => item.category === "offered");

  return (
    <MenuItemCard
      menuItems={todayOffer}
      loading={loading}
      subTitle="---Don't miss---"
      sectionHeading="TODAY'S OFFER"
      buttonText="ORDER YOUR FAVOURITE FOOD"
    />
  );
};

export default TodayOffer;
