import React from 'react'
import Banner from '../Components/Home/Banner';
import Services from '../Components/Home/Services';
import FeatureRoom from '../Components/Home/FeatureRoom';

const Home = () => {
  return (
    <>
    <Banner title="Luxurious Rooms" des="Delux Rooms starting at $299" link="/rooms/" imgLink="./images/defaultBcg.jpeg"/>
    <Services/>
    <FeatureRoom/>
    </>
  )
}

export default Home
