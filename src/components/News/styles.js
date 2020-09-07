import styled from 'styled-components'
import { tablet } from '../../_breakpoints'

export const Component = styled.div`
  padding: 8px;

  @media (min-width: ${tablet}) {
    padding: 48px;
  }
`

export const ContainerGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 12px auto;
  
  @media (min-width: ${tablet}) {
    margin: 32px auto;
    flex-direction: row;
  }
`

export const TitleGrid = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: initial;
  
  @media (min-width: ${tablet}) {
    flex-direction: row;
    padding: 0 48px;
    width: 70%;
  }
`


export const Button = styled.button`
  background-image: linear-gradient( to right, rgb(12,51,159) 0%, rgb(0,101,185) 100%);
  width: fit-content;
  display: flex;
  border-radius: 12px;
  border: none;
  color: white;
  font-weight: bold;
  height: fit-content;
  margin: auto 0 auto 16px;
  padding: 4px 8px;
  text-transform: uppercase;

  > span {
    display: flex;
    margin: auto;
    font-size: 14px;
    font-family: 'Titillium Web', sans-serif;
    border: 0;
  }

  &:hover {
    cursor: pointer;
    border: solid 1px black;
  }
`

export const ImgNews = styled.div`
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */

  > img {
    transition: transform .5s ease;

    &:hover {
      transform: scale(1.5);
    }
  }
`