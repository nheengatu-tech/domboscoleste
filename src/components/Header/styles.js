import styled from 'styled-components'
import { mobile } from '../../_breakpoints'

const Container = styled.div`
  @media (max-width: ${mobile}) {
    display: none;
  }
  /* background-image: linear-gradient( to right, rgb(12,51,159) 0%, rgb(0,101,185) 100%); */
  background-color: #FFF;
  height: 38px;
  display: flex;
  justify-content: flex-end;
`

const Contact = styled.div`
  margin: auto 300px auto 20px;
  color: #313131;

  &:hover {
    cursor: pointer;
  }
`

const ContactPanel = styled.div`
  width: 150px;
  height: 80px;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
`

const ContactsComponent = styled.div`
  color: #000;
  padding: 4px;
  margin-top: 8px;
`

const SocialMedia = styled.span`
  display: flex;
  margin: auto 2px;
  border: solid 2px #777;
  border-radius: 50%;
  padding: 4px;

  color: #000;
    border: solid 2px #00000030;
  
  &:hover {
    cursor: pointer;
    color: #000;
    border: solid 2px #000;
  }
`

export { ContactPanel, Container, Contact, ContactsComponent, SocialMedia }