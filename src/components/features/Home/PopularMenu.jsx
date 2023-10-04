import { useEffect, useState } from "react";
import SectionHeading from "../../Section_heading/SectionHeading";
import MenuItemCard from "../../Cards/MenuItemCard";
import SectionFooterButton from "../../Button/SectionFooterButton";

const PopularMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((menu) => menu.category === "popular");
        setMenuItems(popularMenu);
      });
  }, []);

  let content;

  if (menuItems.length > 0) {
    content = menuItems.map((item) => (
      <MenuItemCard key={item._id} item={item} />
    ));
  }
  return (
    <section className="flex flex-col items-center gap-12 p-5 lg:h-screen lg:px-20 lg:py-10">
      <SectionHeading subTitle="---Check it out---" heading="FROM OUR MENU" />
      <div className="grid gap-10 md:grid-cols-2">{content}</div>
      <SectionFooterButton>View Full Menu</SectionFooterButton>
    </section>
  );
};

export default PopularMenu;
