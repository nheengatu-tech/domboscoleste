import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton
} from 'react-share'
import MetaTags from 'react-meta-tags';
import { GrFacebook, GrLinkedin } from 'react-icons/gr'
import { FaWhatsappSquare } from 'react-icons/fa'
import { TitleContainer, Grid, BodyNotice } from './styles'
import editalBolsa from '../../images/edital-bolsa-2011.jpeg'

const WIPNotice = (props) => {
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

        </Grid>
      </TitleContainer>
      <BodyNotice>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img style={{ maxWidth: "500px", maxHeight: "335px", padding: "12px" }}
            src={editalBolsa} alt={"edital bolsa 2021"} />
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
              O Colégio Dom Bosco Leste anuncia o Edital de Bolsas 2021.
            </h2>
            <p>O processo seletivo disponibiliza mais de 30 bolsas, sendo parciais (50%) e integrais (100%) para o Ensino Fundamental II ao Ensino Médio, sem taxa de inscrição, destinadas exclusivamente aos candidatos que se encontram em situação de vulnerabilidade social e que comprovem sua situação por meio de avaliação socioeconômica.
Realize sua inscrição e encontre a bolsa de estudo que sempre desejou!</p>
            <div>
              Clique
              <a href="https://forms.gennera.com.br/view#/formulario/2723299494235674115">
              {' '} aqui
              </a> para se candidatar à Bolsa 2021
            </div>
            <div>
              Clique
              <a href="https://drive.google.com/file/d/195XhYXu8epJTxLWBAs5x7AtQUtpbeav9/view?usp=sharing" target="blank">
              {' '} aqui
              </a> para baixar o Edital
            </div>
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
                // children={<img src={editalBolsa}/>}
                quote={"O Colégio Dom Bosco Leste anuncia o Edital de Bolsas 2021."
                }
                url={`https://www.domboscoleste.com.br${window.location.pathname}`}>
                  <MetaTags>
                    <meta property="og:title" content="O Colégio Dom Bosco Leste anuncia o Edital de Bolsas 2021."></meta>
                    <meta property="og:image" content={editalBolsa}></meta>
                  </MetaTags>
                <GrFacebook size={"2em"}/> 
              </FacebookShareButton>
              <LinkedinShareButton style={{ color: "#0077b5"}}
              url={window.location.href}>
                <GrLinkedin size={"2em"}/> 
              </LinkedinShareButton>
              <WhatsappShareButton style={{ color: "#075e54"}}
              url={window.location.href}
              title={"O Colégio Dom Bosco Leste anuncia o Edital de Bolsas 2021."}
              >
                <FaWhatsappSquare size={"2.5em"}/> 
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </BodyNotice>
    </div>
  )
}

export default WIPNotice