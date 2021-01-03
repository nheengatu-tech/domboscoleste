import React, { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton
} from 'react-share'
import { GrFacebook, GrLinkedin } from 'react-icons/gr'
import { FaWhatsappSquare } from 'react-icons/fa'
import { TitleContainer } from './styles'
import { BASE_URL } from "../../utils"
import ReactHtmlParser from 'react-html-parser'; 
import { convertFromHTML, ContentState, convertToRaw } from 'draft-js'

const Notice = (props) => {
  const [notice, setNotice] = useState(null)
  const urlTitle = props.match.params.title


  const fetchNotices = async() => {
    fetch(BASE_URL + "/posts/" + urlTitle)
      .then(res => res.json())
      .then(data => setNotice(data[0]))
  }

  const convertText = () => {
    const sampleMarkup = notice.text
    const contentHTML = convertFromHTML(sampleMarkup)
    const state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap)
    const content = JSON.stringify(convertToRaw(state))

    // console.log('contentHTML -> ', contentHTML);
    // console.log("state -> ", state);
    // console.log("content -> ", content);
    console.log(stringToHTML(notice.text));

    return "contentHTML"
  }

  const stringToHTML = function (str) {

    // If DOMParser is supported, use it
    // if (support) {
    //   var parser = new DOMParser();
    //   var doc = parser.parseFromString(str, 'text/html');
    //   return doc.body;
    // }
  
    // Otherwise, fallback to old-school method
    var dom = React.createElement('div', {}, str);
    // var dom = document.createElement('div');
    // dom.innerHTML = str;
    return dom;
  
  };

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
                src={notice.postImage} alt={"missa fake post"} />
                {/* notice.image */}
                {/* <span>Missa Solene em Honra à Nossa Senhora Auxiliadora.</span> */}
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
                <div> {ReactHtmlParser(notice.text)} </div>
                {/* <div>{stringToHTML(notice.text)}</div> */}
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