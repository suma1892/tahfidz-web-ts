import type { NextPage } from 'next'
import {Meta, Hero, Client, Teacher, Review, Courses, Footer} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <Hero/>
      <Client/>
      <Teacher/>
      <Review/>
      <Courses/>
      <Footer/>
    </>
  )
}

export default Home
