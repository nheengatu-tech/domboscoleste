import React from "react";
import { Link } from "react-router-dom";
import { Container, NavItem } from "./styles";
import cdbLogo from "../../images/rede-salesiana.png";

const MenuDesktop = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          fontSize: "24px",
          marginBottom: "-50px",
          marginLeft: "128px",
          marginTop: "16px",
          fontFamily: "Titillium Web, sans-serif",
          color: "#003094",
        }}
      >
        <div>COLÉGIO DOM BOSCO LESTE</div>
        <div>MANAUS - AM</div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "16px" }}>
          <img
            style={{ maxWidth: "150px" }}
            src={cdbLogo}
            alt={"Logotipo Colégio Dom Bosco Leste"}
          />
        </div>
        <Container>
          <div style={{ margin: "auto", display: "flex" }}>
            <NavItem>
              <Link to="/">INICIO</Link>
            </NavItem>
            <NavItem>
              <Link to="/institucional">NOSSA ESCOLA</Link>
            </NavItem>
            <NavItem>
              <Link to="/noticias">NOTICIAS</Link>
            </NavItem>
            <NavItem>
              <Link to="/ensino">ENSINO</Link>
            </NavItem>
            <NavItem>
              <span
                onClick={() =>
                  window.open(
                    "https://www.flickr.com/photos/190154461@N08/albums",
                    "_blank"
                  )
                }
              >
                GALERIA
              </span>
              {/* <Link to="/">Galeria</Link> */}
            </NavItem>
            <NavItem>
              <Link to="/fale-conosco">FALE CONOSCO</Link>
            </NavItem>
          </div>
        </Container>
      </div>
    </div>
  );
};

export { MenuDesktop };
