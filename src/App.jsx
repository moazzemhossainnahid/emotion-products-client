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

function App() {

  return (
    <>
      <div className="">
        <Header />
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lights' element={<Lights />} />
            <Route path='/massagechair' element={<MassageChair />} />
            <Route path='/sofa' element={<Sofa />} />
            <Route path='/spage' element={<SinglePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
