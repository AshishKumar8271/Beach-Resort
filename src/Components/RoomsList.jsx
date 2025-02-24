import React from 'react'
import { useSelector } from 'react-redux';
import RoomsContainer from './RoomsContainer';

const RoomsList = () => {
    const roomsList = useSelector((state) => state.rooms.roomsList);

    if(roomsList.length > 0){
        return (
              <div className="section-data">
                {
                  roomsList.map((room)=>{
                    const {id,images,name,price,slug} = room;
                    const imgSource = images[0];
                    return(
                      <RoomsContainer key={id} imgSource={imgSource} slug={slug} name={name} price={price} />
                  )
                  })
                }
              </div>
        )
    }
    return(
        <div className="error">
            No Result Found
        </div>
    )
}

export default RoomsList
