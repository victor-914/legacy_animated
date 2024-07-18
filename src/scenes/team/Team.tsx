import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components'
import TeamCard, { data } from './TeamCard';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function Team(prop: { value: React.LegacyRef<HTMLDivElement> | undefined; }) {
 

  return (
    <StyledTeam ref={prop.value} className="panel ourTeamContainer">
      <header className="missionTitle">
        OUR TEAM
      </header>

      <div className="visionText">
        <q>
          The minds  transforming the gaming landscape in Africa</q>
      </div>


      <main className='mainContainer'>

        <FaLongArrowAltLeft
         className='nav swiper-button-next'
        /> 
         <FaLongArrowAltRight
          className=' nav swiper-button-prev'
         />
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={true}
        
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass:'disabled-nav'
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.title} className="swiperSlide">
              <TeamCard value={item} />
            </SwiperSlide>
          ))}
        </Swiper>


      </main>





    </StyledTeam>
  )
}

export default Team


const StyledTeam = styled.div`
  position: relative;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  background-color: #000;
  margin: 0;
  padding: 0;
  padding-top: 80px; 

  


  .mainContainer{
    position:relative;
   width:80%;
   margin:auto;
  }


  .nav{
    font-size:50px;
    color: #CE9934;
    top:50%;
    position: absolute;
    transition: 0.3s ease;

  }

  .nav:hover{
    cursor: pointer;
    transform: scale(1.5);
  }

  .disabled-nav{
    color:#000;
  }


  .swiper-button-next{
   left:5px;
  }

  .swiper-button-prev{
    right:5px;
  }

  .mySwiper{
    width: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    width:80%;
    display: flex; 
    /* background-color: #CE9934;  */
    justify-content: center; 
    align-items: center;
    /* padding: 20px; */
  } 

  

  /* .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  */


.swiper {
  width: 70%;
  height: auto;
  /* margin-left: auto; */
  padding: 20px;
  /* margin-right: auto; */
  /* border: 2px solid orange; */
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
  /* border: 2px solid green; */
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





`





