import React from 'react'
import {
  Button,
  Component,
  TitleGrid,
  ImgNews,
  ContainerGrid,
} from './styles'
import { RiAddCircleLine } from 'react-icons/ri'
import hotnews1 from '../../images/hotnews1.jpg'


const HotNews = () => {
  return(
    <Component>
      <TitleGrid>
        <h2
          style={{
            color: "#003094",
            fontSize: "25px",
            fontFamily: 'Titillium Web, sans-serif',
            height: "35px",
            margin: "auto 0"
          }}
        >
          EVENTOS <span style={{ fontWeight: "bolder" }}>& NOTÍCIAS</span>
        </h2>
        <Button
        >
          <span
            style={{
              marginRight: "2px",

            }}
          >
            <RiAddCircleLine />
          </span>
          <span>
            Ler todas as notícias
          </span>

        </Button>
      </TitleGrid>
      <ContainerGrid>
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
  )
}

export default HotNews