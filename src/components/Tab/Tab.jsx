import PropTypes from "prop-types";
import { useState } from "react";
import AddToCartCard from "../Cards/AddToCartCard";
import { useParams } from "react-router-dom";

const Tab = ({ tabItems, tabPanel }) => {
  const { category } = useParams();
  const initialIndex = tabItems.indexOf(category);
  console.log(initialIndex);
  const [activeTab, setActiveTab] = useState(initialIndex);
  return (
    <>
      <ul className="flex justify-center gap-10 text-2xl font-semibold">
        {tabItems.map((tab, index) => (
          <li
            className={`${
              activeTab === index
                ? " text-yellow pb-1 border-b-4 border-yellow"
                : ""
            } cursor-pointer uppercase`}
            key={Math.random()}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {tabPanel.map((tabItem, index) => {
            // console.log(tabItem);
            return activeTab === index
              ? tabItem.map((menu) => (
                  <AddToCartCard item={menu} key={menu._id} />
                ))
              : null;
          })}
        </div>
        {/* {activeTab === 0 ? <p>shamim</p> : null}
        {activeTab === 1 ? <p>ritu</p> : null}
        {activeTab === 2 ? <p>siam</p> : null}
        {activeTab === 3 ? <p>rafik</p> : null}
        {activeTab === 4 ? <p>kuddus</p> : null} */}
      </div>
    </>
  );
};

Tab.propTypes = {
  tabItems: PropTypes.array,
  tabPanel: PropTypes.array,
};

export default Tab;
