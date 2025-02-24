import React from 'react'
import { FaFilter } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { openModal, roomSearch } from '../Features/RoomSlice';

const FilterBox = () => {
  const dispatch = useDispatch();
  return (
    <div className='FilterBox' >
      <input type="text" placeholder='Search Rooms...' onChange={(e) => dispatch(roomSearch(e.currentTarget.value))} name='inputSearch' id='inputSearch' />
      <button className="filter" onClick={() => dispatch(openModal())}>
        <FaFilter /> <span>Filter</span>
      </button>
    </div>
  )
}

export default FilterBox
