import React from 'react'
import { TitleContainer, Grid, BodyNotice } from './styles'

const Contact = () => {
  const widthScreen = window.innerWidth;
  
  return(
    <div>
      <TitleContainer>
        <Grid>
            <h3 style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: 'Dekar, sans-serif',
              fontWeight: 700
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

        </Grid>
      </TitleContainer>
      <BodyNotice>
        {/* <h4 style={{
          color: "#333399",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: 'Dekar, sans-serif',
        }}>
          Entre em contato e venha fazer parte da nossa história
        </h4> */}
        <div>
        <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfSI2FSW_85WqFss0a3dB-kogV2SiCV6cotcQl5WAX0IO805w/viewform?embedded=true" width={widthScreen} height="1225" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
        </div>
      </BodyNotice>
    </div>
  )
}

export default Contact