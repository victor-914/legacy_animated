import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok,
    faTelegram
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
    return (
        <StyledNewsLetter className="panel">
            <div className='overAllCont'>

                <main className='container_news'>
                <header className='letterHead'>
                        <div className="glitch-wrapper">
                            <div className="glitch" data-text="Join our social platform!">Join our social platform!</div>
                        </div>
                    </header>

                    <div className="social-container newsLetterCard">
                        {/* <a href="https://www.youtube.com/c/jamesqquick"
                            className="youtube social">
                            <FontAwesomeIcon icon={faYoutube} size="4x" />
                        </a>
                        <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="4x" />
                        </a> */}
                        <a target='_blank' href="https://x.com/legacygaming_ng" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="3x" />
                        </a>
                        <a href="https://www.instagram.com/legacygamingng"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="3x" />
                        </a>

                        <a href="https://www.tiktok.com/@legacygamingng"
                            className="tiktok social">
                            <FontAwesomeIcon icon={faTiktok} size="3x" />
                        </a>

                        <a href="https://t.me/+TBWmxWA9lF42Yzc0"
                            className="telegram social">
                            <FontAwesomeIcon icon={faTelegram} size="3x" />
                        </a>
                        
                    </div>

                </main>

            </div>


        </StyledNewsLetter>
    )
}

export default Socials


const StyledNewsLetter = styled.section`

 #particle  .canva  {
  z-index:-1;
  height: 100%;
  width: 100%;
  position: absolute;
}

    .overAllCont{
        margin:0;
padding:0;
width: 100%;
height:100%;
background-image: url("/img/car.gif");
background-size: cover;
background-color: #000;
position:relative;
background-repeat: no-repeat;
clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 76%);

    }


.container_news{
    width: 100%;
    height: 100%;
    z-index: 30;
    background-color:#00000092;
    display: flex; 
    justify-content: center;
    flex-direction:column;
    align-items: center;
    color:#fff;
}


.letterHead{
    font-size: 40px;
    
}

 .subText{
    width:50%;
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    /* margin:auto; */
 }

.newsLetterCard{
    width: 50%;
    background-color: #00000092;
    height: auto;
    padding:20px;
    color:#fff;
    display: flex;
    align-items: center;
    margin:20px;
    justify-content: space-around;

  
}

.newsLetterCard input{
    height:59px;
    width:60%;
    border-radius:5px 0px 0px 5px;
    outline:none;
    border:none;
    font-size:20px;
    padding-left: 10px;

}

.newsLetterCard button{
    height:61px;
    outline:none;
    border:none;
    width:20%;
    font-size:20px;
    text-transform: uppercase;
    border-radius:0px 5px 5px 0px;
    font-weight: 600;
    background-color: #CE9934;
    color:#fff;
}

.social-container {
  /* background: #eee; */
  padding: 25px 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}

a.social:hover {
  transform: translateY(-2px);
}

a.youtube {
  color: #eb3223;
}

a.facebook {
    color: #49a1eb;
}

a.twitter {
  color: #49a1eb;
}

a.instagram {
  color: #fff;
}

a.telegram {
    color: #49a1eb;
}

a.tiktok {
  color: #000;
}

.glitch-wrapper {
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: transparent;
}

.glitch {
   position: relative;
   font-size: 50px;
   font-weight: bold;
   color: #FFFFFF;
   letter-spacing: 3px;
   z-index: 1;
   text-transform: uppercase;
   text-shadow: 2px 3px #CE9934;
}

.glitch:before,
.glitch:after {
   display: block;
   content: attr(data-text);
   position: absolute;
   top: 0;
   left: 0;
   opacity: 0.8;
}

.glitch:before {
   animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
   color: #CE9934;
   z-index: -1;
}

.glitch:after {
   animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
   color: #F73DFF;
   z-index: -2;
}

@keyframes glitch-it {
   0% {
      transform: translate(0);
   }
   20% {
      transform: translate(-2px, 2px);
   }
   40% {
      transform: translate(-2px, -2px);
   }
   60% {
      transform: translate(2px, 2px);
   }
   80% {
      transform: translate(2px, -2px);
   }
   to {
      transform: translate(0);
   }
}


@media (max-width: 575.98px) {
background-color: #000;

.overAllCont{
    clip-path: polygon(11% 9%, 100% 0, 100% 100%, 0% 100%);
}

.glitch{
    font-size: 30px;
}

.social-container {
  padding: 10px;
  width:80%;

}


}




@media (min-width: 576px) and (max-width: 767px) {
    .overAllCont{
    clip-path: polygon(11% 9%, 100% 0, 100% 100%, 0% 100%);
}
}


@media (min-width: 766px) and (max-width: 991.98px) {

    .overAllCont{
    clip-path: polygon(11% 9%, 100% 0, 100% 100%, 0% 100%);
}




}


@media (min-width: 992px) and (max-width: 1199.98px) {

    .overAllCont{
    clip-path: polygon(11% 9%, 100% 0, 100% 100%, 0% 100%);
}


}

/* 
@media (min-width: 1200px) {
background-color: #CE9934;


} */

`