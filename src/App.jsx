import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop';
import Main from './components/Main/Main';
import Blog from './components/Pages/Blog';
import ReadMore from './components/Pages/ReadMore';
import Contact from './components/Pages/Contact';
import Collection from './components/Pages/Collection';
import Details from './components/Pages/Details';
import TableMeasure from './components/Pages/TableMeasure';
import MyAccount from './components/Pages/MyAccount';
import ShoppingCart from './components/Pages/ShoppingCart';
import Checkout from './components/Pages/Checkout';
import { CartProvider } from './Contexts/CartContext';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/read" element={<ReadMore />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Veramar" element={<Main />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/details/:category/:id" element={<Details />} />
          <Route path="/measure" element={<TableMeasure />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/final" element={<Checkout />} />
        </Routes>

        <Footer />


       
<ToastContainer
  position="top-right"
  autoClose={3000}
  closeOnClick
  draggable
  pauseOnHover
  className="my-toast"
/>
      </CartProvider>
    </Router>
  );
  
}

export default App;
