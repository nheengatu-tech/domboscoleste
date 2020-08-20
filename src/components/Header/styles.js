import styled from 'styled-components'

const Container = styled.div`
  background: #F2F2F2;
  height: 38px;
  display: flex;
  justify-content: flex-end;
`

const Contact = styled.div`
  margin: auto 300px auto 20px;
  color: #6d6d6d;

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
  color: #6D6D6D;
  padding: 4px;
  margin-top: 8px;
`

const SocialMedia = styled.span`
  display: flex;
  margin: auto 2px;
  border: solid 2px #777;
  border-radius: 50%;
  padding: 4px;
  
  &:hover {
    cursor: pointer;
    color: rgb(12,51,159);
    border: solid 2px rgb(12,51,159);
  }
`

export { ContactPanel, Container, Contact, ContactsComponent, SocialMedia }