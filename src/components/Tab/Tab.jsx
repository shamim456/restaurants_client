import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import AddToCartCard from "../Cards/AddToCartCard";
import { useParams } from "react-router-dom";
import nextIcon from "../../assets/icon/next.png";
import backIcon from "../../assets/icon/back.png";

const Tab = ({ tabItems, tabPanel }) => {
  // .................
  const [startIndex, setStartIndex] = useState(0);
  const [mobileVisibleTags, setMobileVisibleTags] = useState([]);
  const [laptopVisibleTags, setLaptopVisibleTags] = useState([]);

  // Update visible tags whenever the startIndex changes
  const endForMobile = startIndex + 3;
  const endForLaptop = startIndex + 5;
  useEffect(() => {
    setMobileVisibleTags(tabItems.slice(startIndex, endForMobile));
    setLaptopVisibleTags(tabItems.slice(startIndex, endForLaptop));
  }, [endForLaptop, endForMobile, startIndex, tabItems]);

  const nextSlide = () => {
    if (startIndex + 1 < tabItems.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) => prevStartIndex - 1);
    }
  };
  // .................
  const { category } = useParams();
  const initialIndex = tabItems.indexOf(category);
  console.log(initialIndex);
  const [activeTab, setActiveTab] = useState(initialIndex);

  return (
    <>
      {/* for laptop */}
      <ul className="items-center justify-center hidden gap-6 px-3 text-lg font-semibold lg:flex lg:text-2xl">
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="px-2 py-2 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-gray_light "
        >
          <img src={backIcon} alt="" className="w-4 h-4" />
        </button>
        {laptopVisibleTags.map((tab, index) => (
          <li
            className={`${
              activeTab === index ? " text-yellow border-b-4 border-yellow" : ""
            } cursor-pointer uppercase`}
            key={Math.random()}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
        <button
          onClick={nextSlide}
          disabled={startIndex + 1 >= tabItems.length - 4}
          className="px-2 py-2 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-gray_light "
        >
          <img src={nextIcon} alt="" className="w-4 h-4" />
        </button>
      </ul>

      {/* for mobile device */}
      <ul className="flex items-center justify-center gap-3 px-3 text-lg font-semibold lg:hidden lg:text-2xl">
        <button onClick={prevSlide} disabled={startIndex === 0}>
          <img src={backIcon} alt="" className="w-4 h-4" />
        </button>
        {mobileVisibleTags.map((tab, index) => (
          <li
            className={`${
              activeTab === index ? " text-yellow border-b-4 border-yellow" : ""
            } cursor-pointer uppercase`}
            key={Math.random()}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
        <button
          onClick={nextSlide}
          disabled={startIndex + 1 >= tabItems.length - 4}
        >
          <img src={nextIcon} alt="" className="w-4 h-4" />
        </button>
      </ul>

      <div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {tabPanel.map((tabItem, index) => {
            return activeTab === index
              ? tabItem.map((menu) => (
                  <AddToCartCard item={menu} key={menu._id} />
                ))
              : null;
          })}
        </div>
      </div>
    </>
  );
};

Tab.propTypes = {
  tabItems: PropTypes.array,
  tabPanel: PropTypes.array,
};

export default Tab;
