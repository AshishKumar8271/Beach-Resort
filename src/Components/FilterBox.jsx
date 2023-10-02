import React from 'react'
import {FaFilter} from "react-icons/fa";
import { UseCustomHook } from '../Context';

const FilterBox = () => {
  const {SearchRooms,openModal} = UseCustomHook();
  return (
    <div className='FilterBox' >
      <input type="text" placeholder='Search Rooms...' onChange={(e)=>SearchRooms(e.currentTarget.value)} id='search'/>
      <button className="filter" onClick={()=>openModal()}>
        <FaFilter/> <span>Filter</span>
      </button>
    </div>
  )
}

export default FilterBox
