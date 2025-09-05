import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import MyAccount from '../Pages/MyAccount';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-2 px-2 sm:px-4">
      
        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex flex-col items-center gap-2  shrink-0">
            <Link to="/main">
              <img 
                src="/img/logo.webp" 
                alt="Logo" 
                className="w-12 h-12 sm:w-25 sm:h-25 object-contain mb-5 rounded-full"
              />
            </Link>

            <Link to="/collection">
              <span className="bg-[#D7CBB2] px-5 sm:px-5 py-3 sm:py-3 rounded-md cursor-pointer hover:bg-amber-600 transition-colors text-xs sm:text-sm font-medium">
                Store
              </span>
            </Link>
          </div>

          
          <img 
            src="/img/Logo2.png" 
            alt="Logo2" 
            className="w-30 h-34 sm:w-65 sm:h-50 md:w-70 object-contain"
          />

           
          <div className="flex items-center gap-3 sm:gap-6">
             
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden text-2xl sm:text-3xl"
            >
              {menuOpen ? <AiOutlineClose /> : <IoMenu />}
            </button>

            
            <div className="hidden lg:flex items-center gap-6">
            <Link to="/account">
              <FaRegUser className="text-xl sm:text-2xl cursor-pointer hover:text-amber-600" /> 
            </Link>     

            <Link to="/cart">
               <div className="relative">
                <SlHandbag className="text-xl sm:text-2xl cursor-pointer hover:text-amber-600" />
              </div>
            </Link>
            </div>
          </div>
        </div>

       
        <nav className="hidden lg:flex mb-10 gap-6 font-mono text-sm sm:text-base  ">
  <Link to="/veramar">
    <span className=" relative after:absolute after:left-0 after:top-5 after:h-[4px] after:w-0 after:bg-[#D7CBB2] after:transition-all after:duration-300 hover:after:w-full">
      Veramar
    </span>
  </Link>

  <Link to="/blog">
    <span className=" relative after:absolute after:left-0 after:top-5  after:h-[4px] after:w-0 after:bg-[#D7CBB2] after:transition-all after:duration-300 hover:after:w-full">
      Blog
    </span>
  </Link>

  <Link to="/contact">
    <span className="relative after:absolute after:left-0 after:top-5  after:h-[4px] after:w-0 after:bg-[#D7CBB2] after:transition-all after:duration-300 hover:after:w-full">
      Contact
    </span>
  </Link>
</nav>  
        {menuOpen && (
          <div className="lg:hidden mt-3 flex flex-col items-center gap-3 sm:gap-4 bg-gray-50 p-3 rounded-lg shadow-md w-full text-sm sm:text-base ">
             
            <Link to="/veramar" onClick={() => setMenuOpen(false)}>Veramar</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>

            

            <div className="flex gap-4 pt-2">
            <Link to="/account">
              <FaRegUser className="text-xl sm:text-2xl cursor-pointer hover:text-amber-600" /> 
            </Link>
           

            <Link to="/cart">
               <div className="relative">
                <SlHandbag className="text-xl sm:text-2xl cursor-pointer hover:text-amber-600" />
              </div>
            </Link>
           </div>
          </div>
        )}
      </div>

      
    </header>
  )
}

export default Header
