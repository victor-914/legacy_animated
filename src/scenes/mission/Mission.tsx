import React, { useRef, useMemo } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ParticlesComponent from "../particle/Particles"



function Mission(prop: { value: React.LegacyRef<HTMLElement> | undefined; }) {



    return (
        <StyledMission className="vision panel" ref={prop.value}>

            <ParticlesComponent id="particles" />
                    

            <div className="visionText">
                <q>
                    At Legacy Gaming, our mission is to create a vibrant gaming community that celebrates African talent. Through our commitment to quality, and collaboration, we aim to transform the gaming landscape in Africa</q>
            </div>

            <header className="missionTitle">
                OUR MISSON
            </header>

            <aside className="gamePad">
                <main className="imgResize">

                    <Image id="imgGamePad" layout="fill" src="/gamepad.png" alt="" />
                </main>
            </aside>

        </StyledMission>
    )
}

export default Mission



const StyledMission = styled.section`
 background-color: #000;
  /* background-color:transparent; */
  padding-top:70px;
  /* width: 100%; */
  /* height:100%; */
  position: relative;

  #particles   {
  z-index:-1;
  height: 100%;
  width: 100%;
  position: absolute;
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

 .gamePad{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content:center;
  height: 40vh;
 }

 .imgResize{
  position: relative;
  width: 35%;
  height: 100%;
  transform:translateY(-110px);
 }



`