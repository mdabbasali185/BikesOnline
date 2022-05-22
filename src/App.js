import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/firebase.init';
import RequireAuth from "./Auth/RequireAuth/RequireAuth"
import './App.css';
import LogIn from './Auth/LogIn/LogIn';
import SignUp from './Auth/SignUp/SignUP';

function App() {
  return (
    <div className="App">
      <header />
      <Routes>
        <Route path='/' element={<LogIn />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
