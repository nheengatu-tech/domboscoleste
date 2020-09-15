import React from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'
import bannerHero from '../../images/banner_matriculas_Prancheta-1.png'
// import bannerParceiros from '../../images/banner-parceiros.jpeg'

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Item = styled.img`
  width: 1350px;
  height: 400px;
`

const CarouselList = () => {
  return (
    <Carousel autoplay>
      <Item src={bannerHero} alt={"Hero banner"} />
      {/* <Item src={bannerParceiros} alt={"Hero banner"} /> */}
    </Carousel>
  )
}

export default CarouselList
