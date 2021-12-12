import React from 'react'

import { TitleContainer } from './styles'

const Pastoral = (props) => {

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
              Pastoral
            </h3>
            <h4 style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: 'Dekar, sans-serif',
              display: "flex",
              marginLeft: "auto"
            }}>
              “Basta que sejais jovem para que eu vos ame profundamente”
            </h4>

        </div>
      </TitleContainer>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "500px",
        width: "70%",
        margin: "auto",
        textAlign: "justify",
        padding: "48px"
      }}>
        <p>Pastoral Salesiana é a dimensão da missão evangelizadora da Igreja Católica no espaço da escola. Fundamenta-se, esta, em princípios antropológico-cristãos e no valor do diálogo inter-religioso para contribuir com a educação integral do indivíduo. A pastoral salesiana não é diversa da eclesial, que é justamente toda ela evangelizadora. Caracteriza-se pelo estilo de mediação educativa, mas é também uma pastoral que passa através da própria experiência educativa.</p>
        <p>Ela é pastoral, em primeiro lugar, por ser expressão multiforme de uma comunidade eclesial, em cujo núcleo animador está presente a comunidade dos consagrados salesianos, com os colaboradores, constituindo juntos a comunidade eclesial no território, marcada pelo carisma salesiano, que exprime a sua missão evangelizadora através das obras educativo-pastorais, onde o aluno sente-se convocado a ser protagonista de sua vida e dedicá-la em favor do próximo, com o sentimento de generosidade e doação.</p>
      </div>
    </div>
  )
}

export default Pastoral