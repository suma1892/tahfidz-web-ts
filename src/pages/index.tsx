import type { NextPage } from 'next'
import {Meta, Hero, Galery, Review, Courses, Footer, Profile} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <Hero/>
      <Profile/>
      <Galery/>
      <Review/>
      <Courses/>
      <Footer/>
    </>
  )
}

export default Home
