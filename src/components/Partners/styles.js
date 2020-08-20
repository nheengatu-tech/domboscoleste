import styled from 'styled-components'

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

export { PartnerImg, MaterialContainer, MaterialImg }