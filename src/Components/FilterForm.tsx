import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  fieldsData,
  filterList,
  resetFilterForm,
} from "../Features/RoomSlice";

const FilterForm = () => {
  const { price, guests, isOpen, type, minSize, maxSize } = useSelector(
    (state) => state.rooms
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeModal());
    dispatch(filterList());
  };

  const handleSelect = (e) => {
    const { name, value, type } = e.target;
    dispatch(
      fieldsData({
        name,
        value:
          type === "number" || name === "price" ? parseInt(value) || 0 : value,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetFilterForm());
    dispatch(closeModal());
    dispatch(filterList());
  }

  return (
    <section className={`${isOpen ? "Filter-Overlay" : "hide"}`}>
      <form className="form-main" onSubmit={(e) => handleSubmit(e)}>
        <button
          type="button"
          className="close-filter"
          onClick={() => dispatch(closeModal())}
        >
          <AiOutlineClose />
        </button>
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={(e) => handleSelect(e)}
          >
            <option value="all">All</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="family">Family</option>
            <option value="presidential">Presidential</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <select
            name="guests"
            id="guests"
            className="form-control"
            value={guests}
            onChange={(e) => handleSelect(e)}
          >
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
          <input
            type="range"
            min={"0"}
            max={"600"}
            id="price"
            name="price"
            className="form-control"
            value={price}
            onChange={(e) => {
              handleSelect(e);
            }}
          />
          <p>${price}</p>
        </div>

        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size">
            <input
              type="number"
              id="minSize"
              name="minSize"
              className="size-input form-control"
              value={minSize || "0"}
              onChange={(e) => handleSelect(e)}
            />
            <input
              type="number"
              id="maxSize"
              name="maxSize"
              className="size-input form-control"
              value={maxSize || "900"}
              onChange={(e) => handleSelect(e)}
            />
          </div>
          <p>
            <span>min</span> <span>max</span>
          </p>
        </div>

        <div className="filter-list">
          <button type="submit" className="filterBtn">
            Filter
          </button>
          <button
            type="button"
            className="resetFilter"
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default FilterForm;
