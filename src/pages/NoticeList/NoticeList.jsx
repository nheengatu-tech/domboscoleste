import React from "react";
import { TitleContainer } from "./styles";
import campanhaSetAmarelo from "../../images/dombosco-set-amarelo.jpeg";
import editalBolsa from "../../images/edital-bolsa-2011.jpeg";
import campanhaMatricula from "../../images/matriculas2021.jpeg";

const NoticeList = () => {
  return (
    <div>
      <TitleContainer>
        <div
          style={{
            display: "flex",
            width: "70%",
            margin: "auto",
          }}
        >
          <h3
            style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: "Dekar, sans-serif",
            }}
          >
            Notícias
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
        </div>
      </TitleContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          margin: "auto",
          textAlign: "justify",
          padding: "48px",
        }}
      >
        <h2
          style={{
            color: "#003094",
            fontSize: "25px",
            fontFamily: "Titillium Web, sans-serif",
            height: "35px",
            margin: "auto 0",
          }}
        >
          ÚLTIMAS <span style={{ fontWeight: "bolder" }}> NOTÍCIAS</span>
        </h2>
        {/* inicio noticia */}
        <div style={{ display: "flex", margin: "16px 0" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: "254px", height: "167px" }}
              src={campanhaSetAmarelo}
              alt={"campanha setembro amarelo"}
            />
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
              {"Campanha Setembro Amarelo 2020 Colégio Dom Bosco Leste."}
            </h2>
            <p>
              {
                "A Equipe de Pastoral juntamente com o corpo docente iniciou-se uma sensibilização a ação da nossa proposta pedagógica."
              }
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "#/noticias/campanha-setembro-amarelo-2020")
              }
              style={{
                height: "initial",
                color: "#555",
                fontSize: "16px",
                border: "1px solid #555",
                padding: "6px 12px",
                float: "left",
                width: "initial",
                transition: "all .2s ease-in-out",
                background: "white",
                cursor: "pointer",
              }}
            >
              {"Leia mais"}
            </button>
          </div>
        </div>
        {/* final noticia */}
        {/* inicio noticia */}
        <div style={{ display: "flex", margin: "16px 0" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: "254px", height: "167px" }}
              src={campanhaMatricula}
              alt={"campanha cdbleste matricula 2021"}
            />
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
              {
                "Início da Campanha de Matrículas e Renovação 2021 Dom Bosco Leste."
              }
            </h2>
            <p>
              {
                "Reafirmamos a grande satisfação em tê-los como membros integrantes da comunidade educativa do Colégio Dom Bosco Leste."
              }
            </p>
            <button
              onClick={() =>
                (window.location.href = "#/noticias/campanha-matriculas-2021")
              }
              style={{
                height: "initial",
                color: "#555",
                fontSize: "16px",
                border: "1px solid #555",
                padding: "6px 12px",
                float: "left",
                width: "initial",
                transition: "all .2s ease-in-out",
                background: "white",
                cursor: "pointer",
              }}
            >
              {"Leia mais"}
            </button>
          </div>
        </div>
        {/* final noticia */}
        {/* inicio noticia */}
        <div style={{ display: "flex", margin: "16px 0" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: "254px", height: "167px" }}
              src={editalBolsa}
              alt={"edital bolsas "}
            />
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
              {"O Colégio Dom Bosco Leste anuncia o Edital de Bolsas 2021."}
            </h2>
            <p>
              {
                "Realize sua inscrição e encontre a bolsa de estudo que sempre desejou!"
              }
            </p>
            <button
              onClick={() =>
                (window.location.href = "#/noticias/edital-bolsas-2021-cdbl")
              }
              style={{
                height: "initial",
                color: "#555",
                fontSize: "16px",
                border: "1px solid #555",
                padding: "6px 12px",
                float: "left",
                width: "initial",
                transition: "all .2s ease-in-out",
                background: "white",
                cursor: "pointer",
              }}
            >
              {"Leia mais"}
            </button>
          </div>
        </div>
        {/* final noticia */}
      </div>
    </div>
  );
};

export default NoticeList;
