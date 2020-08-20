import React from 'react'
import bannerSection from '../../images/section-bg.png'

const BannerSection = () => {
  return(
    <div style={{
      backgroundImage: `url(${bannerSection})`,
      width: "100%",
      display: "flex",
      margin: "32px auto"
    }}>
      <div style={{ display: "flex", margin: "auto" }}>
        <div
          style={{
            width: "128px",
            height: "128px",
            border: "2px solid #555555",
            borderRadius: "100%",
            display: "flex",
            marginRight: "8px",
            flexDirection: "column"
          }}
          >
          <span style={{
            display: "flex",
            margin: 'auto auto 0',
            color: "#555",
            fontSize: "32px",
            fontWeight: "bolder"
          }}>
            80
          </span>
          <span style={{
            display: "flex",
            margin: '0 auto auto',
            color: "#555",
            fontSize: "16px",
            textTransform: "capitalize"
          }}>
              funcionários
          </span>
        </div>
        <div
          style={{
            width: "128px",
            height: "128px",
            border: "2px solid #555555",
            borderRadius: "100%",
            display: "flex",
            marginRight: "8px",
            flexDirection: "column",
            backgroundColor: "#555555"
          }}
          >
          <span style={{
            display: "flex",
            margin: 'auto auto 0',
            color: "white",
            fontSize: "32px",
            fontWeight: "bolder"
          }}>
            +500
          </span>
          <span style={{
            display: "flex",
            margin: '0 auto auto',
            color: "white",
            fontSize: "16px",
            textTransform: "capitalize"
          }}>
              alunos
          </span>
        </div>
        <div
          style={{
            width: "128px",
            height: "128px",
            border: "2px solid #555555",
            borderRadius: "100%",
            display: "flex",
            marginRight: "8px",
            flexDirection: "column"
          }}
          >
          <span style={{
            display: "flex",
            margin: 'auto auto 0',
            color: "#555",
            fontSize: "32px",
            fontWeight: "bolder"
          }}>
            37
          </span>
          <span style={{
            display: "flex",
            margin: '0 auto auto',
            color: "#555",
            fontSize: "16px",
            textTransform: "capitalize"
          }}>
              professores
          </span>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto auto auto 16px",
          textAlign: "justify"
        }}>
          <h2 style={{ color: "#555", fontWeight: "bolder" }}>
            Escola Salesiana Dom Bosco Leste
          </h2>
          <p style={{ fontSize: "19px" }}>
            Seja bem-vindo à maior rede de escolas católicas das Américas!
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerSection