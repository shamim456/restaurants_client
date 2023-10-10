import useMenuItems from "../../../hooks/useMenuItems";
import Tab from "../../Tab/Tab";

const menuItems = [
  "salad",
  "pizza",
  "soups",
  "desserts",
  "drinks",
  "tody's offer",
  "soups",
  "desserts",
  "drinks",
  "tody's offer",
];
const Menu = () => {
  const [menuItem] = useMenuItems();
  const salad = menuItem.filter((menu) => menu.category === "salad");
  const pizza = menuItem.filter((menu) => menu.category === "pizza");
  const soups = menuItem.filter((menu) => menu.category === "soup");
  const desserts = menuItem.filter((menu) => menu.category === "dessert");
  const drinks = menuItem.filter((menu) => menu.category === "drinks");
  const todyOffer = menuItem.filter((menu) => menu.category === "offered");
  const newMenu = [salad, pizza, soups, desserts, drinks, todyOffer];
  console.log(newMenu);

  return (
    <section className="py-10  lg:px-20">
      <Tab tabItems={menuItems} tabPanel={newMenu} />
    </section>
  );
};

export default Menu;
