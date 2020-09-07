import styled from 'styled-components'
import { tablet } from '../../_breakpoints'

const Grid = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  
  @media (min-width: ${tablet}) {
    flex-direction: row;
  }
  `
  
const GridItem = styled.div`
  display: flex;
  margin: 4px auto;
  width: 128px;
  height: 128px;
  border: 2px solid #555555;
  border-radius: 100%;
  flex-direction: column;
`

export {
  Grid,
  GridItem
}