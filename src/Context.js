import React,{useContext,createContext,useReducer} from "react";
import {Items} from "./data";
import {reducer} from "./actions/reducer";
const AppContext = createContext();

const ItemsList = Items.map((ele)=>{
    const {fields,sys} = ele;
    const id = sys.id;
    const images = fields.images.map((image)=>{
        return image.fields.file.url;
    });
    const state = {...ele.fields,images,id}; 
    return state;
})
const initialData = {
    rooms:ItemsList,
    SingleRoom:[],
    sortedRooms:[],
    featureRooms:ItemsList.filter((ele)=>ele.featured===true),
    loading:false,
}




export const AppProvider = ({children})=>{
    const [resort,dispatch] = useReducer(reducer,initialData);

    const sendSlug=(slug)=>{
       dispatch({type:"sendSlug",payload:slug});
    }

    return <AppContext.Provider value = {{...resort,sendSlug}}>{children}</AppContext.Provider>
};

export const UseCustomHook = ()=>{
    return useContext(AppContext);
}
