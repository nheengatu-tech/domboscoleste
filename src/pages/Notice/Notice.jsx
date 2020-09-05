import React, { useEffect, useState } from 'react'
import useJsonBox from "react-jsonbox";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton
} from 'react-share'
import { GrFacebook, GrLinkedin } from 'react-icons/gr'
import { FaWhatsappSquare } from 'react-icons/fa'
import { TitleContainer } from './styles'
import missaForFakePost from '../../images/missa-fake-post.jpg'

const Notice = (props) => {
  const { read } = useJsonBox();
  const [notice, setNotice] = useState(null)
  const urlTitle = props.match.params.title.replace(/-/g, " ") 

  const fetchNotices = async() => {
    const { data } = await read("posts")
    data.map((notice) => {
      // console.log(notice.title === urlTitle);
      console.log(notice);
      if (notice.title === urlTitle) {
        setNotice(notice)
      }
    })
  }


  useEffect(() => {
    fetchNotices()
  },[])
  return(
    <div>
      <TitleContainer>
        <div style={{
          display: "flex",
          width: "70%",
          margin: "auto"
        }}>
            <h3 style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: 'Dekar, sans-serif'
            }}>
              Notícia
            </h3>
            <h4 style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: 'Dekar, sans-serif',
              display: "flex",
              marginLeft: "auto"
            }}>
              Fique por dentro de tudo que acontece!
            </h4>

        </div>
      </TitleContainer>
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
        textAlign: "justify",
        padding: "48px"
      }}>
        {/* <h4 style={{
          color: "#333399",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: 'Dekar, sans-serif',
        }}>
          Entre em contato e venha fazer parte da nossa história
        </h4> */}
        {
          notice ? 
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: "500px", height: "335px" }}
                src={missaForFakePost} alt={"missa fake post"} />
                {/* notice.image */}
                <span>Missa Solene em Honra à Nossa Senhora Auxiliadora.</span>
              </div>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{
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
                <p>{notice.text}</p>
                <div style={{ display: "flex" }}>
                  <span style={{
                    display: "flex",
                    margin: "auto 0",
                  }}
                  >
                    Compartilhe: </span>
                  <FacebookShareButton
                    style={{
                      margin: "4px",
                      color: "#4267b2"
                    }}
                    url={window.location.href}>
                    <GrFacebook size={"2em"}/> 
                  </FacebookShareButton>
                  <LinkedinShareButton style={{ color: "#0077b5"}}
                  url={window.location.href}>
                    <GrLinkedin size={"2em"}/> 
                  </LinkedinShareButton>
                  <WhatsappShareButton style={{ color: "#075e54"}}
                  url={window.location.href}>
                    <FaWhatsappSquare size={"2.5em"}/> 
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            :
            null
          }
      </div>
    </div>
  )
}

export default Notice