export const reducer  = (state,action)=>{
    if(action.type==="sendSlug"){
        const tempRooms = state.rooms;
        const room=tempRooms.find((ele)=>ele.slug===action.payload);
        return {...state,SingleRoom:room};
    }
    return state;
}