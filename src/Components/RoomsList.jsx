import React from 'react'
import { useSelector } from 'react-redux';
import RoomsContainer from './RoomsContainer';
import loader from "../assets/gif/loading-arrow.gif"

const RoomsList = () => {
  const { roomsList, loading, error } = useSelector((state) => state.rooms);

  return (
    <div>
      {loading && <img src={loader} className='inline w-20 mt-16' alt="data-loader" />}
      {!loading && (error || roomsList.length === 0) && <p className='text-xl mt-20'>{error || 'No Rooms Found'}</p>}
      {
        !loading && !error &&
        <div className="section-data">
          {
            roomsList.map((room) => {
              const { id, images, name, price, slug } = room;
              const imgSource = images[0];
              return (
                <RoomsContainer key={id} imgSource={imgSource} slug={slug} name={name} price={price} />
              )
            })
          }
        </div>
      }
    </div>
  )


}

export default RoomsList
