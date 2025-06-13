import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendSlug } from '../Features/RoomSlice';

const RoomsContainer = ({ imgSource, slug, name, price, }) => {
    const dispatch = useDispatch();
    return (
        <div className="service featureService">
            <div className="imageandLink">
                <img src={imgSource} alt="" />
                <Link to={`/rooms/${slug}`} className='feature-overlay' onClick={() => dispatch(sendSlug(slug))}>
                    <h4>Features</h4>
                </Link>
            </div>
            <h4 className='font-bold'>{name}</h4>
            <div className="feature-price">
                <h4>${price}</h4>
                <p>for night</p>
            </div>
        </div>
    )
}

export default RoomsContainer
