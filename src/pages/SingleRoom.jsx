import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../Components/Home/Banner';


const SingleRoom = () => {
  const singleRoom = useSelector((state) => state.rooms.singleRoom);

  const { name, images, size, description, extras, price, capacity, pets, breakfast } = singleRoom;
  const viewImages = images.slice(1, images.length);
  return (
    <>
      <Banner SingleRoomClass="SingleRoom" title={name} imgLink={images[0]} link={`/rooms`} linkText="Back To Rooms" />
      <section className="singleRoom">
        <div className="RoomImages">
          {
            viewImages.map((image, index) => {
              return <img src={image} alt="" key={index} />
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
                capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`
              }
            </h6>
            <h6>{
              pets ? "pets allowed" : "pets not allowed"
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
