import SectionCover from "../../Cards/SectionCover";
import bannerImage from "../../../assets/menu/pizza-bg.jpg";
import MenuItemCard from "../../Cards/MenuItemCard";
import useMenuItems from "../../../hooks/useMenuItems";

const Pizza = () => {
  const [menuItems, loading] = useMenuItems();
  const pizza = menuItems
    .filter((item) => item.category === "pizza")
    .slice(0, 6);
  return (
    <>
      <SectionCover
        title="PIZZA"
        image={bannerImage}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuItemCard
        menuItems={pizza}
        buttonText="ORDER YOUR FAVOURITE FOOD"
        loading={loading}
      />
    </>
  );
};

export default Pizza;
