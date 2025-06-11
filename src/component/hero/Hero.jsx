// Hero.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // For autoplay, optional
import "swiper/css"; // Swiper core CSS
import "swiper/css/autoplay"; // If using autoplay

import SliderOne from "./sliding/SliderOne";
import SliderTwo from "./sliding/SliderTwo";
import SliderThree from "./sliding/SliderThree";
import SliderFour from "./sliding/SliderFour";

const Hero = () => {
  return (
    <>
      <hr className="border border-gray-300 xl:hidden" />
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
        >
          <SwiperSlide className="w-full">
            <SliderOne />
          </SwiperSlide>
          <SwiperSlide>
            <SliderTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SliderThree />
          </SwiperSlide>
          <SwiperSlide>
            <SliderFour />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
