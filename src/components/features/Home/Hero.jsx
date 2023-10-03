import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImage1 from "../../../assets/home/01.jpg";
import bannerImage2 from "../../../assets/home/02.jpg";
import bannerImage3 from "../../../assets/home/03.png";
import bannerImage4 from "../../../assets/home/04.jpg";
import bannerImage5 from "../../../assets/home/05.png";
import bannerImage6 from "../../../assets/home/06.png";

const Hero = () => {
  return (
    <Carousel
      infiniteLoop
      stopOnHover={false}
      autoPlay
      className="flex flex-col items-center"
      showThumbs={false}
    >
      <div>
        <img src={bannerImage1} />
      </div>
      <div>
        <img src={bannerImage2} />
      </div>
      <div>
        <img src={bannerImage3} />
      </div>
      <div>
        <img src={bannerImage4} />
      </div>
      <div>
        <img src={bannerImage5} />
      </div>
      <div>
        <img src={bannerImage6} />
      </div>
    </Carousel>
  );
};

export default Hero;
