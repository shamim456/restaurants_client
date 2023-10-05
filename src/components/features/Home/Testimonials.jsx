import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactStarsRating from "react-awesome-stars-rating";
import { Carousel } from "react-responsive-carousel";
import quote from "../../../assets/icon/quote.png";
import SectionHeading from "../../Section_heading/SectionHeading";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);

  let content;

  if (testimonials.length > 0) {
    content = testimonials.map((testimonial) => (
      <div
        className="flex flex-col items-center mb-10 lg:px-20"
        key={testimonial._id}
      >
        <ReactStarsRating
          isEdit={false}
          value={testimonial.rating}
          className="flex gap-1"
        />
        <div className="w-10 h-10 my-10">
          <img src={quote} alt="" className="w-10 h-10" />
        </div>
        <p>{testimonial.details}</p>
        <p className="text-3xl font-semibold text-yellow">{testimonial.name}</p>
      </div>
    ));
  }
  return (
    <section>
      <SectionHeading
        subTitle="---What Our Clients Say---"
        heading="TESTIMONIALS"
      />
      <div className="px-5 pb-20 lg:px-40">
        <Carousel
          infiniteLoop
          stopOnHover={false}
          autoPlay
          className="flex flex-col items-center"
          showThumbs={false}
        >
          {content}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
