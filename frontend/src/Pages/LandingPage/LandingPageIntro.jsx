import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "../../Styles/PagesStyles/LandingPageStyles/_LandingPageIntro.scss";
import IntroSlider from "./IntroSlider";

const LandingPageIntro = () => {
  return (
    <main className="LandingPageIntro__Container">
      <Swiper
        modules={[Navigation]}
        navigation
        speed={800}
        slidesPerView={1}
        loop
        className="IntroSlides"
      >
        <SwiperSlide className="SwiperSlide__Container">
          <IntroSlider
            className="Intro__Slider1"
            HeadText="Our Business Goal"
            Quote="We hire fit-for–purpose leaders for your Entity"
          />
        </SwiperSlide>
        <SwiperSlide>
          <IntroSlider
            className="Intro__Slider2"
            HeadText="Our Business Goal"
            Quote="We Help Build A Successful Team"
          />
        </SwiperSlide>
        <SwiperSlide>
          <IntroSlider
            className="Intro__Slider3"
            HeadText="Our Business Goal"
            Quote="Client Satisfaction Is Our Priority"
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default LandingPageIntro;
