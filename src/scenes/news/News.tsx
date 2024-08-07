import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from "./NewsCard"
import 'swiper/css';
import NewsCard from "./NewsCard"
import { Pagination, Navigation } from 'swiper/modules';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { ParticlesNewComponent } from "../particle/NewsParticle";
import { useMediaQuery } from '@mui/material';
function News(prop: { value: React.LegacyRef<HTMLDivElement> }) {
  const small = useMediaQuery('(max-width: 575.98px)');
  const medium = useMediaQuery('(min-width:576px)');
  const large = useMediaQuery('(min-width:1025px)');
  return (

    <StyledNews ref={prop.value} className='panel newsLetterContainer'>
      <ParticlesNewComponent id="particle" />

      <header className="newsLetterHeader">
        <p className="newsTitle">News & Events</p>

        <p className="newsSubtitle">
          Legacy Gaming strives to keep you updated on all the major occurences in the esport industry.
        </p>

        <p className="newsText">
          Don't miss any action with our comprehensive previews and recaps of major events, including analysis and expert opinions. Stay ahead with insights into market trends and business developments within the esports industry. Mark your calendars for upcoming major championships across various games and get information about upcoming conventions,  and gatherings where fans and professionals come together.
        </p>

        <button className="newsButton">View More</button>




      </header>
      <main className="newsList">

        <main className='mainContainer'>

          <nav className='navCont swiper-button-next'>
            <FaAnglesLeft
              className='nav'
            />
          </nav>

          <nav className='navCont swiper-button-prev'>
            <FaAnglesRight
              className='nav'
            />
          </nav>



          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'disabled-nav'
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data?.map((item) => (
              <SwiperSlide key={item.time} className="swiperSlide">
                <NewsCard value={item} />
              </SwiperSlide>
            ))}
          </Swiper>


        </main>

      </main>
    </StyledNews >
  )
}

export default News


const StyledNews = styled.div`
height: 100vh;
display: flex;
flex-direction: row-reverse;
width:100%;
align-items: center;
background-color: transparent;
font-family:"Poppins";
position: relative;
justify-content:flex-end;

#particle  .canva {
  z-index:-1;
  height: 100%;
  width: 100%;
  position: absolute;
}

.newsList{
 width: 50%;
 height: 100%;
 padding: 0px 20px 0px 50px;
 }


.newsLetterHeader{
width: 25%;
height: 100%;
display: flex;
flex-direction:column;
align-items: flex-start;
justify-content: center;
  }


  .newsLetterHeader .newsTitle{
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0px;
    padding:0px;
    letter-spacing: -2px;
    word-spacing: -2px;
  }

  .newsLetterHeader .newsSubtitle{
    font-size: 21px;
    font-weight: 700;
    text-transform: uppercase;
    color:#CE9934;
    letter-spacing: -1px;
    word-spacing: 1px;
    margin: 5px 0px 5px 0px;
    padding:0px;
  }

  .newsList{
    display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
  }


  .mainContainer{
    position: relative;
    width: 100%;
  }


  .newsButton{
    background-color: #000;
    color: #fff;
    padding: 8px;
    border-radius: 2px;
    font-weight: 700;
    line-height: 2;
    text-transform: uppercase;
    outline: none;
    border: 1px solid #7f7d7d;
  }


   .navCont{
    position: absolute;
    z-index: 2;
    background-color: #fff;
    border-radius: 8px;
    top:10px;
    box-shadow: -2px 10px 10px rgba(0, 0, 0, 0.405);
   }


  .nav{
    font-size:50px;
    color: #ce9934;
    transition: 0.3s ease;

  }

  .navCont:hover{
    cursor: pointer;
    transform: scale(1.1);
  }

  .disabled-nav{
    color:#000;
  }


  .swiper-button-next{
   left:-20px;
  }

  .swiper-button-prev{
    right:-3px;
  }


  @media (max-width: 575.98px) {
flex-direction: column;
justify-content: space-around;
padding-top: 50px;

.newsLetterHeader{
width: 92%;
height: auto;
display: flex;
align-items: center;
flex-direction: column;
}

.newsList{
  height: auto;
  width: 80%;
}

.newsLetterHeader .newsTitle{
  font-size: 18px;
  text-align: center;
  width: 100%;
}
.newsLetterHeader .newsSubtitle{
  font-size: 16px;
  font-weight: 600;
  text-align: center;

}

.newsText{
  font-size: 14px;
  display: none;
}

}




@media (min-width: 576px) and (max-width: 767px) {
 flex-direction: column-reverse;
justify-content: space-around;
padding-top: 50px;

.newsLetterHeader{
width: 92%;
height: auto;
display: flex;
align-items: center;
flex-direction: column;
}

.newsList{
  height: auto;
  width: 90%;
}

.newsLetterHeader .newsTitle{
  font-size: 30px;
  text-align: center;
  letter-spacing: 2px;
  width: 100%;
}
.newsLetterHeader .newsSubtitle{
  font-size: 20px;
  width:80%;
  margin:auto;
  font-weight: 600;
  text-align: center;

}

.mainContainer{
  display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
}

.newsText{
  font-size: 16px;
  /* display: none; */
}


}


@media (min-width: 766px) and (max-width: 991.98px) {


flex-direction: column-reverse;
justify-content: space-around;
padding-top: 50px;

.newsLetterHeader{
width: 92%;
height: auto;
display: flex;
align-items: center;
flex-direction: column;
}

.newsList{
  height: auto;
  width: 80%;
}

.newsLetterHeader .newsTitle{
  font-size: 22px;
  text-align: center;
  width: 100%;
}
.newsLetterHeader .newsSubtitle{
  font-size: 19px;
  font-weight: 600;
  text-align: center;

}

.mainContainer{
  display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
}

.newsText{
  font-size: 14px;
  display: none;
}



}


@media (min-width: 992px) and (max-width: 1199.98px) {

flex-direction: column-reverse;
justify-content: space-around;
padding-top: 50px;

.newsLetterHeader{
width: 92%;
height: auto;
display: flex;
align-items: center;
flex-direction: column;
}

.newsList{
  height: auto;
  width: 70%;
}

.newsLetterHeader .newsTitle{
  font-size: 30px;
  text-align: center;
  letter-spacing: 2px;
  width: 100%;
}
.newsLetterHeader .newsSubtitle{
  font-size: 20px;
  width:80%;
  margin:auto;
  font-weight: 600;
  text-align: center;

}

.mainContainer{
  display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
}

.newsText{
  font-size: 16px;
  /* display: none; */
}


}




`