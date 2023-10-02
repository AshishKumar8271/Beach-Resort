import React from 'react'
import { UseCustomHook } from '../Context';
import RoomsContainer from './RoomsContainer';

const RoomsList = () => {
    const {rooms} = UseCustomHook();

    if(rooms.length > 0){
        return (
              <div className="section-data">
                {
                  rooms.map((room)=>{
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
