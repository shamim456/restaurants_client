import SectionCover from "../../Cards/SectionCover";
import bannerImage from "../../../assets/menu/dessert-bg.jpeg";
import MenuItemCard from "../../Cards/MenuItemCard";
import useMenuItems from "../../../hooks/useMenuItems";

const Desserts = () => {
  const [menuItems, loading] = useMenuItems();
  const desserts = menuItems
    .filter((item) => item.category === "dessert")
    .slice(0, 6);
  return (
    <>
      <SectionCover
        image={bannerImage}
        title="DESSERTS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuItemCard
        link="/order/desserts"
        loading={loading}
        menuItems={desserts}
        buttonText="ORDER YOUR FAVOURITE FOOD"
      />
    </>
  );
};

export default Desserts;
