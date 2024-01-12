
import './App.css'
import { Route, Routes,  } from "react-router-dom";
import HomePage from './page/HomePage';
import ShopPage from './page/ShopPage';
import BlogPage from './page/BlogPage';
import PagesPage from './page/PagesPage';
import ContactPage from './page/ContactPage';
import AddPage from './page/AddPage';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {

  return (
   <>
   <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/shop" element={<ShopPage/>} /> 
        <Route path="/blog" element={<BlogPage/>} /> 
        <Route path="/pages" element={<PagesPage/>} /> 
        <Route path="/contact" element={<ContactPage/>} /> 
        <Route path="/add" element={<AddPage/>} /> 
      </Routes>
      <Footer/>
   </>
  )
}

export default App
