"use client"
import { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalStyle from "./global.style";
import LandPage from "@/scenes/landingpage/LandPage";
import Image from "next/image"
import Mission from "@/scenes/mission/Mission";
import Team from "@/scenes/team/Team";
import News from "@/scenes/news/News";
import NavBar from "@/scenes/navBar/NavBar";
import NewsLetter from "@/scenes/newsLetter/NewsLetter";
import Community from "@/scenes/community/Community";
import Footer from "@/scenes/footer/Footer";
import Socials from "@/scenes/socials/Social";

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
        // snap: 1 / (sections.length - 1),
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
         {/* <News value={newsRef} />
        <NewsLetter
          value={subscribeRef}
        />  */}
      </div>
        {/* <Community/> */}
        {/* <Socials/> */}
      <Footer/>
    </StyledHome>
  );
}

const StyledHome = styled.section`
overflow-y: visible;
  position: relative;
  height: unset;
  overflow-x: hidden;
  margin: 0;
  padding:0;
  box-sizing:border-box;


.container {
  width: 400%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}



.lastContainer {
  display: flex;
  height: auto;
  width: 100vw;
  background:#fff;
}

.panel{
  width: 100vw;
  height: 100vh;
}



 .purple{
  background-color: orange;
 }



`
