import styled from 'styled-components'

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

  > a {
    color: white;

    &:hover {
      cursor: pointer;
      color: #ffc20e;
    }
  }

`

export { Container, NavItem }