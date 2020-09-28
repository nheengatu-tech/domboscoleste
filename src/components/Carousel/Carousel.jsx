import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
// import bannerHero from "../../images/banner_matriculas_Prancheta-1.png";
import bannerReservaMatricula from "../../images/banner-reserva-matricula.png";
import bannerMatriculaAberta from "../../images/banner-matriculas-abertas.png";
// import bannerParceiros from '../../images/banner-parceiros.jpeg'

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Item = styled.img`
  width: 1350px;
  height: 400px;
  cursor: pointer;
`;

const CarouselList = () => {
  return (
    <Carousel autoplay>
      <span
        style={{
          cursor: "pointer",
        }}
        onClick={() =>
          window.open(
            "https://forms.gennera.com.br/view#/formulario/5489646583647829751",
            "_blank"
          )
        }
      >
        <Item
          src={bannerReservaMatricula}
          alt={"Reserva de matrícula banner"}
        />
      </span>
      <span
        style={{
          cursor: "pointer",
        }}
        onClick={() =>
          window.open(
            "https://forms.gennera.com.br/view#/formulario/2723299494235674115",
            "_blank"
          )
        }
      >
        <Item
          src={bannerMatriculaAberta}
          alt={"banner de matrículas abertas"}
        />
      </span>
      {/* <Item src={bannerParceiros} alt={"Hero banner"} /> */}
    </Carousel>
  );
};

export default CarouselList;
