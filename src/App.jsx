import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Lights from './Pages/Lights/Lights';
import MassageChair from './Pages/MassageChair/MassageChair';
import Sofa from './Pages/Sofa/Sofa';
import NotFound from './Pages/NotFound/NotFound';
import SinglePage from './Pages/SinglePage/SinglePage';
import Carport from './Pages/CarPort/CarPort';
import Cart from './Pages/Cart/Cart';
import { useEffect, useState } from 'react';
import Checkout from './Pages/Checkout/Checkout';
import CardPayment from './Pages/Checkout/CardPayment/CardPayment';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/Others/RequireAuth/RequireAuth';
import Signin from './Pages/Auth/Signin/Signin';
import Signup from './Pages/Auth/Signup/Signup';
import CheckoutSuccess from './Components/Others/CheckoutSuccess/CheckoutSuccess';
import RequireAdmin from './Components/Others/RequireAdmin/RequireAdmin';
import CPanel from './Components/Dashboard/AdminDashboard/Admin/CPanel';
import AdDashboard from './Components/Dashboard/AdminDashboard/Dashboard/AdDashboard';
import ManageUsers from './Components/Dashboard/AdminDashboard/ManageUsers/ManageUsers';
import Profile from './Components/Dashboard/UserDashboard/Profile/Profile';
import ManageProducts from './Components/Dashboard/AdminDashboard/ManageProducts/ManageProducts';
import ManageOrders from './Components/Dashboard/AdminDashboard/ManageOrders/ManageOrders';
import ManageAppointments from './Components/Dashboard/AdminDashboard/ManageAppointments/ManageAppointments';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: 'us'
  },
  {
    code: 'nl',
    name: 'Dutch',
    flag: 'nl'
  }

]

function App() {

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full max-w-full mx-auto">
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mproducts' && window.location.pathname !== '/cpanel/morders' && window.location.pathname !== '/cpanel/mappointments') && <Header languages={languages} currentLanguageCode={currentLanguageCode} />}
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carport' element={<Carport />} />
            <Route path='/lights' element={<Lights />} />
            <Route path='/massagechair' element={<MassageChair />} />
            <Route path='/furniture' element={<Sofa />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
            <Route path="/checkout-success" element={<RequireAuth><CheckoutSuccess /></RequireAuth>} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              <Route path="mproducts" element={<ManageProducts />} />
              <Route path="morders" element={<ManageOrders />} />
              <Route path="mappointments" element={<ManageAppointments />} />
            </Route>
          </Routes>
        </div>
        {(window.location.pathname !== '/cart' && window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mproducts' && window.location.pathname !== '/cpanel/morders' && window.location.pathname !== '/cpanel/mappointments') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
