import React from 'react';
import Home from "./pages/Home";
import Rooms from './pages/Rooms';
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { UseCustomHook } from './Context';
import {Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';

const App = () => {
  return (
    <>
  <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/rooms' element = {<Rooms/>}/>
    <Route path={`/rooms/:slug`} element={<SingleRoom/>} />
    <Route path="/error" element={<Error/>} />
    <Route path = "*"element = {<Error/>}/>
    </Routes>
    </>
  )
}

export default App
