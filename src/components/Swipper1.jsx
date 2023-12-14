// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Swipper1.css";

import { Autoplay } from "swiper/modules";

import { useMediaQuery } from "react-responsive";

function Swipper1() {
  const isMobile = useMediaQuery({ query: `(max-width: 1133px)` });

  return (
    <div style={{ padding: "0px" }}>
      <Swiper
        slidesPerView={isMobile ? 1.5 : 2.5}
        spaceBetween={15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        <div className="shape-container">
          <img className="shape-image1" src="/shape1.svg" alt="shape1" />
        </div>
        <div className="shape-container2">
          <img className="shape-image2" src="/shape2.png" alt="shape2" />
        </div>
        <div className="shape-container3">
          <img className="shape-image3" src="/shape3.png" alt="shape2" />
        </div>
        <div className="shape-container4">
          <img className="shape-image4" src="/shape4.png" alt="shape2" />
        </div>

        <SwiperSlide>
          <img src="/IMG_4.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/IMG_3.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/IMG_2.png" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/IMG_1.png" alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipper1;
