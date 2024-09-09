"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Markdown from "react-markdown";
import axios from "axios";
import { useParams , useRouter} from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";


interface Article {
  id: number;
  attributes: {
    title: string;
    content: string;
    img: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    createdAt: string;
  };
}

interface ApiResponse {
  data: Article;
}


function PerArticle() {

  const params = useParams()
  const [data, setData] = useState<ApiResponse | null>(null)
 const router = useRouter()


  useEffect(() => {
    async function getProduct(id: any) {
      const res = await axios.get(`http://ec2-13-51-65-133.eu-north-1.compute.amazonaws.com/api/articles/${id}?populate=*`);

      setData(res?.data)
      // return res
    }

    getProduct(params.newsId)



    return () => {
    }
  }, [])

  //   

  return (
    <>

      <nav
        onClick={() => router.push("/news")}
        style={{
          backgroundColor: '#ce9934'
        }}>
        <button
          style={{
            padding: "10px",
            display: 'flex',
            alignItems: 'center'

          }}
        >
          <RiArrowGoBackLine />
        </button>

      </nav>
      <Container>
        <Title>{data?.data?.attributes?.title}</Title>
        <BannerImage>

          {data && <Image alt="" src={`http://ec2-13-51-65-133.eu-north-1.compute.amazonaws.com${data?.data?.attributes?.img.data.attributes.url}`} layout="fill" objectFit="contain" />}
        </BannerImage>
        <DateComponent
          date={data?.data?.attributes?.createdAt}
          type="published"
        />
        <Content>
          <Markdown>{data?.data?.attributes?.content}</Markdown>
        </Content>
      </Container>
    </>
  );
}

export default PerArticle;




export const Container = styled.div`
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

export const BannerImage = styled.div`
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

export const Title = styled.h1`
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

export const Content = styled.div`
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

export const DateComponent = ({ date, type }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <DateContainer>
      {type === "published" ? "Published" : "Updated"} on {formattedDate}
    </DateContainer>
  );
};