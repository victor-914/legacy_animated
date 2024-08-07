import React from 'react'
import styled from 'styled-components'
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image"

function LandPage(prop: { value: React.LegacyRef<HTMLElement> | undefined; }) {
    return (
        <StyledLanding ref={prop.value} className="firstContainer">

            <Image id="logo"
                style={{
                    zIndex: "2"
                }}
                layout="fixed" width={300} height={300} src="/logo.png" alt="logo" />

            <div className="text_first">
                <TypeAnimation
                    sequence={[
                        'LEGACY GAMING',
                        3000,
                        'LEGACY GAMING  AFRICA',
                        3000,
                    ]}
                    repeat={0}
                    cursor={false}
                />

            </div>

            <p className="textFirst_p">O gini Bu esport</p>


            <div className="cover_first">

            </div>

          
        </StyledLanding>
    )
}

export default LandPage


const StyledLanding = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100;
  background-image: url("/homeBg.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  

 .text_first{
  color: #fff;
  font-weight: 800;
  font-size: 50px;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 2px 2px #000000;
  word-spacing: 2px;
  font-family: "Shrikhand", serif;
  font-style: normal;
  z-index: 2;
 }

 .textFirst_p{
  color: #c8c2c2;
  font-size: 20px;
  font-weight: 800;
  z-index: 2;
  text-align: center;
 }

.gamePad{
 z-index: 2;
 position: absolute;
 bottom:0;
}

.cover_first{
  width: 100%;
  height: 100%;
  background-color: #000;
  position:absolute;
}

@media (max-width:500px) {
  .textFirst_p{
   font-size: 16px;
  }

  .text_first{
    font-size: 30px;
    line-height: 2;
  }

 }


`