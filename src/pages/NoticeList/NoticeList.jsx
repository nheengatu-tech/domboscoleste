import React, { useEffect, useState } from "react";
import { TitleContainer } from "./styles";
import "./styles.css";
import { BASE_URL } from "../../utils"

const NoticeList = (props) => {
  const [notices, setNotices] = useState("")

  const fetchNotices = () => {
     fetch(BASE_URL + "/posts")
     .then(res => res.json())
     .then(data => {
        data.reverse()
        setNotices(data)
     }).catch(err => console.log(err))
  }

  useEffect(() => {
    fetchNotices()
  }, [])

  return (
    <div>
      <TitleContainer>
        <div
          style={{
            display: "flex",
            width: "70%",
            margin: "auto",
          }}
        >
          <h3
            style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: "Dekar, sans-serif",
            }}
          >
            Notícias
          </h3>
          <h4
            style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: "Dekar, sans-serif",
              display: "flex",
              marginLeft: "auto",
            }}
          >
            Fique por dentro de tudo que acontece!
          </h4>
        </div>
      </TitleContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          margin: "auto",
          textAlign: "justify",
          padding: "48px",
        }}
      >
        <h2
          style={{
            color: "#003094",
            fontSize: "25px",
            fontFamily: "Titillium Web, sans-serif",
            height: "35px",
            margin: "auto 0",
          }}
        >
          ÚLTIMAS <span style={{ fontWeight: "bolder" }}> NOTÍCIAS</span>
        </h2>
        {
          notices!== ""?
          notices.map(notice => (
          <div key={notice._id} style={{ display: "flex", margin: "16px 0" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                style={{ width: "254px", height: "167px" }}
                src={notice.postImage}
                alt={notice.title}
              />
            </div>
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
            <h2
              style={{
                color: "#1c3f95",
                fontSize: "20px",
                textAlign: "left",
                fontFamily: "inherit",
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              {notice.title}
            </h2>
            <p>
              {notice.description}
            </p>
            <button
              onClick={() =>
                (props.history.push("/noticias/" + notice.path))
              }
              style={{
                height: "initial",
                color: "#555",
                fontSize: "16px",
                border: "1px solid #555",
                padding: "6px 12px",
                float: "left",
                width: "initial",
                transition: "all .2s ease-in-out",
                background: "white",
                cursor: "pointer",
              }}
            >
              {"Leia mais"}
            </button>
          </div>
        </div>
          )):(
            <div className="loader-box">
            <div className="loader"></div>
          </div>
            )
        }
      </div>
    </div>
  );
};

export default NoticeList;
