import SectionCover from "../../Cards/SectionCover";
import Banner from "../../../assets/menu/salad-bg.jpg";
import MenuItemCard from "../../Cards/MenuItemCard";
import useMenuItems from "../../../hooks/useMenuItems";

const Salads = () => {
  const [menuItems, loading] = useMenuItems();
  const salads = menuItems
    .filter((item) => item.category === "salad")
    .slice(0, 6);
  return (
    <>
      <SectionCover
        image={Banner}
        title="SALADS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuItemCard
        link="/order/salad"
        menuItems={salads}
        buttonText="ORDER YOUR FAVOURITE FOOD"
        loading={loading}
      />
    </>
  );
};

export default Salads;
