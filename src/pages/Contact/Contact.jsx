import React from 'react'
import { TitleContainer } from './styles'

const Contact = () => {
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
              Fale Conosco
            </h3>
            <h4 style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: 'Dekar, sans-serif',
              display: "flex",
              marginLeft: "auto"
            }}>
              Tire sua dúvida agora mesmo!
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
        <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfSI2FSW_85WqFss0a3dB-kogV2SiCV6cotcQl5WAX0IO805w/viewform?embedded=true" width="640" height="1225" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact