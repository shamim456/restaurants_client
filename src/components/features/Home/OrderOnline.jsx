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
    <section className="w-full p-5 lg:p-20">
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
        className="overflow-visible mySwiper"
      >
        <SwiperSlide className="cursor-pointer ">
          <img src={slide1} alt="" className="w-full" />
          <h4 className="text-4xl uppercase -mt-32 mb-10 text-center text-[#FFFFFF]">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer ">
          <img src={slide2} alt="" className="w-full" />
          <h4 className="-mt-32 text-4xl text-center text-white uppercase">
            pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer ">
          <img src={slide3} alt="" className="w-full" />
          <h4 className="-mt-32 text-4xl text-center text-white uppercase">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer ">
          <img src={slide4} alt="" className="w-full" />
          <h4 className="-mt-32 text-4xl text-center text-white uppercase">
            desert
          </h4>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer ">
          <img src={slide5} alt="" className="w-full" />
          <h4 className="-mt-32 text-4xl text-center text-white uppercase">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OrderOnline;
