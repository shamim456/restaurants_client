import { useEffect, useState } from "react";
import AddToCartCard from "../../Cards/AddToCartCard";
import SectionHeading from "../../Section_heading/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const ChefRecommends = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((menu) => menu.category === "popular");
        setMenuItems(popularMenu);
      });
  }, []);

  let content;

  if (menuItems.length > 0) {
    content = menuItems.map((item) => (
      <SwiperSlide key={item._id} className="cursor-pointer ">
        <AddToCartCard item={item} />
      </SwiperSlide>
    ));
  }
  return (
    <section className="px-5 lg:px-20">
      <SectionHeading subTitle="---Should Try---" heading="CHEF RECOMMENDS" />
      <div className="hidden lg:inline">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {content}
        </Swiper>
      </div>

      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {content}
        </Swiper>
      </div>
    </section>
  );
};

export default ChefRecommends;
