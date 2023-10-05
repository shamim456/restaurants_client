import backgroundImage from "../../../assets/home/featured.jpg";
import PrimaryButton from "../../Button/PrimaryButton";
import SectionHeading from "../../Section_heading/SectionHeading";
const FromOurMenu = () => {
  const backgroundImageUrl = `url(${backgroundImage})`;
  const sectionStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      style={sectionStyle}
      className="relative w-full h-[900px] md:h-[1000px] my-20 lg:h-screen bg-fixed"
    >
      <div className="w-full h-full opacity-40 bg-dark" />
      <div className="absolute w-10/12 transform -translate-x-1/2 top-20 left-1/2">
        <SectionHeading
          subTitle="---Check it out---"
          heading="FROM OUR MENU"
          headingWhite
        />
        <div className="flex flex-col gap-10 lg:items-center lg:flex-row">
          <img src={backgroundImage} alt="" className="w-full lg:w-1/2" />
          <div className="flex flex-col gap-2 text-center text-white lg:text-start">
            <h4 className="text-2xl">March 20, 2023</h4>
            <h4 className="text-4xl">WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <PrimaryButton>Read More</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenu;
