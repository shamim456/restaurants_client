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
  const menuItems = [
    { id: 1, name: "Salads", image: slide1 },
    { id: 2, name: "pizzas", image: slide2 },
    { id: 3, name: "Soups", image: slide3 },
    { id: 4, name: "desert", image: slide4 },
    { id: 5, name: "Salads", image: slide5 },
  ];

  let content;

  if (menuItems.length > 0) {
    content = menuItems.map((item) => (
      <SwiperSlide key={item.id} className="cursor-pointer ">
        <img src={item.image} alt="" className="w-full" />
        <h4 className="text-4xl uppercase -mt-32 mb-10 text-center text-[#FFFFFF]">
          {item.name}
        </h4>
      </SwiperSlide>
    ));
  }
  return (
    <section className="w-full p-5 lg:p-20">
      <SectionHeading
        heading="ORDER ONLINE"
        subTitle="---From 11:00am to 10:00pm---"
      />
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="overflow-visible mySwiper"
        >
          {content}
        </Swiper>
      </div>
      <div className="hidden md:inline">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="overflow-visible mySwiper"
        >
          {content}
        </Swiper>
      </div>
    </section>
  );
};

export default OrderOnline;
