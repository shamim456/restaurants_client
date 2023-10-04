import propTypes from "prop-types";
const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="px-8 py-3 text-xl font-semibold uppercase transition duration-300 ease-in-out border-b-4 rounded-lg bg-gray_light text-yellow border-yellow hover:bg-blue_dark">
        {children}
      </button>
    </div>
  );
};
PrimaryButton.propTypes = {
  children: propTypes.node.isRequired,
};

export default PrimaryButton;
