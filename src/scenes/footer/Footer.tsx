import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter className='pattern'>


        <div>
        </div>

    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
width: 100%;
position: relative;
    height:20px;
	background:
		  conic-gradient(from 135deg,#CE9934 90deg,#0000 0) 28px calc(28px/2),
		  conic-gradient(from 135deg,transparent 90deg,#0000 0),
		  conic-gradient(from 135deg at 50% 0,#CE9934 90deg,#0000 0) transparent;
	background-size: 56px 28px;

.div{
    width:100%;
    position:absolute;
z-index: 3;
     height:100%;
    background: #CE9934;
    background: linear-gradient(to bottom right, #CE9934 39%, #FFFFFF 67%, #000000 80%);
}
`