import bannerImage from "../../../assets/home/chef-service.jpg";
const QuoteSection = () => {
  return (
    <section className="py-10 relative">
      <img src={bannerImage} alt="chef service" />
      <div className="bg-white hidden lg:inline p-16 text-center w-1/2 mx-auto absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
        <h4 className="text-5xl mb-4">Bistro Boss</h4>
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
