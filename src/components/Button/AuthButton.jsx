import proptypes from "prop-types";

const AuthButton = ({ children }) => {
  return (
    <button className="px-8 w-full py-3 text-xl bg-yellow_light max-lg:border-b-4 font-semibold uppercase rounded-2xl hover:bg-blue_dark lg:hover:text-white border-b-4 border-[#1F2937] transition duration-300 ease-in-out ">
      {children}
    </button>
  );
};

AuthButton.propTypes = {
  children: proptypes.node.isRequired,
};

export default AuthButton;
