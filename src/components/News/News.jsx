import React, { useEffect, useState } from "react";
import { Button, Component, TitleGrid, ImgNews, ContainerGrid } from "./styles";
import { RiAddCircleLine } from "react-icons/ri";
import { BASE_URL } from "../../utils"

const HotNews = () => {
  const [notices, setNotices] = useState("")

  const fetchNotices = () => {
      fetch(BASE_URL + "/posts")
      .then(res => res.json())
      .then(data => {
         data.reverse()
         setNotices(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchNotices()
  }, [])

  return (
    <Component>
      <TitleGrid>
        <h2
          style={{
            color: "#003094",
            fontSize: "25px",
            fontFamily: "Titillium Web, sans-serif",
            height: "35px",
            margin: "auto 0",
          }}
        >
          EVENTOS <span style={{ fontWeight: "bolder" }}>& NOTÍCIAS</span>
        </h2>
        <Button>
          <span
            style={{
              marginRight: "2px",
            }}
          >
            <RiAddCircleLine />
          </span>
          <span onClick={() => window.open("#/noticias/")}>Ler todas as notícias</span>
        </Button>
      </TitleGrid>
      <ContainerGrid>
        {
          notices &&
          notices.map((notice, index) => {
            if (index <= 2) {
              return (
                <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexBasis: "30%",
                  cursor: "pointer",
                  margin: "8px",
                }}
              >
                <span
                  style={{
                    color: "#666666",
                    fontSize: "12px",
                    textAlign: "start",
                  }}
                >
                  {notice.createdAt}
                </span>
                <h5
                  style={{
                    marginTop: 0,
                    fontSize: "16px",
                    color: "#003094",
                    textAlign: "start",
                    lineHeight: "initial",
                  }}
                >
                  {notice.title}
                </h5>
                <ImgNews>
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src={notice.postImage}
                    alt={notice.title}
                  />
                </ImgNews>
                <p
                  style={{
                    color: "#666666",
                    fontSize: "14px",
                    paddingTop: "10px",
                    textAlign: "justify",
                  }}
                >
                  {notice.description}
                </p>
                <Button
                  onClick={() => window.open("#/noticias/" + notice.path)}
                  style={{ margin: "auto 0", textTransform: "initial" }}
                >
                  Leia mais
                </Button>
              </div>
              )              
            }
            return null
          }
          )
        }
      </ContainerGrid>
    </Component>
  );
};

export default HotNews;
