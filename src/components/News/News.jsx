import React from "react";
import { Button, Component, TitleGrid, ImgNews, ContainerGrid } from "./styles";
import { RiAddCircleLine } from "react-icons/ri";
import teatroCdbl from "../../images/teatro-cdbl.jpeg";
import feiraCdbl from "../../images/voce-faz-a-feira.jpeg";
import semanaDaCrianca from "../../images/semana-da-crianca.jpeg";

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
            12/11/2020
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
            Projeto da rede: Você faz à feira!
          </h5>
          <ImgNews>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              src={feiraCdbl}
              alt={"Projeto da rede: Você faz à feira!"}
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
            Realizado pelas turmas 3° A/B do EF I, com as professoras Sandra
            Maria e Janaína no intuito de investigar os tipos de alimentos que
            ingerimos e saber um pouco mais sobre os caminhos que um alimento
            percorre até chegar ao nosso prato.
          </p>
          <Button
            onClick={() => window.open("#/noticias/voce-faz-a-feira")}
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
            12/11/2020
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
            Teatro do Terceirão Ensino Médio Colégio Dom Bosco Leste!
          </h5>
          <ImgNews>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              src={teatroCdbl}
              alt={"Teatro 3° Ensino Médio"}
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
            Atividade realizada pela disciplina de Educação Física ministrada
            pelo Prof° Paulo Milton sobre transtorno psicológicos!
          </p>
          <Button
            onClick={() => window.open("#/noticias/teatro-cdbl-ensino-medio")}
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
            19/10/2020
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
            Festinha da Semana da Criança no CDB Leste - Confira as fotos aqui
          </h5>
          <ImgNews>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              src={semanaDaCrianca}
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
            Realizamos durante uma semana inteira a Festa em comemoração as
            crianças!
          </p>
          <Button
            onClick={() => window.open("#/noticias/semana-da-crianca")}
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
