import React from 'react';
import { Link } from 'react-router-dom';
import { UseCustomHook } from '../Context';

const RoomsContainer = ({id,imgSource,slug,name,price,}) => 
{
    const {sendSlug} = UseCustomHook();
            return(
                <div className="service featureService" key={id}>
                    <div className="imageandLink">
                    <img src={imgSource} alt="" />
                    <Link to={`/rooms/:${slug}`} className='feature-overlay' onClick={()=>sendSlug(slug)}>
                <h4>Features</h4>
                </Link>
                    </div>
                    <h4>{name}</h4>
                    <div className="feature-price">
                    <h4>${price}</h4>
                    <p>for night</p>
                    </div>
                </div>
            )
}

export default RoomsContainer
