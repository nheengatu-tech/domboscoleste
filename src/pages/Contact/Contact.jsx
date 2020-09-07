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
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScp9yr-FRldZS-PHGVZ0wutSfBduEghmAJTJX49Ivon8w49-Q/viewform?embedded=true" width="640" height="1149" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe> */}
        <div>
        <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLScp9yr-FRldZS-PHGVZ0wutSfBduEghmAJTJX49Ivon8w49-Q/viewform?embedded=true" width={widthScreen} height="1225" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
        </div>
      </BodyNotice>
    </div>
  )
}

export default Contact