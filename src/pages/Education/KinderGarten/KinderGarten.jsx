import React from "react";
import {
  Banner,
  ContainerCard,
  Container,
  ContainerText,
  Content,
} from "../styles";
import cards from "./cards";
import ElementCard from "../../../components/Card/Card";
import banner from "../../../images/banner_matriculas_Prancheta-1.png";

const KinderGarten = () => {
  return (
    <Container>
      <Banner>
        <img className="cover" id="fileImage" src={banner} alt="banner" />
      </Banner>
      <Content className="shadow-content">
        <ContainerText>
          <div className="text">
            <div className="title">Ensino Infantil</div>
            <div>
              <p>
                Promover a formação integral do ser humano é o marco de
                referência do projeto de educação deixada por Dom Bosco, ou
                seja, formar “Bons Cristãos e Honestos Cidadãos”. Nesse
                princípio, o processo ensino-aprendizagem da Educação Infantil
                busca integrar na sua proposta curricular conhecimentos de
                equilíbrio pessoal, de inserção social e de relação intra e
                interpessoal para a autonomia e equilíbrio como pessoa e como
                cidadão.
              </p>
              <p>
                Com esse propósito, a proposta curricular da Educação Infantil
                está integrada nas teorias do desenvolvimento infantil numa
                sequência didática fundamentando-se nas concepções que acreditam
                na construção do conhecimento integrado e global do ser humano,
                como consta no Referencial Curricular da Educação Infantil.
              </p>
            </div>
          </div>
          <div className="image shadow-image">
            <img

              id="fileImage"
              src="https://www.otaboanense.com.br/wp-content/uploads/2019/05/ensino_medio_grafico.jpg"
              alt="imagem"
            />
          </div>
        </ContainerText>
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
      </Content>
    </Container>
  );
};

export default KinderGarten;
