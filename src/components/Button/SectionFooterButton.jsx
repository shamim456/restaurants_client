import proptypes from "prop-types";

const SectionFooterButton = ({ children }) => {
  return (
    <div>
      <button className="px-8 py-4 text-xl max-lg:border-b-4 font-semibold uppercase rounded-2xl hover:bg-blue_dark lg:hover:text-white border-b-4 border-[#1F2937] transition duration-300 ease-in-out ">
        {children}
      </button>
    </div>
  );
};

SectionFooterButton.propTypes = {
  children: proptypes.node.isRequired,
};

export default SectionFooterButton;
