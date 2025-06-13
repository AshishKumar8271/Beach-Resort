import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../Features/RoomSlice";
import authReducer from "../Features/AuthSlice";

const store = configureStore({
    reducer: {
        rooms: roomReducer,
        auth: authReducer,
    }
});

export default store;