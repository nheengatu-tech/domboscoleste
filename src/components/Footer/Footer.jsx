import React from 'react'
import {
  Container,
  Item,
  PlaylistItem,
  YellonContainer,
  Component,
  ComponentItem
} from './styles'
import logoFooter from '../../images/logo-landing.png'

const Footer = () => {
  return(
    <>
    <Container>
      <Component>
        <ComponentItem>
          <h4 style={{
            fontFamily: 'Titillium Web, sans-serif',
            color: 'white',
            fontWeight: "bolder",
            fontSize: "16px",
            textTransform: "uppercase"
          }}>
            Mapa do Site
          </h4>
          <Item href="/sobrenos">Sobre Nós</Item>
          <Item href="/sobrenos">Notícias</Item>
          <Item href="/sobrenos">Ensino</Item>
          <Item href="/sobrenos">Fale Conosco</Item>
        </ComponentItem>
        <ComponentItem>
          <h4 style={{
            fontFamily: 'Titillium Web, sans-serif',
            color: 'white',
            fontWeight: "bolder",
            fontSize: "16px",
            textTransform: "uppercase"
          }}>
            Endereço
          </h4>
          <p style={{ marginBottom: 0}}>
          Av. Cosme Ferreira, 5122
          </p>
          <p style={{ marginBottom: 0}}>
          Zumbi dos Palmares,
          </p>
          <p style={{ marginBottom: 0}}>
          Manaus - AM, 69083-000
          </p>
        </ComponentItem>
        <ComponentItem>
          <h4 style={{
            fontFamily: 'Titillium Web, sans-serif',
            color: 'white',
            fontWeight: "bolder",
            fontSize: "16px",
            textTransform: "uppercase"
          }}>
            Contato
          </h4>
          <p style={{ marginBottom: 0}}>
          (92) 2125-1353
          </p>
          <p style={{ marginBottom: 0}}>
          (92) 98188-0085 (WhatsApp)
          </p>
        </ComponentItem>
        <ComponentItem style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "justify",
          marginRight: "16px"
        }}>
          <h4 style={{
            fontFamily: 'Titillium Web, sans-serif',
            color: 'white',
            fontWeight: "bolder",
            fontSize: "16px",
            textTransform: "uppercase"
          }}>
            Acesse também
          </h4>
          <Item target="blank" href="https://www.edebe.com.br/">Editora Edebe</Item>
          <Item target="blank" href="https://www.rsb.org.br/">Rede Salesiana</Item>
          <Item target="blank" href="https://isma.org.br/">ISMA</Item>
          <Item target="blank" href="https://www.boletimsalesiano.org.br/">Boletim Salesiano</Item>
        </ComponentItem>
        <ComponentItem style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column"
        }}>
          <img src={logoFooter} alt={"logo salesianos"}  style={{
            display: "flex",
            width: "220px",
            maxWidth: "220px",
            height: "fit-content",
            margin: "auto"
          }}/>
          <PlaylistItem>
            Entusiamo diante da vida!
          </PlaylistItem>
        </ComponentItem>
      </Component>
    </Container>
    <YellonContainer>
      Desenvolvido com ❤︎ por 
      <Item
        href="https://yellonpublicidade.com.br"
        target="blank">
        Yellon Publicidade
      </Item>
    </YellonContainer>
  </>
  )
}

export { Footer }