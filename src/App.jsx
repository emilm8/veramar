import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Blog from './components/Pages/Blog'
import ReadMore from './components/Pages/ReadMore'
import Contact from './components/Pages/Contact'
import Collection from './components/Pages/Collection'
import Details from './components/Pages/Details'
import ScrollToTop from './components/ScrollToTop'
import TableMeasure from './components/Pages/TableMeasure'
import MyAccount from './components/Pages/MyAccount'

function App() {
  return (
    <Router>
      <Header />

    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/read" element={<ReadMore/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Veramar" element={<Main/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/measure" element={<TableMeasure />} />
        <Route path="/account" element={<MyAccount />} />

 
      </Routes>
      

      <Footer />
    </Router>
  )
}

export default App
