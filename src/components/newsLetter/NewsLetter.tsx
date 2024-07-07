import React from 'react'
import styled from 'styled-components'
import ParticlesComponent from '../particle/Particles'

function NewsLetter(prop: { value: React.LegacyRef<HTMLDivElement> }) {
    return (
        <StyledNewsLetter className="panel" ref={prop.value}>
            <div className='overAllCont'>
                <ParticlesComponent id="particle" />

                <main className='container_news'>
                    <header className='letterHead'>
                        Stay in loop. Stay Informed
                    </header>

                    <p className='subText'>
                        Subscribe to our newsletter for the latest updates in the esports industry! Get exclusive insights and trends delivered straight to your inbox. As a special thank you, download our free PDF packed with insider information and expert analysis.  Sign up now and become an esports insider! Don't miss out on this. Join our community today!
                    </p>

                    <main className='newsLetterCard'>

                    </main>

                </main>

            </div>


        </StyledNewsLetter>
    )
}

export default NewsLetter


const StyledNewsLetter = styled.section`
 /* background-color: red; */

 #particle  .canva  {
  z-index:-1;
  height: 100%;
  width: 100%;
  position: absolute;
}

    .overAllCont{
        margin:0;
padding:0;
width: 100%;
height:100%;
background-image: url("/img/newsletter.gif");
background-size: cover;
background-color: #000;
position:relative;
background-repeat: no-repeat;
/* clip-path: polygon(51% 0, 100% 0, 100% 99%, 12% 100%); */
clip-path: polygon(32% 0, 100% 0, 98% 96%, 0 100%);

    }


.container_news{
    width: 100%;
    height: 100%;
    z-index: 30;
    background-color:#00000092;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    color:#fff;
}


.letterHead{
    font-size: 40px;
    
}

.newsLetterCard{
    width: 50%;
    background-color: #00000092;
    height: 30vh;
}

.subText{
    max-width:50%;
    
    }
`