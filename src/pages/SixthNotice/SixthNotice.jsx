import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { TitleContainer, Grid, BodyNotice } from "./styles";
import feiraCdbl from "../../images/voce-faz-a-feira.jpeg";
import { Helmet } from "react-helmet";

const SixthNotice = (props) => {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Feira CDB Leste"></meta>
        <meta property="og:image" content={feiraCdbl}></meta>
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
              src={feiraCdbl}
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
              Você faz a feira!
            </h2>
            <p>
              O projeto foi realizado no período de um semestre. A culminância
              ocorreu no dia 10/11/20 pelas turmas do 3º ano A e B, das
              professoras Sandra Soares e Janaína. É um projeto novo da rede
              salesiana que faz parte da Coleção Nautas. No decorrer do mesmo
              várias atividades de pesquisas escritas e através da internet
              foram realizadas, bem como atividades no livro e caderno,
              xerocopiadas, plantio das frutas, verduras e legumes em vasos,
              roteiro de estudos, confecção de materiais informativos, (folders
              e panfletos), contendo informações importantes sobre o alimento
              escolhido para cultivar e no dia da culminância apresentar para um
              grupo pequeno de alunos e mães no Colégio, obedecendo aos
              critérios de segurança da OMS, por conta da pandemia que estamos
              passando.
            </p>
            <div>
              Clique
              <a
                href="https://www.flickr.com/photos/190154461@N08/albums/72157716856486942"
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
                quote={"Feira CDB Leste"}
                url={`https://www.domboscoleste.com.br${window.location.pathname}`}
              >
                <Helmet>
                  <meta property="og:title" content="Feira CDB Leste"></meta>
                  <meta property="og:image" content={feiraCdbl}></meta>
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
                title={"Feira CDB Leste"}
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

export default SixthNotice;
