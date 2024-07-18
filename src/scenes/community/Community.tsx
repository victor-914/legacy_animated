import React from 'react'
import styled from 'styled-components'
import Form from './form/Form'

function Community() {
  return (
    <StyledCommunity className='lastContainer'>
      <header>
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Join our Community
            </text>
          </svg>
        </div>
      </header>
      <Form />
    </StyledCommunity>

  )
}

export default Community


const StyledCommunity = styled.section`
display: flex;
/* align-items:center; */
justify-content: center;
flex-direction: column;



svg {
  font-family:"Poppins";
	width: 100%; height: 100%;
}
svg text {
	animation: stroke 3s infinite alternate;
	stroke-width: 4;
	stroke: #CE9934;
	font-size: 80px;
  font-weight: 800;
}
@keyframes stroke {
	0%   {
		fill: rgba(0,0,0,0); stroke: rgba(206,153,52,1);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(0,0,0,0); stroke: rgba(206,153,52,1); }
	80%  {fill: rgba(0,0,0,0); stroke: rgba(206,153,52,1); stroke-width: 3; }
	100% {
		fill: rgba(0,0,0,1); stroke: rgba(206,153,52,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
}

.wrapper {background-color: #FFFFFF};

`