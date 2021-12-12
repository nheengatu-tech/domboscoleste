import React from 'react'
import bannerSection from '../../images/section-bg.png'
import { Grid, GridItem } from './styles'

const BannerSection = () => {
  return(
    <div style={{
      backgroundImage: `url(${bannerSection})`,
      width: "100%",
      display: "flex",
      margin: "32px auto"
    }}>
      <Grid>
        <GridItem>
          <span style={{
            display: "flex",
            margin: 'auto auto 0',
            color: "#555",
            fontSize: "32px",
            fontWeight: "bolder"
          }}>
            67
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
        </GridItem>
        <GridItem
          style={{
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
            +510
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
        </GridItem>
        <GridItem>
          <span style={{
            display: "flex",
            margin: 'auto auto 0',
            color: "#555",
            fontSize: "32px",
            fontWeight: "bolder"
          }}>
            30
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
        </GridItem>
        <div style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto 16px",
          textAlign: "center"
        }}>
          <h2 style={{ color: "#555", fontWeight: "bolder" }}>
            Colégio Salesiano Dom Bosco Leste
          </h2>
          <p style={{ fontSize: "19px" }}>
            Seja bem-vindo à maior rede de escolas católicas das Américas!
          </p>
        </div>
      </Grid>
    </div>
  )
}

export default BannerSection