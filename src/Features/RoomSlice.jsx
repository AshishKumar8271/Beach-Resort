import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../data";

const itemsList = Items.map((item) => {
    const { sys, fields } = item;
    const id = sys.id;
    const images = fields.images.map((image) => {
        return image.fields.file.url;
    });

    return { ...fields, images, id };
});

const initialState = {
    roomsData: itemsList,
    roomsList: itemsList,
    sortedRooms: [],
    featureRooms: itemsList.filter((ele) => ele.featured === true),
    loading: false,
    isOpen: false,
    price: 600,
    minPrice: 0,
    maxPrice: 600,
    type: "all",
    guests: 1,
    minSize: 0,
    maxSize: 1000,
    singleRoom: null,
};

const RoomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        sendSlug: (state, action) => {
            state.singleRoom =
                state.roomsList.find((room) => room.slug === action.payload) || null;
        },
        roomSearch: (state, action) => {
            state.roomsList = state.roomsData.filter((room) =>
                room.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        fieldsData: (state, action) => {
            state[action.payload.name] = action.payload.value;
        },
        filterList: (state) => {
            const filteredRooms = state.roomsData.filter(
                (room) =>
                    (state.type === "all" || room.type === state.type) &&
                    room.capacity >= state.guests &&
                    room.price <= state.price &&
                    room.size > state.minSize &&
                    room.size <= state.maxSize
            );
            state.roomsList = filteredRooms;
        },
        resetFilterForm: (state) => {
            Object.assign(state, { 
                ...initialState, 
            });
        },
    },
});

export const {
    sendSlug,
    roomSearch,
    openModal,
    closeModal,
    fieldsData,
    filterList,
    resetFilterForm,
} = RoomSlice.actions;
export default RoomSlice.reducer;
