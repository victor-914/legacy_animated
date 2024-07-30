"use client"
import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";


export default function News() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);
  // const { data, error, isLoading } = useSWR(
  //   `${process.env.NEXT_PUBLIC_URL}/api/articles?sort[0]=publishedAt:desc&populate[images][fields][0]=*&fields[0]=title&fields[1]=publishedAt&pagination[pageSize]=3&pagination[page]=${currentPage}`,
  //   fetcher,
  //   {
  //     fallbackData: news,
  //   }
  // );


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

          <NewsBox />

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

// export async function getStaticProps() {
//   try {
//     const initialData = await api.get(
//       "/api/articles?sort[0]=publishedAt:desc&populate[images][fields][0]=*&fields[0]=title&fields[1]=publishedAt&pagination[pageSize]=3&pagination[page]=1"
//     );
//     const news = initialData.data;

//     return {
//       props: {
//         news,
//       },
//       revalidate: 300,
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// }

 const NewsBox = () => {
  return (
    <StyledNewBox
    // onClick={() => router.replace(`/news/`)}
    >

      <header className="headerCont">Flash flooding triggered by heavy monsoons in northwest Pakistan kills at least 14 people</header>

      <article>
        Officials say heavy monsoons in northwest Pakistan triggered flash flooding, killing at least 14 people, 11 from the same family.
      </article>

      <aside>
        15-8-2024
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