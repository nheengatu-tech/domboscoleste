import React from 'react'
import { PartnerImg, MaterialContainer, MaterialImg } from './styles'
import edebe from '../../images/edebe.png'
import boletimSalesiano from '../../images/boletim-sa.png'
import isma from '../../images/isma.jpg'
import redeSalesiana from '../../images/rede-salesiana.png'
import shadCalendario from '../../images/shad-calendario.png'
import shadGaleria from '../../images/shad-galeria.png'
import shadIniciativa from '../../images/shad-iniciativa.png'
import shadProjetos from '../../images/shad-projetos.png'

const Partners = () => {
 return(
   <div style={{ backgroundColor: "#f8f8f8" }}>
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "16px auto 32px auto",
        padding: "16px"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <h3
          style={{
            color: "#555",
            fontFamily: 'Titillium Web, sans-serif',
            fontSize: '25px',
            textTransform: "uppercase",
            borderBottom: "solid 0.5px",
            width: "fit-content"
          }}
          >
          Parceria que <strong>Conquista</strong>
        </h3>
        <div style={{
          display: "flex",
          margin: "16px",
          width: '50%',
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
          <div
            style={{
              display: "flex",
              flexBasis: "25%",
            }}
          >
            <PartnerImg
            style={{ borderRadius: "25px" }}
            src={edebe} alt="partner edebe" />
          </div>
          <div
            style={{
              display: "flex",
              flexBasis: "25%",
            }}
          >
            <PartnerImg
            style={{ borderRadius: "25px" }}
            src={boletimSalesiano}
            alt="partner boletim salesiano" />
          </div>
          <div
            style={{
              display: "flex",
              flexBasis: "25%",
            }}
          >
            <PartnerImg
            style={{ borderRadius: "25px" }}
            src={isma} alt="partner isma" />
          </div>
          <div
            style={{
              display: "flex",
              flexBasis: "25%",
            }}
          >
            <PartnerImg src={redeSalesiana} alt="partner rsb" />
          </div>
        </div>
      </div>
      <div>
        <div style={{
          display: "flex",
          flexDirection: "column",
        }}>
          <h3
            style={{
              color: "#1c3f95",
              fontFamily: 'Titillium Web, sans-serif',
              fontSize: '25px',
              textTransform: "uppercase",
              borderBottom: "solid 0.5px",
              width: "fit-content"
            }}
            >
            Central de <strong>Conteúdo</strong>
          </h3>
          <div style={{
          display: "flex",
          width: '45%',
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
            <MaterialContainer
              onClick={() => window.open('https://www.flickr.com/photos/tags/flicker/', '_blank')}
            >
              <MaterialImg src={shadCalendario} />
              <span style={{
                color: "#666666",
                fontFamily: 'Titillium Web, sans-serif',
                fontSize: "18px",
                width: "max-content",
                display: "flex",
                margin: "auto"
              }}>
                Calendário Escolar
              </span>
            </MaterialContainer>
            <MaterialContainer
              onClick={() => window.open('https://www.flickr.com/photos/tags/flicker/', '_blank')}
            >
              <MaterialImg src={shadGaleria} />
              <span style={{
                color: "#666666",
                fontFamily: 'Titillium Web, sans-serif',
                fontSize: "18px",
                width: "max-content",
                display: "flex",
                margin: "auto"
              }}>
                Veja nossas fotos
              </span>
            </MaterialContainer>
            <MaterialContainer
              onClick={() => window.open('https://www.flickr.com/photos/tags/flicker/', '_blank')}
            >
              <MaterialImg src={shadProjetos} />
              <span style={{
                color: "#666666",
                fontFamily: 'Titillium Web, sans-serif',
                fontSize: "18px",
                width: "max-content",
                display: "flex",
                margin: "auto"
              }}>
                Curta nossa Página!
              </span>
            </MaterialContainer>
            <MaterialContainer
              onClick={() => window.open('https://www.flickr.com/photos/tags/flicker/', '_blank')}
            >
              <MaterialImg src={shadIniciativa} />
              <span style={{
                color: "#666666",
                fontFamily: 'Titillium Web, sans-serif',
                fontSize: "18px",
                width: "max-content",
                display: "flex",
                margin: "auto"
              }}>
                Sobre nós
              </span>
            </MaterialContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
 ) 
}

export default Partners