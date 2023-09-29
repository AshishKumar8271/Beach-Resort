import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({title,des,link,imgLink,SingleRoomClass,linkText}) => {
  return (
    <header className={`banner ${SingleRoomClass}`}>
      <img src={imgLink} alt="" />
        <div className="banner-data">
            <h1>{title}</h1>
            <div className="underline"></div>
            <p>{des}</p>
            <button className="roomsLink">
                <Link to={link}>{linkText}</Link>
            </button>
        </div>
    </header>
  )
}

export default Banner;
