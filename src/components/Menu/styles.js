import styled from 'styled-components'
import { tablet } from '../../_breakpoints'

const DesktopViewport = styled.div`
  display: none;
  
  > div {
    display: flex;
    margin: auto;
  }

  @media (min-width: ${tablet}) {
    display: flex;
  }
`

const MobileViewport = styled.div`
  display: flex;
  @media (min-width: ${tablet}) {
    display: none;
  }
`

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

    color: white;
    font-size: large;
    vertical-align: text-bottom;
    // margin-left: 8px;
  }
`

const Container = styled.div`
  // background-color: #1c3f95;
  background-image: linear-gradient( to right, rgb(12,51,159) 0%, rgb(0,101,185) 100%);
  width: fit-content;
  display: flex;
  // height: 64px;
  border-radius: 32px;
  margin: auto 0;
`

const NavItem = styled.div`
  margin: 16px;
  color: white;
  font-size: 12px;

  > span {
    &:hover {
      cursor: pointer;
      color: #ffc20e;
    }
  }
  
  > a {
    color: white;
    
    &:hover {
      cursor: pointer;
      color: #ffc20e;
    }
  }

`

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
`

export { MenuMobileItem, MenuHamburg, Container, NavItem, DesktopViewport, MobileViewport }