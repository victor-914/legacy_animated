"use client"
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";
import axios from "axios";

export default function News() {
  const router = useRouter()
  const [data, setData] = useState([])


  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get("http://ec2-13-51-65-133.eu-north-1.compute.amazonaws.com/api/articles")
        setData(data?.data?.data)
      } catch (error) {

      }

    }

    fetch()


    return () => {
      setData([])
    }
  }, [])




  return (
    <StyledNews>
      <Head>
        <title>News</title>
      </Head>

      <nav
        onClick={() => router.push("/")}
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


      <main className="header_news">
        <div className="cover"></div>
      </main>

      <section className="container">

        <header className="contHeader">
          <div></div>
          <h3>Latest News</h3>
        </header>


        <main className="newsContainer">

          {
            data?.map((value: any) => {

              return (<NewsBox key={value.id} item={value} />)

            })
          }

        </main>
      </section>

    </StyledNews>
  );
}


const StyledNews = styled.section`
  height: auto;

  .header_news {
    width: 100%;
    height: 30vh;
    background-size:cover;
    background-image: url("/img/car.gif");
    background-position: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 12, 15, 0.755);
  }


  .container {
    width: 90%;
    height: auto;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 40px;
  }

  .contHeader{
    width:100%;
    border-top: 1px solid #0000005e;
  }

  .contHeader div{
    background-color: #ce9934;
    width: 10%;
    height:10px;
    box-shadow: 1px 1px 2px 2px #865f17;
  }

  .contHeader h3{
    font-size: 20px;
    text-transform: uppercase;
  }

  .newsContainer {
    width: 100%;
    height: auto;
    margin: auto;
  }



  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;

    .container {
      width: 100%;
    }

    .newsContainer {
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;

    .container {
      width: 100%;
    }

    .newsContainer {
      width: 95%;
      height: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;



const NewsBox = (item: any) => {
  const router = useRouter()
  return (
    <StyledNewBox
    onClick={() => router.replace(`/news/${item?.item?.id}`)}
    >

      <header className="headerCont">
        {item.item.attributes.title}
      </header>

      <article>
        {item.item.attributes.content.split(' ').splice(0,20).join(' ').concat(".......")}
      </article>

      <aside>
        {`${new Date(item.item.attributes.createdAt)}`}
      </aside>

    </StyledNewBox>
  );
};

const StyledNewBox = styled.div`
  margin: auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 2px 1px 1px #19181814;
  padding: 20px 10px 20px 10px;
  line-height: 1.8;
  font-family: "Poppins";
  cursor:pointer;

  :hover {
   color: #3a3737;
  }


  
  .headerCont {
    height: 100%;
   font-weight:700;
   font-size: 24px;

  }

  aside{
    line-height:2;
    font-size:13px;
  }


  @media (min-width: 320px) and (max-width: 480px) {
    .imgCont {
      width: 30%;
      position: relative;
    }
    .headerCont {
      width: 70%;
      height: 100%;
      padding-left: 1%;
    }

    .headerCont header {
      font-weight: 700;
      text-transform: uppercase;
    }

    .headerCont aside {
      left: 1%;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .imgCont {
      width: 30%;
      position: relative;
    }
    .headerCont {
      width: 70%;
      height: 100%;
      padding-left: 1%;
    }

    .headerCont header {
      font-weight: 500;
      text-transform: uppercase;
    }

    .headerCont aside {
      left: 1%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }


`