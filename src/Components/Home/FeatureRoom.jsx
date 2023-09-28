import React from 'react';
import { UseCustomHook } from '../../Context';
import { Link } from 'react-router-dom';

const FeatureRoom = () => {
    const {featureRooms,sendSlug} = UseCustomHook();
  return (
    <section className='featureRoom'>
        <h1>Featured Rooms</h1>
        <div className="underline"></div>
        <div className="section-data">
            {
                featureRooms.map((ele)=>{
                    const {id,images,name,price,slug} = ele;
                    const imgSource = images[0];
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
                })
            }
        </div>
    </section>
  )
}

export default FeatureRoom;
