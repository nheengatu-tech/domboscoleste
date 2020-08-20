import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 16px auto auto auto;
  height: 260px;
  bottom: 0;
  width: 80%;
  border-top-right-radius: 150px;
  border-top-left-radius: 150px;
  color: white;
  background-image: linear-gradient( to right,rgb(12,51,159) 0%,rgb(0,101,185) 100%)
`

const Item = styled.a`
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  color: white;
  transition: all 0.2s linear;

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

export { Container, Item, PlaylistItem }