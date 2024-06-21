"use client"

import { useRef } from "react";
import styled from "styled-components";
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeAnimation } from 'react-type-animation';
import GlobalStyle from "./global.style";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const containerRef = useRef<HTMLDivElement>(null);
  const landingPgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel")
    const landingPageTl = gsap.timeline()
    const landPgSelector = gsap.utils.selector(landingPgRef)


    // landing page animation
    landingPageTl.to(landPgSelector(".gamePad"), {
      y: -1400,
      duration: 1,
      scale: 0.6,
      rotate: 360,
      delay:0.5,
      rotateZ: 360,
      display: "none",
    })
      .to(landPgSelector(".cover_first"), {
        duration: 0.5,
        backgroundColor: "#000000bf",
      })
      .from(landPgSelector(".text_first"), {
        opacity:0,
        duration:0.7,
      })
      .from(landPgSelector(".textFirst_p"), {
        duration: 0.8,
        y: 40,
        opacity: 0,
      })
      .from(landPgSelector("#logo"), {
        opacity: 0,
        duration: 1,
        y: 20,
        rotateZ: 360,
        rotateX: 360,
        scale: 2,
      })






    // total navigation
    gsap.to(".panel", {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef?.current?.offsetWidth
      }
    })






  }, { scope: containerRef })

  return (
    <StyledHome>
      <GlobalStyle />
      <section ref={landingPgRef} className="firstContainer">


        <Image id="logo"
          style={{
            zIndex: "2"
          }}
          layout="fixed" width={300} height={300} src="/logo.png" alt="logo" />

        <div className="text_first">
          <TypeAnimation
            sequence={[
              'LEGACY GAMING',
              4000,
              'LEGACY GAMING  AFRICA',
              4000,
            ]}
            repeat={0}
            cursor={false}
          />

        </div>

        <p className="textFirst_p">Empowering gamers across the continent...</p>


        <div className="cover_first">

        </div>

        <aside className="gamePad">
          <Image id="gameImg" layout="fixed" width={350} height={350} src="/gamepad.png" alt="logo" />
        </aside>






        {/* <main>

        </main> */}
      </section>
      <div ref={containerRef} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down"><div className="arrow"></div></div>
          </div>
        </div>

        <section className="panel red">
          ONE
        </section>
        <section className="panel orange">
          TWO
        </section>
        <section className="panel purple">
          THREE
        </section>
      </div>
      <div className="lastContainer">
        Last Container
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.section`
overflow-y: visible;
  position: relative;
  height: unset;
  overflow-x: hidden;
  margin: 0;


.container {
  width: 400%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.firstContainer {
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
  
}

 .text_first{
  color: #fff;
  font-weight: 800;
  font-size: 50px;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 2px 2px #000000;
  word-spacing: 2px;
  /* opacity:1; */
  font-family: "Shrikhand", serif;
  font-style: normal;
  z-index: 2;
 }

 .textFirst_p{
  color: #c8c2c2;
  font-size: 20px;
  font-weight: 800;
  z-index: 2;
  /* background-color: red; */
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


.lastContainer {
  display: flex;
  height: 100vh;
  background: yellow;
}

.panel{
  width: 100vw;
  height: 100vh;
}

.blue{
  background-color: blue;
}

 .red{
  background-color: red;
 }

 .orange{
  background-color: green;
 }

 .purple{
  background-color: orange;
 }


 @media (max-width:500px) {
  .textFirst_p{
    /* background-color: green; */

  }

  .text_first{
    font-size: 18px;
  }

 }

`
