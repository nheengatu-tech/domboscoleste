import React, { useEffect, useState, useCallback } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import bannerListaMaterial from "../../images/baner-lista-de-material.jpeg";
import bannerMatricula from "../../images/banner-matricula.jpeg";
import bannerResultado from "../../images/banner-resultado.jpg";
import bannerBlackWeek from "../../images/banner-blackweek.jpeg";
import bannerLojaEdebe from "../../images/loja-edebe.jpeg";
import { BASE_URL } from "../../utils";

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
  const [banners, setBanners] = useState(null);

  const fetchBanners = useCallback(() => {
    fetch(BASE_URL + "/banners", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBanners(data);
      })
      .catch(() => {
        console.log("erro ao carregar Carousel");
      });
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  return (
    <Carousel autoplay>
      {/* {banners &&
        banners.map((banner) => (
          <span
            key={banner._id}
            style={{
              cursor: "pointer",
              width: "100%",
              display: "flex !important",
              margin: "auto",
              justifyContent: "center !important",
            }}
            onClick={() => window.open("https://www.google.com", "_blank")}
            // onClick={() => window.open(banner.redirectUrl, "_blank")}
          >
            <Item src={banner.bannerImage} alt={banner.name} />
          </span>
        ))} */}
      <span
        style={{
          cursor: "pointer",
          width: "100%",
          display: "flex !important",
          margin: "auto",
          justifyContent: "center !important",
        }}
        onClick={() => window.open("https://loja.edebe.com.br/", "_blank")}
      >
        <Item src={bannerLojaEdebe} alt={"Loja Edebe"} />
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
            "https://web.whatsapp.com/send?phone=+5592992599150",
            "_blank"
          )
        }
      >
        <Item src={bannerBlackWeek} alt={"Semana Black Week"} />
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
