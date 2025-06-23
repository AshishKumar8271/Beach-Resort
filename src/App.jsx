import { useEffect } from 'react';
import Home from "./pages/Home";
import Rooms from './pages/Rooms';
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRooms } from './Features/RoomSlice';
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser, setCheckingAuth } from './Features/AuthSlice';
import { auth } from './Firebase/firebase';


const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser({
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          gender: firebaseUser.gender,
        }));
      }
      dispatch(setCheckingAuth(false));
    });
    return () => unsubscribe();
  }, [dispatch]);


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
