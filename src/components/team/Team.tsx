import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components'
import TeamCard, { data } from './TeamCard';

function Team() {
  return (
    <StyledTeam className="panel ourTeamContainer">
      <header className="missionTitle">
        OUR TEAM
      </header>

      <div className="visionText">
        <q>
          The minds  transforming the gaming landscape in Africa</q>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={true}
        pagination={{

          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide className="swiperSlide">
            <TeamCard value={item} />
          </SwiperSlide>
        ))}
      </Swiper>

    </StyledTeam>
  )
}

export default Team


const StyledTeam = styled.section`
  position: relative;
  height: 100%;
  /* background: #eee; */
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  background-color: #000;
  margin: 0;
  padding: 0;

.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.ourTeamContainer{
border: 2px solid red;
}

.ourTeam{
  text-align: center;
  font-weight: 900;
  font-family:"Poppins";
  width: 100%;
  letter-spacing: 18px;
  font-size: 90px;
  background: -webkit-linear-gradient(#eee, #CE9934);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.teamCards{
  width: 80%;
  gap:30px;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.missionTitle{
  text-align: center;
  font-weight: 900;
  font-family:"Poppins";
  width: 100%;
  letter-spacing: 18px;
  font-size: 90px;
  background: -webkit-linear-gradient(#eee, #CE9934);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

}


.visionText{
  width:30%;
  margin:auto;
  font-weight: 900;
  color: #fff;
  text-align: center;
  line-height: 2;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 4px;
  font-family:"Poppins";
  padding: 18px;
}

.swiper {
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }

  .swiper-slide {
    font-size: 18px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


`





