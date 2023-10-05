import bannerImage from "../../../assets/home/chef-service.jpg";
const QuoteSection = () => {
  const backgroundImageUrl = `url(${bannerImage})`;
  const backgroundImageStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section
      className="md:px-10 lg:px-20 lg:py-10 h-[70vh] bg-fixed flex justify-center items-center "
      style={backgroundImageStyle}
    >
      <div className="px-5 py-5 mx-auto text-center bg-white lg:px-20 lg:py-20 ">
        <h4 className="mb-4 text-5xl">Bistro Boss</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
