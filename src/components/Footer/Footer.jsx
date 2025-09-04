import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
    <footer className="bg-[#748370] text-white py-10 px-4 fraunces">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        
        <div>
          <p className="font-semibold mb-3">Follow us on our social networks!</p>
          <div className="flex justify-center md:justify-start items-center gap-4 text-2xl">
          <FaFacebookF />
          <FaInstagram />
          </div>
        </div>
  
       <div>
        <img src="/img/sc.png" alt="" />
       </div>
 
 
        <div className="text-white space-y-2">
        <Link to="/main">
          <p className="font-semibold border-b-[2px] border-[#d9d2bb] inline-block">Veramar</p>
        
        </Link>
          <Link to="/collection">
            <p className='mt-2'>Store</p>
          </Link>
          <Link to="/blog">
            <p>
            Blog
            </p>
          </Link>

          <Link to="/contact">
         <p>Contact</p>
          </Link>
        </div>
      </div>
  
       
      <p className="text-center text-sm mt-10">&copy; 2024 Veramar. All rights reserved.</p>
    </footer>
  </>
  
 
  )
}

export default Footer