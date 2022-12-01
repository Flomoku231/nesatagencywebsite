import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "../../Styles/PagesStyles/LandingPageStyles/_LandingPageTeam.scss";
import TeamCard from "../../Components/TeamCard";
import axios from "../../axiosInstance/axios";

const LandingPageTeam = () => {
  const [TeamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchTeamMembers() {
      const req = await axios.get('/home/team/members');
      setTeamMembers(req.data);
    }
    fetchTeamMembers();
  }, []);
  return (
    <main className="LandingPageTeam__Container">
      <div className="LandingPageTeam__TextContent">
        <Fade bottom>
          <h2 id="TextContent__Head">Expert People</h2>
          <h1 id="TextContent__bold">Meet Our Team</h1>
        </Fade>
      </div>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        speed={800}
        pagination={{ clickable: true }}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{ delay: 1000 }}
        loop
        className="SlidesClass"
        breakpoints={{
          550: {
            slidesPerView: 2,
          },
          250: {
            slidesPerView: 1,
          },
        }}
      >
        {TeamMembers.map((teamMember) => {
          return (
            <SwiperSlide key={teamMember._id}>
              <TeamCard
                ImageUrl={teamMember.teamImageUrl}
                Name={teamMember.name}
                Position={teamMember.position}
              />
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <TeamCard
            ImageUrl={CEOImage}
            Name="Eric S. Doupah, Sr."
            Position="Chief Executive Officer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard
            ImageUrl={CEOImage}
            Name="Eric S. Doupah, Sr."
            Position="Chief Executive Officer"
          />
        </SwiperSlide> */}
      </Swiper>
    </main>
  );
};

export default LandingPageTeam;
