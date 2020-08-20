import React from 'react'
import { Link } from "react-router-dom";
import {
  Container,
  NavItem
} from './styles'
import cdbLogo from '../../images/logo-cdbl.png'

const Menu = (props) => {
  return(
    <div style={{
      display: "flex",
      margin: "auto",
      justifyContent: "center"
    }}>
      <img
        style={{ maxWidth: "150px" }}
        src={cdbLogo}
        alt={"Logotipo Colégio Dom Bosco Leste"}
      />
      <Container>
        <div style={{ margin: "auto", display: "flex" }}>
          <NavItem>
            <Link to="/">INICIO</Link>
          </NavItem>
          <NavItem>
            <Link to="/institucional">NOSSA ESCOLA</Link>
          </NavItem>
          <NavItem>
            NOTICIAS
          </NavItem>
          <NavItem>
            <Link to="/ensino">ENSINO</Link>
          </NavItem>
          {/* <NavItem>
            PROJETOS
          </NavItem>
          <NavItem>
            DOWNLOADS
          </NavItem> */}
          <NavItem>
            <Link to="/fale-conosco">FALE CONOSCO</Link>
          </NavItem>
        </div>
      </Container>
    </div>
  )
}

export { Menu }