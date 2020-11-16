import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import bannerListaMaterial from "../../images/baner-lista-de-material.jpeg";
import bannerProcessoSeletivoBolsas from "../../images/banner-processo-seletivo-bolsas.jpeg";
import bannerMatricula from "../../images/banner-matricula.jpeg";
import bannerResultado from "../../images/banner-resultado.jpg";
import bannerBlackWeek from "../../images/banner-blackweek.jpeg";
import { tablet } from "../../_breakpoints";

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Item = styled.img`
  height: inherit;
  cursor: pointer;
  display: flex;
  width: 100%;
  display: flex !important;
  justify-content: center;
`;
// 1349X348

const CarouselList = () => {
  return (
    <Carousel autoplay>
      <span
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex !important",
          margin: "auto",
          justifyContent: "center !important",
        }}
        onClick={() =>
          window.open(
            "https://web.whatsapp.com/send?phone=+5592992599150",
            "_blank"
          )
        }
      >
        <Item src={bannerBlackWeek} alt={"Black Week Promoção"} />
      </span>
      <span
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex !important",
          margin: "auto",
          justifyContent: "center !important",
        }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1CDafTFlOhHiLftOK8xFi03FI79W9PeWa/view?usp=sharing",
            "_blank"
          )
        }
      >
        <Item src={bannerResultado} alt={"Lista de Resultado"} />
      </span>
      <span
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex !important",
          margin: "auto",
          justifyContent: "center !important",
        }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/107jPMuNvQp663t-XZ045fvL0R3RAr33j/view?usp=sharing",
            "_blank"
          )
        }
      >
        <Item src={bannerListaMaterial} alt={"Lista de Material"} />
      </span>
      {/* <span
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex !important",
          margin: "auto",
          justifyContent: "center !important",
        }}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1eyrylki2liBBfLEAiJC56borL3rZu2IA/view?usp=sharing",
            "_blank"
          )
        }
      >
        <Item
          src={bannerProcessoSeletivoBolsas}
          alt={"Processo seletivo de Bolsas"}
        />
      </span> */}
      <span
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex !important",
          margin: "auto",
          justifyContent: "center !important",
        }}
        onClick={() =>
          window.open(
            "https://forms.gennera.com.br/view#/formulario/5489646583647829751",
            "_blank"
          )
        }
      >
        <Item src={bannerMatricula} alt={"Banner de matricula 2021"} />
      </span>
    </Carousel>
  );
};

export default CarouselList;
