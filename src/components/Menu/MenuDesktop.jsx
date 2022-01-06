import React, {useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { NavBar, NavItem } from "./styles";
import { useLocation } from 'react-router-dom'
import cdbLogo from "../../images/rede-salesiana.png";
import "./styles.css"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isActive, el]);

  return [isActive, setIsActive];
}

const DropdownMenu = ({children}) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);


  return (
    <div className="menu-container">
      <div onClick={onClick} className="menu-trigger">
        {children}
      </div>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><Link to="/ensino">Plano</Link></li>
          <li><Link to="/infantil">Educação Infantil</Link></li>
          <li><Link to="/noticias">Ensino Fundamental</Link></li>
          <li><Link to="/saved">Ensino Médio</Link></li> 
        </ul>
      </nav>
    </div>
  );
};

const MenuDesktop = (props) => {


  const { width } = useWindowDimensions();

  const location = useLocation();
  console.log("Route: "+location.pathname.split('/')[1]);
  const route = location.pathname.split('/')[1];

  function isSelected(path) {
    if (route === path) {
      return "selectedNavItem";
    }
    return "";
  }
  

  return (
    <div style={{ 
      display: "flex", 
      width: "100%",
      flexDirection: "column" ,
      marginBottom: "20px",
      zIndex: "9999",
      boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.2)",
      // backgroundImage:"linear-gradient( to right,rgb(12,51,159) 0%,rgb(0,101,185) 100%)"}
      background: "#fff",

    }}>
      {/* <div
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
      </div> */}
      <div style={{ display: "flex", marginTop:"8px",justifyContent: 'center', alignItems: "center"}}>
        <div style={{position:"absolute", left:"32px", top: "8px",  }}>
          <Link className="box-logo" to="/" style={{
            display: "flex", 
            flexDirection:"row", 
            alignItems: "center",
            border: "solid 1px #2f66df30",
            padding: "8px",
            }}>
            <img
              style={{ maxWidth: "64px"}}
              src={cdbLogo}
              alt={"Logotipo Colégio Dom Bosco Leste"}
            />
            { width>=1460? (

              <h1 style={{
                margin: "auto", 
                marginLeft: "16px", 
                fontSize: "1.6em", 
                color: "#003094",
                fontFamily: "Titillium Web, sans-serif"
                }}>
                Dom Bosco Leste
              </h1>
            ):null}
          </Link>
        </div>
        <NavBar>
          <div style={{ margin: "auto", display: "flex" }}>
            <NavItem className={isSelected("")}>
              <Link to="/">INICIO</Link>
            </NavItem>
            <NavItem className={isSelected("institucional")}>
              <Link to="/institucional">NOSSA ESCOLA</Link>
            </NavItem >
            <NavItem className={isSelected("noticias")}>
              <Link to="/noticias">NOTICIAS</Link>
            </NavItem>
            <DropdownMenu>
              <NavItem className={isSelected("ensino")}> 
                {/* <Link to="/ensino">ENSINO</Link> */}
                <div>ENSINO</div>
              </NavItem>
            </DropdownMenu>
            <NavItem className={isSelected("pastoral")}> 
              <Link to="/pastoral">PASTORAL</Link>
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
            <NavItem className={isSelected("fale-conosco")}>
              <Link to="/fale-conosco">FALE CONOSCO</Link>
            </NavItem>
          </div>
        </NavBar>
      </div>
    </div>
  );
};

export { MenuDesktop };
