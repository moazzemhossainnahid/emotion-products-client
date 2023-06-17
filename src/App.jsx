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
import { useState } from 'react';
import Checkout from './Pages/Checkout/Checkout';
import CardPayment from './Pages/Checkout/CardPayment';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Signin from './Pages/Signin/Signin';

function App() {

  return (
    <>
      <div className="w-full max-w-full mx-auto">
        <Header />
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carport' element={<Carport />} />
            <Route path='/lights' element={<Lights />} />
            <Route path='/massagechair' element={<MassageChair />} />
            <Route path='/sofa' element={<Sofa />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CardPayment />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        {window.location.pathname !== '/cart' && <Footer />}
      </div>
    </>
  )
}

export default App
