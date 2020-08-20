import React from 'react'
import { TitleContainer } from './styles'

const Notice = () => {
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
        <div>
          <div>
            {/* img */}
            {/* subtitle */}
          </div>
          <div>
            {/* title */}
            {/* text */}
          </div>
          <div>
            {/* share social medias */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notice