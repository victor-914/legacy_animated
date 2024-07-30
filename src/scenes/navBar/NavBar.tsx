"use client"
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MenuI } from '@/app/page';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

interface NavBarProps {
  data: MenuI[];
}

function NavBar(props: NavBarProps) {

  const navRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavBar className='navBar' ref={navRef}>

      <main className='navBarCont'>



        <aside className='logoCont'>

          <Image width={50} height={50} alt='logo' src="/logo.png" />

        </aside>



        <main className='nav'>
          {
            props.data.map((item) => {
              if (item.title === "News") {
                return (

                  <Link
                  className="navList"
                    style={{
                      color: "#ce9934",
                      textDecoration: "none",
                    }}
                    href={`/${item.title}`}>
                    {item.title}
                  </Link>
                )
              } else {
                return (
                  <li
                    key={item._id}
                    onClick={() => item?.ref?.current?.scrollIntoView({
                      behavior: "smooth",
                    })}
                    className="navList">
                    {item.title}
                  </li>
                )
              }
            })
          }

        </main>



        <aside className="menuCont">
          {!menuOpen ? <AiOutlineMenu
            onClick={() => toggleMenu()}
            className='menu' /> :
            <IoMdClose className='menu'
              onClick={() => toggleMenu()}
            />

          }
        </aside>


        <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {props.data.map((item) => {

              if (item.title === "News") {
                return (
                  <Link style={{
                    color: "#ce9934",
                    textDecoration: "none",
                  }}
                    href={`/${item.title}`}>
                    <div style={{
                      height: "auto"
                    }}
                      className="glitch-wrapper">
                      <div className="glitch" data-text={item.title}>

                        {item.title}
                      </div>
                    </div>
                  </Link>

                )
              } else {
                return (
                  <li
                    key={item._id}
                    onClick={() => {
                      toggleMenu();
                      item?.ref?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="mobile-navList"
                  >

                    <div className="glitch-wrapper">
                      <div className="glitch" data-text={item.title}>
                        {item.title}
                      </div>
                    </div>

                  </li>
                )
              }

            })}

          </ul>
        </nav>


      </main>


    </StyledNavBar>
  )
}

export default NavBar


const StyledNavBar = styled.div`
width: 100%;
z-index: 200;
position: fixed;
top:0px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
letter-spacing: 2px;
background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  border-bottom: 1px solid rgba(255, 255, 255, 0.129); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
 cursor: pointer;


  .navBarCont{
    width:80%;
height:auto;
    margin:auto;
    padding: 8px 0px 8px 0px;
    display: flex;
align-items: center;
justify-content: space-between;
  }


.logoCont{
  height: 95%;
  z-index:7;
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
  color:#ce9934;
}


.navList:hover{
  text-decoration: underline;
  text-decoration-color: #fff;
  text-decoration-thickness:2px;
}


.menu{
  font-size: 30px;
  color:#ce9934;
}



  
/* MobileMenu.css */

/* .menu-button {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
} */

.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  background-color: red;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease;
  z-index:2;
  
}

.mobile-menu.open {
  left: 0;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.mobile-menu ul li {
  margin: 20px 0;
}

.mobile-menu ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}



.menu {
  cursor: pointer;
}

.navList {
  cursor: pointer;
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
   font-size: 24px;
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


@media (min-width: 1200px){
  .menuCont{
    display: none;
  }
}




@media (max-width: 575.98px) { 

  .nav{
    display: none;
  }
}

@media (min-width: 576px) and (max-width: 780px) { 
  .nav{
    display: none;
  }



}



@media (min-width: 766px) and (max-width: 991.98px) {


.nav{
    display: none;
  }



}


@media (min-width: 992px) and (max-width: 1199.98px) {

.nav{
    display: none;
  }


}


 @media (min-width: 1200px) {


  .navBarCont{
    width:95%;
} 

 }



`