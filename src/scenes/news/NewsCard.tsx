import React, { useState } from 'react';
import styled from 'styled-components';
import Image from "next/image";
import { useRouter } from "next/navigation"
export interface NewsI {
    title: string;
    image_src: string;
    time: string,
    date: string,
    location: string,
    category: string,
}

interface NewsCardProps {
    value: NewsI;
}





export const data: NewsI[] = [
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "UNEC ESPORT TOUR",
        "location": "UNEC, ENUGU",
        "category": "Tour",
        "image_src": "/img/1.jpg"
    },
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "UNN ESPORT TOUR",
        "location": "UNN, NSUKKA",
        "category": "Tour",
        "image_src": "/img/2.jpg"
    },
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "ESUT ESPORT TOUR",
        "location": "UNEC, ENUGU",
        "category": "Tour",
        "image_src": "/img/3.jpg"
    },
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "UNEC ESPORT TOUR",
        "location": "UNEC, ENUGU",
        "category": "Tour",
        "image_src": "/img/4.jpg"
    },
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "UNEC ESPORT TOUR",
        "location": "UNEC, ENUGU",
        "category": "Tour",
        "image_src": "/img/5.jpg"
    },
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "UNEC ESPORT TOUR",
        "location": "UNEC, ENUGU",
        "category": "Tour",
        "image_src": "/img/6.jpg"
    },
    {
        "time": "0:00",
        "date": "coming soon",
        "title": "UNEC ESPORT TOUR",
        "location": "UNEC, ENUGU",
        "category": "Tour",
        "image_src": "/img/7.jpg"
    },



]


function NewsCard({ value }: NewsCardProps) {

    const [show, setShow] = useState(false);
    const router = useRouter()

    return (
        <StyledNewsCard id="main"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{
                backgroundImage: `url(${value.image_src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
           
            }}>

            <div className='cover'>

            </div>




            <div className='catergory hover'>
                {value.category}
            </div>

            <div className='title'>
                {value.title}
            </div>

            <div className='date hover'>
                {value.date}
            </div>

            <div className='location hover'>
                {value.location}
            </div>

            <span className='dot'></span>
            <aside className='readMoreCont'>
                <div onClick={() => router.push("/news")} className='readMore hover'>read more</div>
            </aside>
            {/* </main> */}
        </StyledNewsCard>
    )
}

export default NewsCard



const StyledNewsCard = styled.div`
width: 100%;
height:481px;
border: 1px solid #08070799;
border-radius:8px;
display: flex;
position: relative;
flex-direction: column;
color:#fff;
align-items: flex-start;
justify-content: flex-end;
cursor:pointer;

&:hover .cover{
    background-color: #000000c1;
    transition: 0.2s;

}

&:hover .hover{
  display: block;
    transition: 0.4s;
}

&:hover .dot{
    width: 50%;
    border-radius: 0px;
    transition: 0.2s;
}


.hover{
    z-index:2;
    display: none;
    margin: 0px 0px 8px 8px;
}
 

.container-card{
 z-index:5;
cursor:pointer;
 width:100%;
 height:auto;
display: flex;
flex-direction: column;
padding: 8px;
align-items: flex-start;
justify-content: flex-end;
}

.container-card:hover .dot{
    width:40%;
    border-radius: 0px;
    transition:0.3s;
}







.cover{
    position: absolute;
    width: 100%;
    z-index:1;
    background-color:transparent;
    height: 100%;
}





  .title{
    font-weight: 700;
    line-height: 1.6;
    font-size: 21px;
    z-index:2;
    margin: 4px;
    text-transform: uppercase;
  }

  .catergory{
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
  }

  .date{
    width:auto;
    padding: 3px;
    font-weight: 700;
    margin: 2px 0px 2px 8px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 2px;
    color:#000;
    text-transform: uppercase;
    

  }


  .location{
    width:auto;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
  }



 .readMoreCont{
    width: 95%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
 }

 .dot{
    background-color: #CE9934;
    padding: 2px;
    border-radius: 50%;
    width: 2px;
    position: absolute;
    z-index:2;
    bottom: 8px;
    left: 4px;
 }



 .readMore{
    text-transform: uppercase;
    background-color: #CE9934;
    color: #fff;
    font-weight:700;
    font-size: 14px;
    padding: 4px;
    border-radius: 3px;
 }





@media (max-width: 575.98px) {
/* background-color: orange; */




width: 90%;
height:281px;
}




@media (min-width: 576px) and (max-width: 767px) {
 background-color:blue;


}


@media (min-width: 766px) and (max-width: 991.98px) {
background-color: green;


 .newsLetterHeader .newsSubtitle{




}

}


@media (min-width: 992px) and (max-width: 1199.98px) {
background-color: purple;




}


@media (min-width: 1200px) {
background-color: #CE9934;


}


`