"use client"
import { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalStyle from "./global.style";
import LandPage from "@/components/landingpage/LandPage";
import Image from "next/image"
import Mission from "@/components/mission/Mission";
import TeamCard, { data, PersonI } from "@/components/team/TeamCard";
import Team from "@/components/team/Team";
import News from "@/components/news/News";
import NavBar from "@/components/navBar/NavBar";
gsap.registerPlugin(ScrollTrigger);


export interface MenuI {
  _id: string,
  title: String,
  ref: React.RefObject<HTMLDivElement>,
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const landingPgRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  const newsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const subscribeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


 




  const menu = [
    {
      _id: "jdhskdssf",
      title: "Home",
      ref: landingPgRef,
    },
    {
      _id: "jdhwkkrsf",
      title: "About",
      ref: visionRef,
    },
    {
      _id: "jdwerfhf",
      title: "Team",
      ref: teamRef,
    },
    {
      _id: "jdhwrwf",
      title: "Highlights",
      ref: newsRef,
    },
    {
      _id: "jeredhf",
      title: "Subscribe",
      ref: subscribeRef,
    },
 

  ]

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel")
    const landingPageTl = gsap.timeline()
    const ourVisionTl = gsap.timeline()
    const landPgSelector = gsap.utils.selector(landingPgRef)
    const ourVisionSelector = gsap.utils.selector(visionRef)



    landingPageTl.to(landPgSelector(".cover_first"), {
      duration: 0.5,
      backgroundColor: "#000000bf",
    })
      .from(landPgSelector(".text_first"), {
        opacity: 0,
        duration: 0.7,
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


    ourVisionTl.from(ourVisionSelector(".visionText"), {
      scrollTrigger: {
        trigger: visionRef.current,
        scrub: true,
        start: "top 70%",
        end: "top 0%",
        markers: true,
      },
      y: 90,
      duration: 1,
      opacity: 0,
    })
      .from(ourVisionSelector("#imgGamePad"), {
        scrollTrigger: {
          trigger: visionRef.current,
          scrub: true,
          start: "top 70%",
          end: "top 0%",
          markers: true,
        },
        y: -90,
        duration: 1,
        opacity: 0,
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
      <NavBar
        data={menu}
      />
      <LandPage value={landingPgRef} />
      <div ref={containerRef} className="container">
        <Mission value={visionRef} />
        <Team value={teamRef} />
        <News value={newsRef} />
        <section ref={subscribeRef} className="panel purple">
          four
        </section>
      </div>
      <div ref={contactRef} className="lastContainer">
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
  /* background-color: #0; */
  box-sizing:border-box;


.container {
  width: 400%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
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


/* newsletter */




 .purple{
  background-color: orange;
 }


 /* @media (max-width:500px) {
  .textFirst_p{
    /* background-color: green; 

  }

  .text_first{
    font-size: 18px;
  }

 } */

`
