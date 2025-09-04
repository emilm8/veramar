import React, { useState } from "react";

function ShoppingCart() {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Versailles - $",
      price: 399,
      amount: 1,
      img: "https://veramar.gt/wp-content/uploads/2024/10/Susana_.webp",
    },
  ]);

  const shippingCost = 38;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
    <h1 className="text-2xl md:text-4xl text-[#6c745f] mb-6 md:mb-8 font-light">
      Shopping Cart
    </h1>
  
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Cart Table */}
      <div className="lg:col-span-2 border rounded-md p-4 md:p-6 overflow-x-auto">
        <table className="w-full text-[#6c745f] text-sm md:text-base">
          <thead>
            <tr className="text-left">
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-3 md:py-4">
                  <button
                    onClick={() =>
                      setCartItems(cartItems.filter((i) => i.id !== item.id))
                    }
                    className="text-lg md:text-xl"
                  >
                    ×
                  </button>
                </td>
                <td className="py-3 md:py-4 flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 md:w-14 md:h-14 object-cover"
                  />
                  {item.name}
                </td>
                <td className="py-3 md:py-4">Q {item.price.toFixed(2)}</td>
                <td className="py-3 md:py-4">{item.amount}</td>
                <td className="py-3 md:py-4">
                  Q {(item.price * item.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="mt-4 md:mt-6">
          <button
            disabled
            className="bg-[#e7e1d6] text-[#a1a193] px-4 md:px-6 py-2 rounded-md w-full md:w-auto"
          >
            Update cart
          </button>
        </div>
      </div>
  
      {/* Cart Totals */}
      <div className="border rounded-md p-4 md:p-6 text-[#6c745f]">
        <h2 className="text-base md:text-lg mb-4">Cart Totals</h2>
  
        <div className="flex justify-between mb-2 text-sm md:text-base">
          <span>Subtotal</span>
          <span>Q {subtotal.toFixed(2)}</span>
        </div>
  
        <div className="mb-2 text-sm md:text-base">
          <p>Envío</p>
          <p>Fixed price: Q {shippingCost.toFixed(2)}</p>
          <p>Send to Guatemala.</p>
          <button className="underline">Change address</button>
        </div>
  
        <div className="flex justify-between font-semibold mt-4 text-sm md:text-base">
          <span>Total</span>
          <span>Q {total.toFixed(2)}</span>
        </div>
  
        <button className="bg-[#c8bea6] text-[#6c745f] w-full py-2 md:py-3 rounded-md mt-4 md:mt-6">
          Finalize Purchase
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default ShoppingCart;
