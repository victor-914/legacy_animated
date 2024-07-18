"use client"
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MenuI } from '@/app/page';
gsap.registerPlugin(ScrollTrigger);

interface NavBarProps {
  data: MenuI[];
}

function NavBar(props: NavBarProps) {

  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: '#ce9934',
          color: '#fff',
          duration: 0.2
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          color: '#ce9934',
          duration: 0.2
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);








  return (
    <StyledNavBar className='navBar' ref={navRef}>


      <aside className='logoCont'>

        <Image width={50} height={50} alt='logo' src="/logo.png" />

      </aside>



      <main className='nav'>
        {
          props.data.map((item) => (
            <li
             key={item._id}
            onClick={() => item.ref.current?.scrollIntoView({
              behavior:"smooth",
            }) }
            className="navList">
              {item.title}
            </li>
          ))
        }

      </main>




    </StyledNavBar>
  )
}

export default NavBar


const StyledNavBar = styled.div`
width: 100%;
z-index: 200;
height:50px;
position: fixed;
top:0px;
padding: 5px;
display: flex;
justify-content: space-around;
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
letter-spacing: 2px;




.logoCont{
  height: 100%;
}

.nav{
  width: 70%;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}

.navList{
  list-style:none;
  text-transform: uppercase;
  font-weight:700;
  cursor:pointer;
  transition:0.3s;
  line-height: 1.4;
  color:#fff;
}


.navList:hover{
  text-decoration: underline;
  text-decoration-color: #fff;
  text-decoration-thickness:2px;
}
`