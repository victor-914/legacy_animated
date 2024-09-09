"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";
import NewsComp from "@/components/news/newsComp";

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
            <NewsComp item={data}/>
        </>
    );
}

export default PerArticle;



