import propTypes from "prop-types";
import PrimaryButton from "../Button/PrimaryButton";

const AddToCartCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="relative flex flex-col items-center gap-8 pb-8 bg-gray_background">
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col gap-2 px-5 text-center">
        <h3 className="text-2xl font-semibold text-dark">{name} </h3>
        <p className="text-gray_dark">{recipe}</p>
        <p className="absolute px-2 py-1 text-white rounded-lg top-3 bg-blue_dark right-3">
          ${price}
        </p>
      </div>
      <PrimaryButton>add to cart</PrimaryButton>
    </div>
  );
};
AddToCartCard.propTypes = {
  item: propTypes.shape({
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    recipe: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
  }),
};

export default AddToCartCard;
