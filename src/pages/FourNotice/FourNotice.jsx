import React from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { GrFacebook } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { TitleContainer, Grid, BodyNotice } from "./styles";
import semanaDaCrianca from "../../images/semana-da-crianca.jpeg";
import { Helmet } from "react-helmet";

const FourNotice = (props) => {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Semana da Criança - Festinha"></meta>
        <meta property="og:image" content={semanaDaCrianca}></meta>
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
              src={semanaDaCrianca}
              alt={"Semana da Criança - Festinha"}
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
              Semana da Criança com Festinha!
            </h2>
            <p>
              Sobre nossa semana do dia das crianças: O Colégio Dom Bosco Leste
              organizou uma Festinha recheada de Atividades Educativas e
              Lúdicas, com cineminha, parque temático e dia da bike! Confira as
              fotos no link abaixo: #JuntosParaVocêMudarOmundo
              #JuntosParaVocêSer+ #MatrículasAbertas #SomosArsb #RSB
            </p>
            <div>
              Clique
              <a
                href="https://www.flickr.com/photos/190154461@N08/albums/72157716270257222"
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
                quote={"Semana da Criança - Festinha"}
                url={`https://www.domboscoleste.com.br${window.location.pathname}`}
              >
                <Helmet>
                  <meta
                    property="og:title"
                    content="Semana da Criança - Festinha"
                  ></meta>
                  <meta property="og:image" content={semanaDaCrianca}></meta>
                  <meta property="og:image:type" content="image/jpg"></meta>
                  <meta property="og:url" content={window.location.href}></meta>
                </Helmet>
                <GrFacebook size={"2em"} />
              </FacebookShareButton>
              {/* <LinkedinShareButton
                style={{ color: "#0077b5" }}
                url={window.location.href}
              >
                <GrLinkedin size={"2em"} />
              </LinkedinShareButton> */}
              <WhatsappShareButton
                style={{ color: "#075e54" }}
                url={window.location.href}
                title={"Semana da Criança - Festinha"}
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

export default FourNotice;
