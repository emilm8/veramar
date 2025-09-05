import React from 'react'
import Slider from '../Main/Slider'

function Contact() {
  return (
    <>
      <Slider />

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-[#748370] fraunces">
  
   <div>
    <h2 className="text-3xl font-cormorant mb-8">Contact us</h2>

    <div className="flex items-center mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h1.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.272 1.06l-1.9 1.9a16.016 16.016 0 006.586 6.586l1.9-1.9a1 1 0 011.06-.272l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>5623.9313</span>
    </div>

    <div className="flex items-start mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 mt-1" fillRule="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-12a4 4 0 110 8 4 4 0 010-8z" clipRule="evenodd" />
      </svg>
      <p>
        El Milagro Village, 3rd Street, Lot 78, Sipacate, 
        El Paredón Buena Vista 00000
      </p>
    </div>

    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" fillRule="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h.01M12 12h.01M8 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
      </svg>
      <span>corporacionveramar@gmail.com</span>
    </div>
  </div>

   <form className="space-y-6">
    <div>
      <label className="block font-semibold">Full Name</label>
      <input type="text" placeholder="Name" className="w-full border-b border-gray-400 focus:outline-none p-1"/>
    </div>

    <div>
      <label className="block font-semibold">Phone number</label>
      <input type="text" placeholder="Number" className="w-full border-b border-gray-400 focus:outline-none p-1"/>
    </div>

    <div>
      <label className="block font-semibold">Email</label>
      <input type="email" placeholder="Email" className="w-full border-b border-gray-400 focus:outline-none p-1"/>
    </div>

    <div>
      <label className="block font-semibold">Leave us a message</label>
      <textarea placeholder="Message" className="w-full border-b border-gray-400 focus:outline-none p-1"></textarea>
    </div>

    <button type="submit" className="bg-[#d2c4aa] px-6 py-2 rounded hover:bg-[#c5b897] transition font-semibold text-black">
      Send
    </button>
  </form>
    </div>

 
    <div className="w-full max-w-[1200px] mx-auto mb-10">
  <div className="relative w-full pb-[55%] h-0">
    <iframe
      title="location-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.725961905108!2d49.85190761559739!3d40.37719497936914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9c0c1b1d07%3A0x9b5b0b12dfc6fcd0!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1692345678901!5m2!1sen!2s"
      className="absolute top-0 left-0 w-full h-full border-0"
      
      
    ></iframe>
  </div>
</div>



    </>
  )
}

export default Contact