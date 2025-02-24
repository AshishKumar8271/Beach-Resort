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
    SearchedRooms:ItemsList,
    sortedRooms:[],
    featureRooms:ItemsList.filter((ele)=>ele.featured===true),
    loading:false,
    isOpen:false,
    price:400,
    minPrice:0,
    maxPrice:600,
    type:"all",
    guests:1,
    minSize:0,
    maxSize:900,
}

export const AppProvider = ({children})=>{
    const [resort,dispatch] = useReducer(reducer,initialData);

    const sendSlug=(slug)=>{
       dispatch({type:"sendSlug",payload:slug});
    }


    const SearchRooms=(value)=>{
        dispatch({type:"SearchRoom",payload:value});
    }

    const openModal=()=>{
        dispatch({type:"openModal"});
    }

    const closeModal=()=>{
        dispatch({type:"closeModal"});
    }

    const filterList=()=>{
        dispatch({type:"filterList"});
    }

    const handleInput=(e,eValue)=>{
        console.log(e.target.name);
        const name=e.target.name;
        let value=e.target.value;
        console.log(e.target.value);
        if(name!=="type"){
            value=parseInt(value);
        }
        dispatch({type:"handleInput",payload:{name,value}})
    }
    
    return <AppContext.Provider value = {{...resort,sendSlug,SearchRooms,openModal,closeModal,filterList,handleInput
    }}>{children}</AppContext.Provider>
};

export const UseCustomHook = ()=>{
    return useContext(AppContext);
}
