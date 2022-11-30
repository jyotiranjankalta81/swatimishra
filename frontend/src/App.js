import './App.css';
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import MainRouter from './Router/MainRouter';
import Navbar from './components/Navbaar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthNotification, selectAuthErrorStatus, selectAuthMessage } from './Redux/features/authenticationSlice';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation()
  const [isAdmin, setAdmin] = useState(false);
  const authErrorStatus = useSelector(selectAuthErrorStatus);
  const authMessage = useSelector(selectAuthMessage)
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.pathname.split('/').includes('admin-panel')) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [location])

  useEffect(() => {
    if (authMessage) {
      if (authErrorStatus) {
        toast.error(authMessage)
      } else {
        toast.success(authMessage)
      }
      dispatch(resetAuthNotification());
    }
  }, [authErrorStatus, authMessage])

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {
        !isAdmin &&
        <Navbar />
      }
      <MainRouter />
      {/* <AdminRouter /> */}
    </div>
  );
}

export default App;
