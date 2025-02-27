import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../Features/RoomSlice";

const store = configureStore({
    reducer: {
        rooms: roomReducer,
    }
});

export default store;