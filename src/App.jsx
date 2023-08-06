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
import './i18n';
import { Suspense } from 'react';

const languages = [
  {
    code: 'en',
    flag: '🇺🇸'
  },
  {
    code: 'nl',
    flag: '🇩🇪'
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
        {t('welcomeMessage')}
        {/* <div className='MLAppDDMenuDivCS'>
          <button className='MLAppDDMenuBNCS' type='button' onClick={toggleMLAppULShow} >
            <svg width={24} height={24} fill='#3ea6ff' viewBox='0 0 16 16'>
              <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z' />
            </svg>
          </button>
          <ul className={`MLAppULCS ${isMLAppULShow ? 'Show' : ''}`} >
            {languages.map(({ code, flag }) => (
              <li key={code} >
                <button onClick={() => { i18next.changeLanguage(code); toggleMLAppULShow(); }}
                  disabled={code === currentLanguageCode} > {flag}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
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
        <div className="" >
          {t('content')}
        </div>
      </div>
    </>
  )
}

export default App
