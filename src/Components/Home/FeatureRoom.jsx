import React from 'react';
import { useSelector } from "react-redux"
import RoomsContainer from '../RoomsContainer';

const FeatureRoom = () => {
    const featureRooms = useSelector((state) => state.rooms.featureRooms);
    return (
        <section className='featureRoom'>
            <h1>Featured Rooms</h1>
            <div className="underline"></div>
            <div className="section-data">
                {
                    featureRooms.map((ele) => {
                        const { id, images, name, price, slug } = ele;
                        const imgSource = images[0];
                        return (
                            <RoomsContainer key={id} imgSource={imgSource} slug={slug} name={name} price={price} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FeatureRoom;
