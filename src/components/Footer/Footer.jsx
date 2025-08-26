import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



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
          <p className="font-semibold border-b-[2px] border-[#d9d2bb] inline-block pb-1">Veramar</p>
          <p className=''>Store</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
  
       
      <p className="text-center text-sm mt-10">&copy; 2024 Veramar. All rights reserved.</p>
    </footer>
  </>
  
 
  )
}

export default Footer