import React from 'react';
import { CarouselList } from '../../components/Carousel';
import { HotNews } from '../../components/News';
import { BannerSection } from '../../components/Banner'
import { Partners } from '../../components/Partners'
import { InstagramFeed } from '../../components/InstagramFeed'
import Maps from '../../components/Maps';
const Home = (props) => {
  return (
    <div style={{flex:1, alignItems: 'center'}}>
      <CarouselList />
      <HotNews />
      <Partners />
      <BannerSection />
      {/* <InstagramFeed /> */}
      <Maps />
    </div>
  )
}

export default Home;
