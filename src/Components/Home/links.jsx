import {FaBeer, FaCocktail, FaHiking, FaShuttleVan} from "react-icons/fa";
export const pages = [
    {
        id:1,
        url:"/",
        name:"Home",
    },
    {
        id:2,
        url:"/rooms",
        name:"Rooms",
    },
];

export const ServicesInfo=[
    {
        id:1,
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur distinctio labore excepturi quia mollitia.',
    },{
        id:2,
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur distinctio labore excepturi quia mollitia.',
    },{
        id:3,
        icon:<FaShuttleVan/>,
        title:"Free Shuttle",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur distinctio labore excepturi quia mollitia.',
    },{
        id:4,
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur distinctio labore excepturi quia mollitia.',
    },
]