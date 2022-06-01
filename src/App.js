
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LogIn from './Auth/LogIn/LogIn';
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import SignUp from './Auth/SignUp/SignUP';
import auth from './Firebase/firebase.init';
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Review from './Pages/Review/Review';
import Profile from './Pages/Profile/Profile';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import ManageUser from './Pages/ManageUser/ManageUser';
import MyItems from './Pages/MyItems/MyItems';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SingleItems from './Pages/SingleItems/SingleItems';
import Portfolio from './Pages/Portfolio/Portfolio';


function App() {


  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<RequireAuth><Products /></RequireAuth>}></Route>

        <Route path='/single_items/:id' element={<RequireAuth>
          <SingleItems />
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='manage_inventory' element={<RequireAuth><ManageInventory />
          </RequireAuth>}></Route>
          <Route path='review' element={<RequireAuth><Review />
          </RequireAuth>}></Route>
          <Route index element={<RequireAuth><Profile />
          </RequireAuth>}></Route>
          <Route path='manage-all-orders' element={<RequireAuth><ManageAllOrders />
          </RequireAuth>}></Route>
          <Route path='manageAllUser' element={<RequireAuth><ManageUser />
          </RequireAuth>}></Route>
          <Route path='my_items' element={<RequireAuth><MyItems /></RequireAuth>}></Route>
          <Route path='addItems' element={
            <RequireAuth><AddItems /></RequireAuth>
          }></Route>
        </Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
