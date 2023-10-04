import propTypes from "prop-types";
const SectionHeading = ({ subTitle, heading, headingWhite }) => {
  return (
    <div className="flex flex-col items-center gap-4 pb-12">
      <p className="text-xl text-yellow">{subTitle}</p>
      <div className="flex flex-col items-center gap-5">
        <div className="h-0.5 w-[424px] bg-[#E8E8E8]" />
        <h2 className={`text-4xl ${headingWhite ? "text-white" : "text-dark"}`}>
          {heading}
        </h2>
        <div className="h-0.5 w-[424px] bg-[#E8E8E8]" />
      </div>
    </div>
  );
};
SectionHeading.propTypes = {
  subTitle: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  headingWhite: propTypes.bollean,
};
export default SectionHeading;
