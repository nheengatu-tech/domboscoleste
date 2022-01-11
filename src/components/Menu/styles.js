import styled from "styled-components";
import { mheader } from "../../_breakpoints";

const DesktopViewport = styled.div`
  display: none;

  div {
    display: flex;
    margin: auto;
  }

  @media (min-width: ${mheader}) {
    display: flex;
  }
`;

const MobileViewport = styled.div`
  display: flex;

  @media (min-width: ${mheader}) {
    display: none;
  }
`;

const MenuMobileItem = styled.div`
  display: flex;
  margin-bottom: 16px;

  > svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  > span {
    color: white;
    font-size: large;
    vertical-align: text-bottom;
    // margin-left: 8px;
  }

  > a {
    > svg {
      width: 32px;
      height: 32px;
      color: white;
    }

    > span {
      color: white;
      font-size: large;
      vertical-align: text-bottom;
      // margin-left: 8px;
    }

    color: red;
    font-size: large;
    vertical-align: text-bottom;
    // margin-left: 8px;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & .selectedNavItem {
    background-image: linear-gradient(
      to right,
      rgb(12, 51, 159) 0%,
      rgb(0, 101, 185) 100%
    );
    transition: 0.2s;
    & * {
      color: #fff;
    }
  }
`;

const NavItem = styled.div`
  padding: 16px;
  color: black;
  font-size: 14px;
  border-radius: 8px 8px 0 0;
  transition: 0.2s;

  > span {
    &:hover {
      cursor: pointer;
      color: #ffc20e;
    }
  }
  > * {
    color: #313131;
    padding: 0 12px;
  }
  > a {
    &:hover {
      cursor: pointer;
      color: #ffc20e;
    }
  }
`;

const MenuHamburg = styled.span`
  float: left;
  display: flex;
  margin: auto auto auto 4px;
  cursor: pointer;
  transition: height 0.2s ease-out;

  > svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`;
export const ContainerMobile = styled.div`
  height: 50px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  background-color: #003094;
`;

export {
  MenuMobileItem,
  MenuHamburg,
  NavBar,
  NavItem,
  DesktopViewport,
  MobileViewport,
};
