import MenuItemCard from "../../Cards/MenuItemCard";
import useMenuItems from "../../../hooks/useMenuItems";

const PopularMenu = () => {
  const [menuItems, loading] = useMenuItems();
  const PopularMenuItems = menuItems.filter(
    (menuItem) => menuItem.category === "popular"
  );

  return (
    <section>
      <MenuItemCard
        menuItems={PopularMenuItems}
        loading={loading}
        sectionHeading="FROM OUR MENU"
        subTitle="---Check it out---"
        buttonText="View Full  Menu"
      />
    </section>
  );
};

export default PopularMenu;
