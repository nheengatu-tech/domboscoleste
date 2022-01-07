import React from "react";
import { Banner, ContainerCard, Container, Content } from "../styles";
import cards from "../../KinderGarten/cards";
import ElementCard from "../../../components/Card/Card";
import banner from "../../../images/banner_matriculas_Prancheta-1.png";
import floatingImg from "../../../images/isma.jpg";

const HighSchool = () => {
  return (
    <Container>
      <Banner>
        <img id="fileImage" src={banner} alt="imagem" />
      </Banner>
      <Content>
        <div className="text">
          <div className="title">Ensino Médio</div>
          <div>
            <p>
              O Ensino Médio desenvolve suas atividades educativas integradas no
              Marco Referencial da Rede Salesiana de Escolas, embasadas nos
              conceitos legais dos Parâmetros Curriculares Nacionais do Ensino
              Médio.
            </p>
            <p>
              Nesse sentido, o processo educativo do Ensino Médio do Colégio Dom
              Bosco Leste busca o aprofundamento, a consolidação dos
              conhecimentos construídos no Ensino Fundamental para a inserção de
              novos saberes, garantindo a formação integral do educando, ou
              seja, pessoa com pensamento crítico, dotada de valores, princípios
              éticos e sociais e competências e habilidades para o convívio
              individual e social, autônomo de suas próprias ações.
            </p>
            <p>
              Com essa visão, os conteúdos teóricos dos diferentes componentes
              curriculares e suas respectivas áreas do conhecimento, tornam-se
              via de mão dupla, de forma interdisciplinar, propiciando ao
              educando uma aprendizagem preenchida de conceitos significativos.
            </p>
            <p>
              As áreas de conhecimento com suas respectivas disciplinas a serem
              desenvolvidas, com atividades criativas, dinâmicas e experimentais
              nesse nível de ensino são:
            </p>
          </div>
        </div>
        <div className="image">
          <img id="fileImage" src={floatingImg} alt="imagem" />
        </div>
      </Content>
      <ContainerCard>
        <div className="title">Área do conhecimento</div>
        <div className="cardDeck">
          {cards !== null
            ? cards.map((card, cardKey) => (
                <ElementCard key={cardKey} title={card.title}>
                  <div className="item">
                    {card.itens.map((item, itemKey) => (
                      <li key={itemKey}>{item}</li>
                    ))}
                  </div>
                </ElementCard>
              ))
            : null}
        </div>
      </ContainerCard>
    </Container>
  );
};

export default HighSchool;
