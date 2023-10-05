import SectionCover from "../../Cards/SectionCover";
import banner from "../../../assets/menu/soup-bg.jpg";
import MenuItemCard from "../../Cards/MenuItemCard";
import useMenuItems from "../../../hooks/useMenuItems";

const Soups = () => {
  const [menuItems, loading] = useMenuItems();
  const soups = menuItems
    .filter((item) => item.category === "soup")
    .slice(0, 6);
  return (
    <>
      <SectionCover
        image={banner}
        title="SOUPS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuItemCard
        menuItems={soups}
        buttonText="ORDER YOUR FAVOURITE FOOD"
        loading={loading}
      />
    </>
  );
};

export default Soups;
