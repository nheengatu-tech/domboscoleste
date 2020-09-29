import React, { useState } from "react";
import cdblLogo from "../../images/logo-cdbl.png";
import shadFooter from "../../images/shad_footer.png";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/pt-br";

const Background = () => {
  const [store] = useState("Colégio Dom Bosco Leste");
  const date = moment().format("L");
  const hour = moment().format("LTS");

  return (
    <>
      <img
        style={{
          width: "155px",
          height: "auto",
          position: "absolute",
          left: "56px",
          top: "40px",
        }}
        src={cdblLogo}
        alt={"cdbl logo"}
      />
      <div>
        {store !== null ? (
          <>
            <Store>{store}</Store>
            <Date>
              Data: <strong>{date}</strong>
            </Date>
            <Hour>
              Hora: <strong>{hour}</strong>
            </Hour>
          </>
        ) : null}
      </div>
      <LogoContainer>
        <img src={shadFooter} alt={"footer art"} />
      </LogoContainer>
    </>
  );
};

const Store = styled.span`
  /* CDBL */
  position: absolute;
  width: 230px;
  height: 19px;
  left: 500px;
  top: 40px;
  // font-family: "Titillium Web, sans-serif";
  // font-family: Roboto;
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  color: #000000;
`;

const Date = styled.span`
  /* Data: 01/09/2020 */
  position: absolute;
  width: 110px;
  height: 16px;
  left: 602px;
  top: 67px;

  // font-family: Roboto;
  // font-family: "Titillium Web, sans-serif";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const Hour = styled.span`
  /* Hora: 15:31 */
  position: absolute;
  width: 72px;
  height: 16px;
  left: 602px;
  top: 83px;

  // font-family: Roboto;
  // font-family: "Titillium Web, sans-serif";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: left;

  color: #000000;
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 194.83px;
  height: 27.24px;
  left: 0px;
  top: 875px;

  > img {
    width: 768px;
  }
`;

export default Background;
