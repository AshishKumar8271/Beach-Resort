import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { UseCustomHook } from '../Context';

const FilterForm = () => {
  const { closeModal, isOpen, price, guests, size, type, minSize, maxSize, filterList ,handleInput
  ,priceChange
  
  } = UseCustomHook();

  return (
    <section className={`${isOpen ? "Filter-Overlay" : "hide"}`}>
      <form className='form-main' onSubmit={(e) => e.preventDefault()}>
        <button className="close-filter" onClick={() => closeModal()}>
          <AiOutlineClose />
        </button>
        <div className="form-group" >
          <label htmlFor="type">Room Type</label>
          <select name="type" id="type" className='form-control' onChange={(e) => handleInput(e, type)}>
            <option value="all">All</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="family">Family</option>
            <option value="presidential">Presidential</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <select name="guests" id="guests" className='form-control' value={guests} onChange={(e) => handleInput(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="price">Room Price</label>
          <input type="range" min={"0"} max={"600"} id='price' name='price' className='form-control' value={price} onChange={(e)=>{handleInput(e)}}/>
          <p>${price}</p>
        </div>


        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size">
            <input type="number" id='size' name='minSize' className='size-input form-control' value={minSize} onChange={(e) => handleInput(e, minSize)} /><input type="number" id='size' name='maxSize' className='size-input form-control' value={maxSize} onChange={(e) => handleInput(e, maxSize)} />
          </div>
          <p><span>min</span> <span>max</span></p>
        </div>

        <div className="filter-list">
          <button className="filterBtn" onClick={() =>{
            closeModal();
            filterList();
          }
          
          }>
            Filter
          </button>
        </div>
      </form>
    </section>
  )
}

export default FilterForm;
