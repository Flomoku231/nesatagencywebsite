import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "../../Components/TestimonialCard";
import "../../Styles/PagesStyles/LandingPageStyles/_Testimonial.scss";

const Testimonial = () => {
  const [Testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    async function fetchTestimonia() {
      const req = await axios.get("/api/home/testimonial");
      setTestimonies(req.data);
    }
    fetchTestimonia();
  }, []);
  return (
    <main className="Testimonial__Container">
      <div className="Testimonial__Header">
        <h2 id="Testimonial__Head--text">Testimonials</h2>
        <h1 id="Testimonial__Bold--text">Our Customers Reviews</h1>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        speed={600}
        slidesPerView={3}
        loop
        autoplay={{ delay: 1000 }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        className="TestimonialsCards__slides"
        breakpoints={{
          // when window width is <= 750px
          800: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
          250: {
            slidesPerView: 1,
          },
        }}
      >
        {Testimonies.map((Testimony) => {
          return (
            <SwiperSlide key={Testimony._id}>
              <TestimonialCard
                ImageUrl={Testimony.ImageUrl}
                ParagraphText={Testimony.Description}
                Name={Testimony.Name}
                Position={Testimony.Position}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default Testimonial;
