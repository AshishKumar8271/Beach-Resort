import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import db from "../Firebase/firebase";

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    try {
        const querySnapShot = await getDocs(collection(db, 'rooms'));
        if (querySnapShot.empty) {
            throw new Error("No rooms found or collection doesn't exist!")
        }
        const res = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
})

const initialState = {
    roomsData: [],
    roomsList: [],
    sortedRooms: [],
    featureRooms: [],
    loading: false,
    error: "",
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
            state.price = 600;
            state.minPrice = 0;
            state.maxPrice = 600;
            state.type = "all";
            state.guests = 1;
            state.minSize = 0;
            state.maxSize = 1000;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchRooms.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.roomsData = action.payload;
            state.roomsList = action.payload;
            state.featureRooms = action.payload.filter((data) => data.featured === true);
            state.loading = false;
        })
        builder.addCase(fetchRooms.rejected, (state, action) => {
            console.log('Error while fetching: ', action.error.message);
            state.loading = false;
            state.error = action.error.message;
        })
    }
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
