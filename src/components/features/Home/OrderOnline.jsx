// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionHeading from "../../Section_heading/SectionHeading";
const OrderOnline = () => {
  return (
    <section className=" lg:p-20 w-full">
      <SectionHeading
        heading="ORDER ONLINE"
        subTitle="---From 11:00am to 10:00pm---"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper overflow-visible"
      >
        <SwiperSlide className=" cursor-pointer">
          <img src={slide1} alt="" className="w-full" />
          <h4 className="text-4xl uppercase -mt-32 mb-10 text-center text-[#FFFFFF]">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={slide2} alt="" className="w-full" />
          <h4 className="text-4xl uppercase -mt-32 text-center text-white">
            pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={slide3} alt="" className="w-full" />
          <h4 className="text-4xl uppercase -mt-32 text-center text-white">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={slide4} alt="" className="w-full" />
          <h4 className="text-4xl uppercase -mt-32 text-center text-white">
            desert
          </h4>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={slide5} alt="" className="w-full" />
          <h4 className="text-4xl uppercase -mt-32 text-white text-center">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OrderOnline;
