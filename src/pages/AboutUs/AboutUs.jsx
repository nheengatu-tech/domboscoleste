import React from 'react'
import { TitleContainer } from './styles'
import shadLista from '../../images/shad-lista.png'

const AboutUs = () => {
  console.log("ABOUTUS");
  return(
    <div>
      <TitleContainer>
        <div style={{
          display: "flex",
          width: "70%",
          margin: "auto"
        }}>
            <h3 style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: 'Dekar, sans-serif'
            }}>
              Nossa Escola
            </h3>
            <h4 style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: 'Dekar, sans-serif',
              display: "flex",
              marginLeft: "auto"
            }}>
              Conheça quem somos e o que fazemos!
            </h4>

        </div>
      </TitleContainer>
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
        textAlign: "justify",
        padding: "48px"
      }}>
        <h4 style={{
          color: "#333399",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: 'Dekar, sans-serif',
        }}>
          Sobre Nós
        </h4>
        <div>
          <p>
O Colégio Dom Bosco Leste, está localizado na Av. Cosme Ferreira, 5122 Bairro Zumbi, na cidade de Manaus/AM. O Colégio é uma das ações educativas do Centro Vocacional Salesiano João Paulo II, pertencente a Inspetoria Salesiana Missionária da Amazônia (ISMA).
          </p>
          <p>
Seguindo Espírito de Dom Bosco (Fundador da Congregação Salesiana) especificamente se propõe, na sua ação educativa, contribuir para a formação integral do educando, visando ao desenvolvimento de suas potencialidades através da tomada de consciência de sua dignidade, responsabilidade e solidariedade, privilegiando o SER sobre o TER.
          </p>
          <p>
Além disso, através de atividades pedagógicas diversificadas, desenvolve competências e habilidades essenciais que garantam ao educando o acesso e permanência no Ensino Superior com sucesso na vida Acadêmica e Profissional.
          </p>
          <p>
Ao compor as Escolas que integram a Rede Salesiana Brasil de Escolas (RSB), assume os desafios contemporâneos e, mediante suas instituições educativas, oferece uma resposta concreta, sistemática e ampla para a formação continuada e integral de seus próprios protagonistas: educandos e educadores.
          </p>
          <p>
Atendendo aos artigos 2º e 3º da Lei 9394/96, a Escola tem por finalidade desenvolver nos alunos o senso social e cívico, cultural, moral e ético; por isso, oferece à Comunidade uma educação que visa o desenvolvimento do aluno inserido na sua realidade, ministrando formação integral na Educação Básica: Educação Infantil, Ensino Fundamental e Ensino Médio.
          </p>
          <p>
Além disso, o Colégio tem também como meta formar para a cidadania consciente, contribuindo para que os alunos sejam protagonistas e agentes de transformação da sociedade.
          </p>
        <div style={{ color: "#1c3f95"}}>
          ______________________
        </div>
        <div style={{ display: "flex", padding: "16px" }}>
          <div>
           <img src={shadLista} alt={"shad list"} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto 16px"
          }}>
            <span>Missão</span>
            <span>“Animar e gerenciar a missão educativa com a força do carisma Salesiano em suas unidades”.</span>
          </div>
        </div>
        <div style={{ display: "flex", padding: "16px" }}>
          <div>
           <img src={shadLista} alt={"shad list"} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto 16px"
          }}>
            <span>Visão</span>
            <span>Ser uma rede de excelência acadêmica nas dimensões educativo pastoral.</span>
          </div>
        </div>
        <div style={{ display: "flex", padding: "16px" }}>
          <div>
           <img src={shadLista} alt={"shad list"} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto 16px"
          }}>
            <span>Valores</span>
            <span>Sistema Preventivo de Dom Bosco, Competência, Solidariedade, Ética & Fidelidade</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs