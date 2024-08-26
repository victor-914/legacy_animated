import React from 'react'
import styled from 'styled-components'
function TapToPlay() {
  return (
    <StyledTapToPlay>
      <div className="glass-item">
        <div className="glitch-wrapper">
          <div className="glitch" data-text="Tap to enter">Tap to enter</div>
        </div>
      </div>
    </StyledTapToPlay>
  )
}

export default TapToPlay


const StyledTapToPlay = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top:0px;
    z-index: 200;
    width:100%;
    background-color: #000;
    backdrop-filter: blur(10px);
    cursor: pointer;

.glass-item {
  
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




`