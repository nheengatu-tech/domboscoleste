import styled from 'styled-components'
import { tablet } from '../../_breakpoints'

const PartnerImg = styled.img`
  // filter: grayscale(0.5);
  width: 150px;
  max-width: 150px;
  height: fit-content;
  max-height: 150px;
  margin: 8px;

  &:hover {
    filter: none;
  }
`

const MaterialImg = styled.img`
  margin: 8px;
`

const MaterialContainer = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-basis: 25%;

  &:hover {
    cursor: pointer;
  }
`

const PartnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${tablet}) {
    display: flex;
    margin: 16px;
    width: 67%;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Grid = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  margin: 16px auto 32px auto;
  padding: 16px;
  
  @media (min-width: ${tablet}) {
    width: 80%;
    flex-direction: row;
  }
`

export {
  PartnersContainer,
  PartnerImg,
  Grid,
  MaterialContainer,
  MaterialImg
}