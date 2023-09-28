import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({title,des,link,imgLink,SingleRoomClass}) => {
  return (
    <header className={`banner ${SingleRoomClass}`}>
      <img src={imgLink} alt=""/>
        <div className="banner-data">
            <h1>{title}</h1>
            <div className="underline"></div>
            <p>{des}</p>
            <button className="roomsLink">
                <Link to={link}>Our Rooms</Link>
            </button>
        </div>
    </header>
  )
}

export default Banner;
