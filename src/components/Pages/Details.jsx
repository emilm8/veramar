import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByCategoryId } from "../../service";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../Contexts/CartContext";
import PopCard from "../Main/PopCard";
import { toast } from "react-toastify";

function Details() {
  const { id, category } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    getProductByCategoryId(category, id).then((data) => {
      setProduct(data);
      setSelectedImage(data?.img?.[0] || data?.image || "");
      const sizesFromProduct =
        Array.isArray(data?.sizes) && data.sizes.length ? data.sizes : null;
      setSelectedSize(sizesFromProduct ? sizesFromProduct[0] : "M");
    });
  }, [id, category]);

  const handleQuantityChange = (e) =>
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));

  const handleAddToCart = () => {
    if (!product) return;
    const cartProduct = {
      id: product.id ?? product._id ?? `${category}-${id}`,
      name: product.name ?? "Product",
      price: Number(product.price) || 0,
      img:
        selectedImage ||
        (Array.isArray(product.img) ? product.img[0] : product.img),
      size: selectedSize ?? "",
    };

    addToCart(cartProduct, quantity);

    toast.success(
      `${quantity} × ${product.name} (${cartProduct.size}) Added to Cart `,
      { position: "top-right", autoClose: 3000 }
    );
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AiOutlineLoading3Quarters className="text-5xl animate-spin text-gray-500" />
      </div>
    );
  }

  const sizesList =
    Array.isArray(product.sizes) && product.sizes.length
      ? product.sizes
      : ["XS", "S", "M", "L", "XL"];

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
        {/* Sol hissə - şəkillər */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Thumbnail şəkillər */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-3 w-full md:w-24 order-2 md:order-1">
            {Array.isArray(product.img) &&
              product.img.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`w-20 h-20 md:w-auto md:h-auto rounded cursor-pointer object-cover transition-transform duration-200 hover:scale-105 ${
                    selectedImage === img ? "ring-2 ring-gray-400" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
          </div>

          {/* Böyük şəkil */}
          <div className="flex-1 order-1 md:order-2">
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

        <div className="space-y-6 mt-6 md:mt-0">
          <div>
            <span className="bg-[#cbb89c] text-white px-3 py-1 rounded text-sm font-medium">
              Offer!
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-light">{product.name}</h1>
          <div className="flex items-center gap-3">
            <p className="text-gray-400 line-through text-lg">Q 889.00</p>
            <p className="text-2xl font-semibold text-gray-800">
              Q {product.price}
            </p>
          </div>

          <p className="text-gray-600">{product.text}</p>

          <div>
            <p className="mb-2 font-medium">Size</p>
            <div className="flex flex-wrap gap-3">
              {sizesList.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-1 border rounded-full hover:bg-gray-100 transition ${
                    selectedSize === s ? "bg-gray-100 ring-1" : ""
                  }`}
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

      <h1 className=" text-[#748371] text-[40px] text-center fraunces mt-10 ">
        Related Products
      </h1>

      <div className="flex max-w-6xl mx-auto">
        <PopCard />
      </div>
    </>
  );
}

export default Details;
