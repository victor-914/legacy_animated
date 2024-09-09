"use client"
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Markdown from "react-markdown";






function NewsComp(prop: any) {




  return (
    <>

    
      <Container>
        <Title>{prop?.item?.data?.attributes?.title}</Title>
        <BannerImage>

          {prop?.item && <Image alt="" src={`http://ec2-13-51-65-133.eu-north-1.compute.amazonaws.com${prop?.item?.data?.attributes?.img.data.attributes.url}`} layout="fill" objectFit="contain" />}
        </BannerImage>
         <DateComponent
          date={prop?.item?.data?.attributes?.createdAt}
          type="published"
        /> 
        <Content>
          <Markdown>{prop?.item?.data?.attributes?.content}</Markdown>
        </Content>
      </Container>
    </>
  );
}

export default NewsComp;




 const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 5px;
  padding-top: 3%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 70%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }
`;

 const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 300px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 300px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 300px;
  }

  @media (min-width: 1025px) {
    height: 450px;
  }
`;

 const Title = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  text-align: justify;
  text-transform: capitalize;
  padding-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    text-align: start;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    text-align: start;
  }
`;

 const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
  p {
    margin-bottom: 20px;
  }
`;

export const DateContainer = styled.div`
  font-size: 0.8rem;
  color: #333;
  padding: 16px 16px 16px 0px;
  font-weight: 700;
`;



 interface DateComponentProps {
  date: string | number | Date;
  type: string;
}

const DateComponent: React.FC<DateComponentProps> = ({ date, type }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <p className={`text-sm ${type === 'article' ? 'text-gray-500' : 'text-white'}`}>
      {formattedDate}
    </p>
  );
};