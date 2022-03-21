import type { NextPage } from 'next'
import Header from '../Global/Header';
import HeroContent from './HeroContent';

const Hero: NextPage = () => {
  return (
    <div style={{
      backgroundColor: 'rgba(250, 250, 250, 1)',
      paddingBottom: 20,
    }}>
        <Header/>
        <HeroContent/>
    </div>
  )
}

export default Hero;
