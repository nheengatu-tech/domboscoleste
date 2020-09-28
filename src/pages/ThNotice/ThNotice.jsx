import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { TitleContainer, Grid, BodyNotice } from "./styles";
import campanhaSetAmarelo from "../../images/dombosco-set-amarelo.jpeg";
import { Helmet } from "react-helmet";

const ThNotice = (props) => {
  const widthScreen = window.innerWidth;
  return (
    <div>
      <Helmet>
        <meta
          property="og:title"
          content="O Colégio Dom Bosco Leste inicio da campanha de matrículas 2021."
        ></meta>
        <meta property="og:image" content={campanhaSetAmarelo}></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
        <meta property="og:url" content={window.location.href}></meta>
      </Helmet>
      <TitleContainer>
        <Grid>
          <h3
            style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: "Dekar, sans-serif",
              fontWeight: 700,
            }}
          >
            Notícia
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
        </Grid>
      </TitleContainer>
      <BodyNotice>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ maxWidth: "500px", maxHeight: "335px", padding: "12px" }}
              src={campanhaSetAmarelo}
              alt={"campanha de matrículas 2021"}
            />
            {/* <span>Missa Solene em Honra à Nossa Senhora Auxiliadora.</span> */}
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
              Campanha Setembro Amarelo
            </h2>
            <p>
              A Equipe de Pastoral juntamente com o corpo docente iniciou-se uma
              sensibilização a ação da nossa proposta pedagógica que é a defesa
              da vida e portanto, o combate a tantos malefícios presentes em
              nossa vida que as vezes levam a pessoa a cometer o suicídio. Foram
              entregues este símbolo como sinal de comprometimento com todos que
              acreditam na força da vida, pensando envolver e ajudar o nossos
              alunos a pensarem na questão fizemos a promoção (concurso) da
              melhor frase que articule as palavras que devem fazer parte do
              agir frente este problema que pode estar em casa, entre amigos ou
              conhecidos, quais termos: amor, prevenção, cuidado escuta. Você
              não está sozinho! #JuntosParaVocêMudarOmundo #JuntosParaVocêSer+
              #MatrículasAbertas #SomosArsb #RSB
            </p>
            <div>
              Clique
              <a
                href="https://www.flickr.com/photos/190154461@N08/albums/72157716109797688"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
              >
                {" "}
                aqui
              </a>{" "}
              para ver todas as fotos
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  display: "flex",
                  margin: "auto 0",
                }}
              >
                Compartilhe:{" "}
              </span>
              <FacebookShareButton
                style={{
                  margin: "4px",
                  color: "#4267b2",
                }}
                quote={
                  "O Colégio Dom Bosco Leste inicia campanha e renovação de matrículas 2021."
                }
                url={`https://www.domboscoleste.com.br${window.location.pathname}`}
              >
                <Helmet>
                  <meta
                    property="og:title"
                    content="O Colégio Dom Bosco Leste inicia campanha e renovação de matrículas 2021."
                  ></meta>
                  <meta property="og:image" content={campanhaSetAmarelo}></meta>
                  <meta property="og:image:type" content="image/jpg"></meta>
                  <meta property="og:url" content={window.location.href}></meta>
                </Helmet>
                <GrFacebook size={"2em"} />
              </FacebookShareButton>
              <LinkedinShareButton
                style={{ color: "#0077b5" }}
                url={window.location.href}
              >
                <GrLinkedin size={"2em"} />
              </LinkedinShareButton>
              <WhatsappShareButton
                style={{ color: "#075e54" }}
                url={window.location.href}
                title={
                  "O Colégio Dom Bosco Leste inicia campanha e renovação de matrículas 2021"
                }
              >
                <FaWhatsappSquare size={"2.5em"} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </BodyNotice>
    </div>
  );
};

export default ThNotice;
