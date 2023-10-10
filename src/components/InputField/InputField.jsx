import PropTypes from "prop-types";

const InputField = ({ type, label, placeHolder, className }) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label className="text-xl font-medium text-yellow">{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-12 px-4 rounded-lg"
      />
    </div>
  );
};

// InputField.PropTypes = {
//   type: PropTypes.string,
// };

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;
