export const reducer  = (state,action)=>{

    if(action.type==="sendSlug"){
        const tempRooms = state.rooms;
        const room=tempRooms.find((ele)=>ele.slug===action.payload);
        return {...state,SingleRoom:room};
    }

    if(action.type==="SearchRoom"){
        return {...state,rooms:state.SearchedRooms.filter((room)=>room.name.match(action.payload.toLowerCase() || action.payload.toUpperCase()))}
    }

    if(action.type==="openModal"){
        return {...state,isOpen:true};
    }

    if(action.type==="closeModal"){
        return {...state,isOpen:false};
    }

    if(action.type==="handleInput"){
        return{
            ...state,[action.payload.name]:action.payload.value
        }
    }

    if(action.type==="filterList"){
        let rooms;
        if(state.type==="all"){
            rooms=state.SearchedRooms;
        }
        else{
            rooms=state.SearchedRooms.filter((room)=>room.type===state.type);
        }
        console.log(rooms);
        rooms= rooms.filter((room)=>room.capacity >= state.guests && room.price <= state.price && room.size > state.minSize && room.size <= state.maxSize);
        
        return{
            ...state,rooms
        }
    }

    return state;
}