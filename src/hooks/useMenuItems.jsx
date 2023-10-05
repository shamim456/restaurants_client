import { useEffect, useState } from "react";

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      });
  }, []);
  console.log(menuItems);
  return [menuItems, loading];
};

export default useMenuItems;
