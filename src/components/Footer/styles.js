import styled from 'styled-components'
import { mobile, xlaptop } from '../../_breakpoints'

const Container = styled.div`
  background-image: linear-gradient( to right,rgb(12,51,159) 0%,rgb(0,101,185) 100%);
  color: white;
  display: flex;
  // margin: ;
  padding-top: 16px;
  bottom: 0;
  width: 100%;

  margin: 0 auto auto auto;
`

const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;

  @media (min-width: ${mobile}) {
    flex-direction: row;
  }
`

const ComponentItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin-right: 64px;
  margin-bottom: 20px;

  @media (min-width: ${mobile}) {
    margin-bottom: auto;
  }
`

const Item = styled.a`
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  color: white;
  transition: all 0.2s linear;
  margin-left: 4px;

  &:hover {
    font-weight: bolder;
    color: white
  }
`

const PlaylistItem = styled.p`
  font-size: 25px;
  color: white;
  // color: #1c3f95;
  text-align: center;
  font-family: 'Playball', cursive;
`

const YellonContainer = styled.div`
  font: 13px Titillium Web, sans-serif;
  color: white;
  text-align: center;
  background-image: linear-gradient( to right,rgb(12,51,159) 0%,rgb(0,101,185) 100%);
  display: flex;
  margin: auto;
  justify-content: center;

  @media (min-width: ${xlaptop}) {
    width: 100%;
  }
`

export {
  ComponentItem, 
  Component,
  Container,
  Item,
  PlaylistItem,
  YellonContainer
}