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
import { MenuHamburg, MenuMobileItem } from "./styles";
import cdbLogo from "../../images/logo-landing.png";

const MenuMobile = (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            backgroundColor: "rgb(0, 48, 148)",
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
                <BiNews />
                <span>Notícias</span>
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
      ) : (
        <div
          style={{
            height: "7vh",
            width: "100%",
            display: "flex",
            backgroundColor: "rgb(0, 48, 148)",
          }}
        >
          <MenuHamburg onClick={handleMenu}>
            <AiOutlineMenu />
          </MenuHamburg>
          <span>{/* {'Colégio Dom Bosco Leste'} */}</span>
        </div>
      )}
    </>
  );
};

export { MenuMobile };
