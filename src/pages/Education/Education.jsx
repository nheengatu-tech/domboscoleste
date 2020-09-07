import React from 'react'
import { TitleContainer, Grid, BodyNotice } from './styles'
import shadLista from '../../images/shad-lista.png'

const Education = () => {
  return(
    <div>
      <TitleContainer>
        <Grid>
            <h3 style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: 'Dekar, sans-serif',
              fontWeight: 700,
            }}>
              Ensino
            </h3>
            <h4 style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: 'Dekar, sans-serif',
              display: "flex",
              marginLeft: "auto"
            }}>
              Conheça a nossa Missão!
            </h4>

        </Grid>
      </TitleContainer>
      <BodyNotice>
        <h4 style={{
          color: "#333399",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: 'Dekar, sans-serif',
        }}>
          Colégio Dom Bosco Leste
        </h4>
        <div>
          <p>
          O COLÉGIO DOM BOSCO LESTE, norteia sua ação educativa pelos princípios do Sistema Preventivo de Dom Bosco, que são:
          </p>
          <p>
          <strong>
            RAZÃO
          </strong>
          <br/>
          Através de uma convivência construtiva e crítica, educadores e educandos experienciam, na prática cotidiana, o desenvolvimento pessoal em todas as suas dimensões, o corpo, a mente, a capacidade de atuar com profissionalismo e democracia participativa, a consciência ética. Todos nos educamos por meio de participação, corresponsabilidade, espírito crítico e diálogo.
          </p>
          <p>
          <strong>
          ESPIRITUALIDADE
          </strong>
          <br/>
          A pessoa busca o sentido da vida e a alegria de viver. Através de uma convivência integradora, experienciando a unidade pessoal, a mística, a ascese, com base no Evangelho, educadores e educandos abrem-se aos valores do humano e do transcendente, buscando construir o próprio projeto de vida, enquanto se inserem na comunidade de fé.
          </p>
          <p>
          <strong>
          AMOR
          </strong>
          <br/>
Quem percebe que é amado, tornar-se também capaz de sair de si e amar os outros, A presença Salesiana se identifica pelas atitudes de acolhida, bondade, alegria e fraternidade, que criam um lima de família. A afeição demonstrada é o “tempero” de tudo. Dom Bosco usava a palavra “amorevolezza” para indicar amor, carinho, afeição demonstrada, familiaridade, presença. A amarevolezza é uma energia espiritual, que nasce da mística do amor de Deus para os jovens.O COLÉGIO NOSSA SENHORA AUXILIADORA, dirigido pelas religiosas Filhas de Maria Auxiliadora (FMA) - Salesianas de Dom Bosco, juntamente com seus colaboradores leigos, norteia sua ação educativa pelos princípios do Sistema Preventivo de Dom Bosco, que são:
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
            <span>Escola Salesiana</span>
            <span>Seguindo o Sistema Preventivo de Dom Bosco</span>
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
            <span>Escola Inovadora</span>
            <span>Respondem aos desafios da educação do séc. XXI</span>
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
            <span>Escola em rede</span>
            <span>Fazem parte da maior rede de escolas católicas da América: a RSB- Escolas</span>
          </div>
        </div>
        </div>
      </BodyNotice>
    </div>
  )
}

export default Education