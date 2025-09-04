import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByCategoryId } from '../../service'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

function Details() {
  const { id, category } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    getProductByCategoryId(category, id).then((data) => {
      setProduct(data)
      setSelectedImage(data?.img?.[0] || '')
    })
  }, [id, category])

  const handleQuantityChange = (e) =>
    setQuantity(Math.max(1, parseInt(e.target.value) || 1))

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart`)
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters className="text-5xl animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-8">
       <div className="flex gap-6">

        <div className="flex flex-col gap-3 w-24">
          {product.img.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={` rounded cursor-pointer object-cover transition-transform duration-200 hover:scale-105 ${
                selectedImage === img ? '  ring-gray-400' : ''
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto rounded object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>
      </div>

  
      <div className="space-y-6">
         
        <div>
          <span className="bg-[#cbb89c] text-white px-3 py-1 rounded text-sm font-medium">
            Offer!
          </span>
        </div>

  
        <h1 className="text-4xl font-light">{product.name}</h1>
        <div className="flex items-center gap-3">
          <p className="text-gray-400 line-through text-lg">Q 889.00</p>
          <p className="text-2xl font-semibold text-gray-800">
            Q {product.price}
          </p>
        </div>

    
        <p className="text-gray-600">{product.text}</p>

       
        <div>
          <p className="mb-2 font-medium">Size</p>
          <div className="flex gap-3">
            {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
              <button
                key={s}
                className="px-4 py-1 border rounded-full hover:bg-gray-100 transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

         
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            className="w-16 border rounded p-1 text-center"
          />
          <button
            className="bg-[#e0d9ce] text-gray-700 px-5 py-2 rounded hover:bg-[#d4c7b6] transition"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>

        
        <Link to="/measure">
          <div>
            <p className="mb-2 italic">Don’t know your size?</p>
            <button className="bg-[#cbb89c] text-white px-4 py-2 rounded hover:bg-[#bba986] transition">
              See table of measurements →
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Details
