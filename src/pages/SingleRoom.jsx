import React from 'react';
import { UseCustomHook } from '../Context';
import Banner from '../Components/Home/Banner';
const SingleRoom = () => {
  const {SingleRoom} = UseCustomHook();
  console.log(SingleRoom);
  const {name,images,slug,size,description,extras,price,capacity,pets,breakfast} = SingleRoom;


  const viewImages= images.slice(1,images.length);
  console.log(viewImages);
  return (
    <>
    <Banner SingleRoomClass="SingleRoom" title={name} imgLink={images[0]} link={`/rooms`} linkText="Back To Rooms" />
    <section className="singleRoom">
    <div className="RoomImages">
        {
          viewImages.map((image,index)=>{
           return <img src={image} alt="" key={index}/>
          })
        }
 
    </div>
    <div className="roomDetails">
      <div className="details">
        <h2>Details</h2>
        <p>{description}</p>
      </div>
      <div className="info">
      <h2>Info</h2>
        <h6>Price : ${price}</h6>
        <h6>size : {size} SQFT</h6>
        <h6>max capacity: 
          {
            capacity > 1 ? ` ${capacity} people`: ` ${capacity} person`
          }
        </h6>
        <h6>{
              pets ? "pets allowed":"pets not allowed"
              }
        </h6>
        <h6>{
              breakfast && "Free BreakFast Included"
              }
        </h6>
      </div>
    </div>
    </section>
    </>
  )
}

export default SingleRoom
