import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { MdSchool } from "react-icons/md";
import {
  BiHome,
  BiChurch,
  BiNews,
  BiConversation,
  BiImages,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { ContainerMobile, MenuHamburg, MenuMobileItem } from "./styles";
import cdbLogo from "../../images/rede-salesiana.png";

const MenuMobile = (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <>
          <ContainerMobile>
            <MenuHamburg onClick={handleMenu}>
              <AiOutlineMenu />
            </MenuHamburg>
            <Link
              className="box-logo"
              to="/"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
                margin: "auto",              }}
            >
              <img
                style={{ maxWidth: "50px" }}
                src={cdbLogo}
                alt={"Logotipo Colégio Dom Bosco Leste"}
              />

              <h1
                style={{
                  margin: "auto",
                  marginLeft: "16px",
                  fontSize: "1.6em",
                  color: "rgb(0, 48, 148)",
                  fontFamily: "Titillium Web, sans-serif",
                }}
              >
                Dom Bosco Leste
              </h1>
            </Link>
          </ContainerMobile>
          <div
            style={{
              height: "100vh",
              width: "50%",
              position: "absolute",
              minWidth: "300px",
              display: "flex",
              backgroundColor: "rgb(177, 19, 32)",
            }}
          >
            <MenuHamburg
              style={{ margin: "4px", position: "absolute" }}
              onClick={handleMenu}
            >
              <CgClose />
            </MenuHamburg>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <img
                  style={{ width: "50%", marginTop: "50px" }}
                  src={cdbLogo}
                  alt={"logo"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "32px",
                  flexDirection: "column",
                  marginRight: "auto",
                }}
              >
                <MenuMobileItem>
                  <Link to="/">
                    <BiHome />
                    <span>Início</span>
                  </Link>
                </MenuMobileItem>
                <MenuMobileItem>
                  <Link to="/institucional">
                    <BiChurch />
                    <span>Nossa Escola</span>
                  </Link>
                </MenuMobileItem>
                <MenuMobileItem>
                  <Link to="/noticias">
                    <BiNews />
                    <span>Notícias</span>
                  </Link>
                </MenuMobileItem>
                <MenuMobileItem>
                  <Link to="/ensino">
                    <MdSchool />
                    <span>Ensino</span>
                  </Link>
                </MenuMobileItem>
                <MenuMobileItem>
                  <Link to="/fale-conosco">
                    <BiConversation />
                    <span>Fale Conosco</span>
                  </Link>
                </MenuMobileItem>
                <MenuMobileItem
                  onClick={() =>
                    window.open(
                      "https://www.flickr.com/photos/190154461@N08/albums",
                      "_blank"
                    )
                  }
                >
                  <BiImages />
                  <span>Galeria</span>
                </MenuMobileItem>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ContainerMobile>
          <MenuHamburg onClick={handleMenu}>
            <AiOutlineMenu />
          </MenuHamburg>
          <Link
            className="box-logo"
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              margin: "auto",            }}
          >
            <img
              style={{ maxWidth: "50px" }}
              src={cdbLogo}
              alt={"Logotipo Colégio Dom Bosco Leste"}
            />

            <h1
              style={{
                margin: "auto",
                marginLeft: "16px",
                fontSize: "1.6em",
                color: "rgb(0, 48, 148)",
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              Dom Bosco Leste
            </h1>
          </Link>
        </ContainerMobile>
      )}
    </>
  );
};

export { MenuMobile };
