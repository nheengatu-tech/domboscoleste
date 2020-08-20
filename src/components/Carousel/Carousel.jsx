import React from 'react'
import { Carousel } from 'antd'
import bannerHero from '../../images/banner_matriculas_Prancheta-1.png'

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const CarouselList = () => {
  return (
    <Carousel autoplay>
      <img src={bannerHero} alt={"Hero banner"} />
      <img src={bannerHero} alt={"Hero banner"} />
      <img src={bannerHero} alt={"Hero banner"} />
    </Carousel>
  )
}

export default CarouselList
