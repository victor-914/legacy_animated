import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import api from "../../utils/api";
import { BaseFontSize, Color } from "../../utils/color";
import Breadcrumbs from "nextjs-breadcrumbs";
import l from "../../assets/afriinvest.png";
import Markdown from "react-markdown";

function PerArticle({ data }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(
      data?.data?.attributes?.images?.data[0]?.attributes?.formats?.large?.url
    );

    return () => {
      setUrl(null);
    };
  }, [data]);

  const imgLoader = () => {
    return url;
  };

  return (
    <>
      <Breadcrumbs
        omitRootLabel
        activeItemClassName="brActive"
        omitIndexList={[1]}
        containerStyle={{
          width: "90%",
          margin: "auto",
          height: "auto",
          paddingTop: "11vh",
          position: "-webkit-sticky",
        }}
        listStyle={{
          display: "flex",
          marginLeft: "5px",
          padding: "5px",
          fontSize: "15px",
        }}
        inactiveItemStyle={{
          padding: "5px",
          color: `${Color.primaryColor}`,
          fontWeight: "700",
          color: "#000",
        }}
        transformLabel={(title) => "Back to all " + title}
      />
      <Container>
        <Title>{data?.data?.attributes?.title}</Title>
        <BannerImage>
          <Image src={l} loader={imgLoader} layout="fill" objectFit="contain" />
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

export async function getStaticPaths() {
  const articles = await api.get("/api/articles?fields[0]=title");

  const paths = articles?.data?.data?.map((article) => ({
    params: { newId: article.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  try {
    const initialData = await api.get(
      `/api/articles/${context.params.newId}?populate=*`
    );
    const data = initialData.data;

    return {
      props: {
        data,
        revalidate: 21600,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

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
  font-size: calc(${BaseFontSize.bfs} + 0.4vw);
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