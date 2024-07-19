import React, { useState } from 'react';
import styled from 'styled-components';
import Image from "next/image";

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
        "time": "14:00",
        "date": "2024-07-10",
        "title": "Summer Invitational",
        "location": "Los Angeles, CA",
        "category": "Tournament",
        "image_src": "/img/1.jpg"
    },
    {
        "time": "18:00",
        "date": "2024-07-12",
        "title": "Pro League Finals",
        "location": "New York, NY",
        "category": "Championship",
        "image_src": "/img/2.jpg"
    },
    {
        "time": "10:00",
        "date": "2024-07-15",
        "title": "Community Cup",
        "location": "Chicago, IL",
        "category": "Community Tournament",
        "image_src": "/img/3.jpg"
    },
    {
        "time": "16:00",
        "date": "2024-07-18",
        "title": "Esports Expo",
        "location": "San Francisco, CA",
        "category": "Convention",
        "image_src": "/img/4.jpg"
    },
    {
        "time": "12:00",
        "date": "2024-07-20",
        "title": "Regional Qualifiers",
        "location": "Houston, TX",
        "category": "Qualifier",
        "image_src": "/img/5.jpg"
    },
    {
        "time": "19:00",
        "date": "2024-07-22",
        "title": "Summer Showdown",
        "location": "Miami, FL",
        "category": "Showmatch",
        "image_src": "/img/6.jpg"
    },
    {
        "time": "11:00",
        "date": "2024-07-25",
        "title": "University Battle",
        "location": "Boston, MA",
        "category": "Collegiate",
        "image_src": "/img/7.jpg"
    },
    {
        "time": "17:00",
        "date": "2024-07-28",
        "title": "Charity Stream",
        "location": "Seattle, WA",
        "category": "Charity",
        "image_src": "/img/8.jpg"
    },
    {
        "time": "13:00",
        "date": "2024-07-30",
        "title": "International Open",
        "location": "Las Vegas, NV",
        "category": "Open Tournament",
        "image_src": "/img/9.jpg"
    },
    {
        "time": "15:00",
        "date": "2024-08-02",
        "title": "Grand Championship",
        "location": "Atlanta, GA",
        "category": "Championship",
        "image_src": "/img/1.jpg"
    }

]


function NewsCard({ value }: NewsCardProps) {

    const [show, setShow] = useState(false);

    return (
        <StyledNewsCard id="main"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{
                backgroundImage: `url(${value.image_src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}>

            <div className='cover'>

            </div>




            {/* <main className='container-card'> */}
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
                <div className='readMore hover'>read more</div>
            </aside>
            {/* </main> */}
        </StyledNewsCard>
    )
}

export default NewsCard



const StyledNewsCard = styled.div`
width: 281px;
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
    background-color: #000000bb;
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
    background-color: #00000099;
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