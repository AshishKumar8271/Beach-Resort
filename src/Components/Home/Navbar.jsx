import React,{useState} from 'react'
import logo from "./logo.svg";
import {BiMenuAltLeft} from "react-icons/bi";
import { Link } from 'react-router-dom';
import {linksData} from "./links";

const Navbar = () => {
  const [isOpen,setOpen] = useState(false);

  const setHeightZero=()=>{
    setOpen(false);
  }
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="toggleMenuBtn" onClick={()=>setOpen(!isOpen)}>
            <BiMenuAltLeft/>
          </button>
        </div>
        <ul className={`${isOpen ? "links showMenu" : "links" }`} >
          {
            linksData.map((ele)=>{
              const {id,url,name}  = ele;
             return <li key={id}>
              <Link to={url} onClick={()=>setHeightZero()}>{name}</Link>
          </li>
            })
          }
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
