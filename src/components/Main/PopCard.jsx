import React, { useEffect, useState } from 'react';
import { FaBottleWater } from 'react-icons/fa6';
import { getAllCategories } from '../../service';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function PopCard() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()
  

  useEffect(() => {
    getAllCategories().then(info => {
      console.log("Gələn data:", info);
      if (info?.[0]?.Tienda?.[0]?.products) {
        setProducts(info[0].Tienda[0].products);
      }
    });
  }, []);
  

  return (
    <>
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="p-4 rounded cursor-pointer"
            onClick={() => navigate(`/details/${item.id}`)}
          >
            <div>
              {item.img && item.img[0] ? (
                <img
                  src={item.img[0]}
                  alt={item.name}
                  className="w-full object-cover rounded mb-6"
                />
              ) : (
                <div className="flex justify-center items-center h-40">
                  <AiOutlineLoading3Quarters className="animate-spin text-3xl text-gray-500" />
                </div>
              )}
            </div>
  
            <div className="text-2xl font-mono text-[#5E6D50] font-light mb-2">
              {item.name}
            </div>
  
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <div className="text-sm font-medium">Recycle</div>
              <FaBottleWater />
              <div className="text-sm font-medium">{item.bottle || 10}</div>
            </div>
  
            <div className="mb-6 text-lg font-medium">
              <span className="line-through text-gray-400 mr-2">
                Q {item.price + 500}
              </span>
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

 
  </>
  
  );
}

export default PopCard;
