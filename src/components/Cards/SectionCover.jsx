import PropTypes from "prop-types";

const SectionCover = ({ image, className, isWhite, title, description }) => {
  const backgroundImageUrl = `url(${image})`;
  const backgroundImageStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className={`${className}md:px-10 lg:px-40 lg:py-10 h-[70vh] bg-fixed flex justify-center items-center`}
      style={backgroundImageStyle}
    >
      <div
        className={`w-full px-5 py-5 mx-auto text-center ${
          isWhite ? "bg-white text-dark" : "bg-dark opacity-60 text-white"
        }  lg:px-20 lg:py-20`}
      >
        <h4 className="mb-4 text-5xl">{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};

SectionCover.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isWhite: PropTypes.boolean,
};

export default SectionCover;
