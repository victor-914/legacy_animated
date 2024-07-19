import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

export interface PersonI {
    _id: string;
    name: string;
    title: string;
    img: string;
}

interface TeamCardProps {
    value: PersonI;
}




export const data: PersonI[] = [
    {
        _id: "7475",
        name: "Nnamani George",
        title: "CVO",
        img: "/george.jpg"
    },
    {
        _id: "ff475",
        name: "Okafor Victor",
        title: "CTO",
        img: "/victor.jpg"
    },
    {
        _id: "745",
        name: "Abasi George",
        title: "COO",
        img: "/abasi.jpg"
    },
    {
        _id: "745",
        name: "Egwu Peter",
        title: "CEO",
        img: "/peter.png"
    },
]


function TeamCard({ value }: TeamCardProps) {
    return (
        <StyledTeamCard>

            <main className='imgContainer'>
                <Image layout='fixed' width={220} height={220} src={value.img} alt={value.name} />
            </main>

            <div className='name'>{value.name}</div>

            <div className='title'>
                {value.title}
            </div>



        </StyledTeamCard>
    )
}

export default TeamCard



const StyledTeamCard = styled.div`
width: 350px;
height:35vh;
box-shadow: 20px 10px #CE9934;
border: 1px solid #ffffff99;
border-radius:8px;
display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;


.imgContainer{
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content:center;

}
.name,.title{
    color:#fff;
    text-align: center;
    width: 80%;
    margin: auto;
    padding: 8px 0px 8px 0px;
    font-family:"Poppins";
}

 .name{
  font-weight:700;
  font-size: 20px;
  line-height: 1.5;
 }


 @media (max-width: 575.98px) {
width: 350px;
height:50vh;
box-shadow: 5px 8px #CE9934;

}




@media (min-width: 576px) and (max-width: 767px) {


}


@media (min-width: 766px) and (max-width: 991.98px) {






}


@media (min-width: 992px) and (max-width: 1199.98px) {

width: 400px;
height:40vh;

}


@media (min-width: 1200px) {


}




`