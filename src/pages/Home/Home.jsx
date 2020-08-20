import React from 'react';
import { CarouselList } from '../../components/Carousel';
import { HotNews } from '../../components/News';
import { BannerSection } from '../../components/Banner'
import { Partners } from '../../components/Partners'
import { InstagramFeed } from '../../components/InstagramFeed'

const Home = (props) => {
  return (
    <div>
      <CarouselList />
      <HotNews />
      <Partners />
      <BannerSection />
      <InstagramFeed />
    </div>
  )
}

export default Home;
