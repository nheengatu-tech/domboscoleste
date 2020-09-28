import React from "react";
import { Button, Component, TitleGrid, ImgNews, ContainerGrid } from "./styles";
import { RiAddCircleLine } from "react-icons/ri";
import editalBolsa from "../../images/edital-bolsa-2011.jpeg";
import campanhaMatricula from "../../images/matriculas2021.jpeg";
import campanhaSetAmarelo from "../../images/dombosco-set-amarelo.jpeg";

const HotNews = () => {
  return (
    <Component>
      <TitleGrid>
        <h2
          style={{
            color: "#003094",
            fontSize: "25px",
            fontFamily: "Titillium Web, sans-serif",
            height: "35px",
            margin: "auto 0",
          }}
        >
          EVENTOS <span style={{ fontWeight: "bolder" }}>& NOTÍCIAS</span>
        </h2>
        <Button>
          <span
            style={{
              marginRight: "2px",
            }}
          >
            <RiAddCircleLine />
          </span>
          <span>Ler todas as notícias</span>
        </Button>
      </TitleGrid>
      <ContainerGrid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "30%",
            cursor: "pointer",
            margin: "8px",
          }}
        >
          <span
            style={{
              color: "#666666",
              fontSize: "12px",
              textAlign: "start",
            }}
          >
            28/09/2020
          </span>
          <h5
            style={{
              marginTop: 0,
              fontSize: "16px",
              color: "#003094",
              textAlign: "start",
              lineHeight: "initial",
            }}
          >
            Campanha Setembro Amarelo 2020 Colégio Dom Bosco Leste.
          </h5>
          <ImgNews>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              src={campanhaSetAmarelo}
              alt={"campanha setembro amarelo 2020"}
            />
          </ImgNews>
          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              paddingTop: "10px",
              textAlign: "justify",
            }}
          >
            A Equipe de Pastoral juntamente com o corpo docente iniciou-se uma
            sensibilização a ação da nossa proposta pedagógica.
          </p>
          <Button
            onClick={() =>
              window.open("#/noticias/campanha-setembro-amarelo-2020")
            }
            style={{ margin: "auto 0", textTransform: "initial" }}
          >
            Leia mais
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "30%",
            cursor: "pointer",
            margin: "8px",
          }}
        >
          <span
            style={{
              color: "#666666",
              fontSize: "12px",
              textAlign: "start",
            }}
          >
            21/09/2020
          </span>
          <h5
            style={{
              marginTop: 0,
              fontSize: "16px",
              color: "#003094",
              textAlign: "start",
              lineHeight: "initial",
            }}
          >
            Início da Campanha de Matrículas e Renovação 2021 Dom Bosco Leste.
          </h5>
          <ImgNews>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              src={campanhaMatricula}
              alt={"campanha cdbleste matricula 2021"}
            />
          </ImgNews>
          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              paddingTop: "10px",
              textAlign: "justify",
            }}
          >
            Reafirmamos a grande satisfação em tê-los como membros integrantes
            da comunidade educativa do Colégio Dom Bosco Leste.
          </p>
          <Button
            onClick={() => window.open("#/noticias/campanha-matriculas-2021")}
            style={{ margin: "auto 0", textTransform: "initial" }}
          >
            Leia mais
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "30%",
            cursor: "pointer",
            margin: "8px",
          }}
        >
          <span
            style={{
              color: "#666666",
              fontSize: "12px",
              textAlign: "start",
            }}
          >
            04/09/2020
          </span>
          <h5
            style={{
              marginTop: 0,
              fontSize: "16px",
              color: "#003094",
              textAlign: "start",
              lineHeight: "initial",
            }}
          >
            O Colégio Dom Bosco Leste anuncia o Edital de Bolsas 2021.
          </h5>
          <ImgNews>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              src={editalBolsa}
              alt={"hot news"}
            />
          </ImgNews>
          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              paddingTop: "10px",
              textAlign: "justify",
            }}
          >
            Realize sua inscrição e encontre a bolsa de estudo que sempre
            desejou!
          </p>
          <Button
            onClick={() => window.open("#/noticias/edital-bolsas-2021-cdbl")}
            style={{ margin: "auto 0", textTransform: "initial" }}
          >
            Leia mais
          </Button>
        </div>
        {/* <div style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "30%",
          cursor: "pointer",
          margin: "8px"
        }}>
          <span style={{
            color: "#666666",
            fontSize: "12px",
            textAlign: "start"
          }}>
            31/07/2020
          </span>
          <h5
            style={{
              marginTop: 0,
              fontSize: "16px",
              color: "#003094",
              textAlign: "start",
              lineHeight: "initial"
            }}
          >
            Alunos salesianos criam perfil com dicas de estudos para ajudar colegas de turma
          </h5>
          <ImgNews>
            <img style={{
              maxWidth: "100%",
              height: "auto"
            }}
            src={hotnews1} alt={"hot news"}/>
          </ImgNews>
          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              paddingTop: "10px",
              textAlign: "justify"
            }}
          >
          "A ideia que nos motiva é ajudar o outro. No começo, fiquei preocupado se teria tempo para conciliar minhas tarefas, mas o Studenthink vem me ajudando com os estudos"                                
          </p>
          <Button style={{ margin: "auto 0", textTransform: "initial" }}>Leia mais</Button>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "30%",
          cursor: "pointer",
          margin: "8px"
        }}>
          <span style={{
            color: "#666666",
            fontSize: "12px",
            textAlign: "start"
          }}>
            31/07/2020
          </span>
          <h5
            style={{
              marginTop: 0,
              fontSize: "16px",
              color: "#003094",
              textAlign: "start",
              lineHeight: "initial"
            }}
          >
            Alunos salesianos criam perfil com dicas de estudos para ajudar colegas de turma
          </h5>
          <ImgNews>
            <img style={{
              maxWidth: "100%",
              height: "auto"
            }}
            src={hotnews1} alt={"hot news"}/>
          </ImgNews>
          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              paddingTop: "10px",
              textAlign: "justify"
            }}
          >
          "A ideia que nos motiva é ajudar o outro. No começo, fiquei preocupado se teria tempo para conciliar minhas tarefas, mas o Studenthink vem me ajudando com os estudos"                                
          </p>
          <Button style={{ margin: "auto 0", textTransform: "initial" }}>Leia mais</Button>
        </div> */}
      </ContainerGrid>
    </Component>
  );
};

export default HotNews;
