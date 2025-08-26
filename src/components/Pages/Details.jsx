import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../service'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data))
  }, [id])

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
       <AiOutlineLoading3Quarters

       className="text-5xl animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-20">
          <img src={product.img[0]} alt="" className="border rounded" />
        </div>
        <div className="flex-1">
          <img src={product.img[0]} alt="" className="w-full rounded" />
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-light">{product.name}</h1>
        <p className="text-xl font-semibold">Q {product.price}</p>
        <p className="text-gray-600 text-sm">{product.text}</p>

        <div>
          <p className="mb-2 font-medium">Size</p>
          <div className="flex gap-3">
            {['XS', 'S', 'M', 'L'].map((s) => (
              <button
                key={s}
                className="px-3 py-1 border rounded-full hover:bg-gray-100"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="number"
            defaultValue={1}
            className="w-16 border rounded p-1 text-center"
          />
          <button className="bg-gray-200 text-gray-500 px-5 py-2 rounded">
            Add to cart
          </button>
        </div>


        <Link to="/measure">
        <div>
          <p className="mb-2 italic">Don’t know your size?</p>
          <button className="bg-[#cbb89c] text-white px-4 py-2 rounded cursor-pointer">
            See table of measurements →
          </button>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Details
