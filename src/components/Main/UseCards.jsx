import React, { useEffect, useState } from 'react'
import { FaBottleWater } from 'react-icons/fa6';

function UseCards() {

  return (

    <>
   {
    products.map( item =>(
     
      <div className="max-w-6xl mx-auto p-4">
   <div className=" gap-6">
     {products.map((item, index) => (
       <div key={index} className="p-4 border rounded shadow">
         <div>
           <img
             src={item.img[0] || "/img/Susana_.webp"}
             alt={item.name}
             className="w-full object-cover rounded mb-6"
           />
         </div>
 
         <div className="text-2xl font-mono text-[#5E6D50] font-light mb-2">
           {item.name}
         </div>
 
         <div className="flex items-center gap-2 text-gray-600 mb-4">
           <div className="text-sm font-medium">Recycle</div>
           <div>
             <FaBottleWater />
           </div>
           <div className="text-sm font-medium">{item.bottle || 10}</div>
         </div>
 
         <div className="mb-6 text-lg font-medium">
           <span className="line-through text-gray-400 mr-2">Q {item.price + 500}</span>
           <span className="text-[#5E6D50] underline">Q {item.price}</span>
         </div>
 
         <div>
           <button className="bg-[#D7CBB2] text-[#4B4B3F] font-semibold py-2 px-6 rounded shadow hover:bg-[#c6bca6] transition">
             Select options
           </button>
         </div>
       </div>
     ))}
   </div>
 </div>
 
     
    ))
   } 
    </>
 
   
  )
}

export default UseCards