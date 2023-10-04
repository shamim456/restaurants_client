import PropTypes from "prop-types";

const MenuItemCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex flex-col items-center md:items-start md:space-x-4 md:flex-row">
      <img
        src={image}
        alt=""
        className="w-[118px] h-[104px]"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />
      <div className="text-center md:text-start">
        <h4 className="text-xl ">
          {name} <span className="hidden lg:inline">------------------</span>
        </h4>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};

MenuItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default MenuItemCard;
