import React from 'react'
import Banner from '../Components/Home/Banner';
import { UseCustomHook } from '../Context';
import RoomsContainer from '../Components/RoomsContainer';

const Rooms = () => {
  const {rooms} = UseCustomHook();
  return (
    <>
    <Banner SingleRoomClass="SingleRoom" title="Our Rooms" link="/" linkText="Return To Home" imgLink="https://react-beachresort-project.netlify.app/static/media/room-2.052c7681.jpeg" />

    <section className='featureRoom'>
        {/* <h1>Rooms</h1>
        <div className="underline"></div> */}
        <div className="section-data">
          {
            rooms.map((room)=>{
              const {id,images,name,price,slug} = room;
              const imgSource = images[0];
              return(
                <RoomsContainer id={id} imgSource={imgSource} slug={slug} name={name} price={price} />
            )
            })
          }
        </div>
        </section>
    
    </>
  )
}

export default Rooms
