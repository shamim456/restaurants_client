import PropTypes from "prop-types";

const TextBox = ({ type, label, placeHolder, className }) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label className="text-xl font-medium text-yellow">{label}</label>
      <textarea
        type={type}
        placeholder={placeHolder}
        className="w-full px-4 pt-3 rounded-lg h-[300px]"
      />
    </div>
  );
};

TextBox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

export default TextBox;
