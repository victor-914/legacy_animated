"use client"
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MenuI } from '@/app/page';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);

interface NavBarProps {
  data: MenuI[];
}

function NavBar(props: NavBarProps) {

  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY < 50) {
      //   gsap.to(navRef.current, {
      //     backgroundColor: '#ce9934',
      //     color: '#fff',
      //     duration: 0
      //   });
      // } 
      // else {
      //   gsap.to(navRef.current, {
      //     backgroundColor: 'transparent', 
      //     color: '#ce9934',
      //     duration: 0
      //   });
      // }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




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
            props.data.map((item) => (
              <li
                key={item._id}
                onClick={() => item.ref.current?.scrollIntoView({
                  behavior: "smooth",
                })}
                className="navList">
                {item.title}
              </li>
            ))
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
            {props.data.map((item) => (
              <li
                key={item._id}
                onClick={() => {
                  toggleMenu();
                  item.ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="mobile-navList"
              >
                {item.title}
              </li>
            ))}
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

.menuCOnt{
height:100%;
width:auto;
display:flex;
align-items: center;
justify-content: center;

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
background-color: green;


.nav{
    display: none;
  }



}


@media (min-width: 992px) and (max-width: 1199.98px) {
background-color: purple;

.nav{
    display: none;
  }


}


/* @media (min-width: 1200px) {


} */



`