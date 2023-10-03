const SectionHeading = ({ subTitle, heading }) => {
  return (
    <div className="flex flex-col items-center pb-12 gap-4">
      <p className="text-[#D99904] text-xl">{subTitle}</p>
      <div className="flex flex-col items-center gap-5">
        <div className="h-0.5 w-[424px] bg-[#E8E8E8]" />
        <h2 className="text-4xl">{heading}</h2>
        <div className="h-0.5 w-[424px] bg-[#E8E8E8]" />
      </div>
    </div>
  );
};
SectionHeading.propTypes = {
  subTitle: String,
  heading: String,
};
export default SectionHeading;
