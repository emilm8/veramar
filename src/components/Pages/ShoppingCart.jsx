import React from "react";
import { useCart } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cartItems, removeFromCart, updateAmount, updateItemSize, subtotal, shippingCost, total, clearCart } = useCart();

  const currencySymbol = "Q";

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

  const increment = (id) => {
    const item = cartItems.find((i) => String(i.id) === String(id));
    if (item) updateAmount(id, item.amount + 1);
  };

  const decrement = (id) => {
    const item = cartItems.find((i) => String(i.id) === String(id));
    if (!item) return;
    const newAmount = item.amount - 1;
    if (newAmount <= 0) {
      removeFromCart(id);
    } else {
      updateAmount(id, newAmount);
    }
  };

  const sizesList = ["", "XS", "S", "M", "L", "XL"];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8   min-h-screen">
      <h1 className="text-5xl md:text-6xl font-semibold text-[#748371] mb-8 tracking-tight frunchy">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#748371] text-4xl frunchy">Your cart is empty.</p>
              <Link to="/main">
                <button className="mt-4 bg-[#D7CBB2] text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition duration-300 cursor-pointer">Continue Shopping</button>
              </Link>
            </div>
          ) : (
            <>
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-[#748371] text-sm">
                  <thead>
                    <tr className="text-left border-b border-gray-200">
                      <th className="py-4"></th>
                      <th className="py-4">Product</th>
                      <th className="py-4">Size</th>
                      <th className="py-4">Price</th>
                      <th className="py-4">Quantity</th>
                      <th className="py-4">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 transition duration-200">
                        <td className="py-4">
                          <button type="button" onClick={() => removeFromCart(item.id)} className="text-2xl cursor-pointer text-gray-400 hover:text-red-500 transition duration-200">×</button>
                        </td>
                        <td className="py-4 flex items-center gap-4">
                          <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-100" />
                          <span className="font-medium text-[#748371]">{item.name}</span>
                        </td>
                        <td className="py-4">
                          <select value={item.size || ""} onChange={(e) => updateItemSize(item.id, e.target.value)} className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                            {sizesList.map((s) => (
                              <option key={s} value={s}>{s || "Select"}</option>
                            ))}
                          </select>
                        </td>
                        <td className="py-4 font-medium">{currencySymbol} {formatPrice(item.price)}</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <button type="button" onClick={() => decrement(item.id)} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-50 hover:text-[#748371] transition duration-200">−</button>
                            <input type="number" min="0" value={item.amount} onChange={(e) => { const val = Number(e.target.value); if (val <= 0) removeFromCart(item.id); else updateAmount(item.id, val); }} className="w-16 text-center rounded-lg border border-gray-300 py-1.5   focus:outline-none" />
                            <button type="button" onClick={() => increment(item.id)} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-50 hover:text-[#748371]transition duration-200">+</button>
                          </div>
                        </td>
                        <td className="py-4 font-semibold">{currencySymbol} {formatPrice(item.price * item.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 md:hidden">
                {cartItems.map((item) => (
                  <div key={item.id} className="border border-gray-100 rounded-lg p-4 shadow-sm bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-100" />
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.id)} className="text-lg text-gray-400 hover:text-red-500 transition duration-200">×</button>
                    </div>

                    <div className="mt-3">
                      <label className="text-sm text-gray-600">Size:</label>
                      <select value={item.size || ""} onChange={(e) => updateItemSize(item.id, e.target.value)} className="border border-gray-300 rounded-lg px-3 py-1.5 w-full mt-1 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                        {sizesList.map((s) => (
                          <option key={s} value={s}>{s || "Select"}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex justify-between text-sm mt-3">
                      <span className="text-gray-600">Price: {currencySymbol} {formatPrice(item.price)}</span>
                      <span className="font-semibold text-gray-800">Subtotal: {currencySymbol} {formatPrice(item.price * item.amount)}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button type="button" onClick={() => decrement(item.id)} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition duration-200">−</button>
                      <input type="number" min="0" value={item.amount} onChange={(e) => { const val = Number(e.target.value); if (val <= 0) removeFromCart(item.id); else updateAmount(item.id, val); }} className="w-16 text-center rounded-lg border border-gray-300 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                      <button type="button" onClick={() => increment(item.id)} className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition duration-200">+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-200 disabled:opacity-50" disabled>Update Cart</button>
                <button type="button" className="bg-red-100 text-red-600 px-6 py-2 rounded-lg hover:bg-red-200 transition duration-200" onClick={clearCart}>Clear Cart</button>
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 ">
            <h2 className="text-lg font-semibold text-[#748371] mb-4">Cart Totals</h2>

            <div className="flex justify-between mb-3 text-sm text-[#748371]">
              <span>Subtotal</span>
              <span className="font-medium">{currencySymbol} {formatPrice(subtotal)}</span>
            </div>

            <div className="mb-3 text-sm text-[#748371]">
              <p>Shipping</p>
              <p className="font-medium">Fixed price: {currencySymbol} {formatPrice(shippingCost)}</p>
              <p className="text-gray-500">Send to Azerbaijan</p>
              <button className="text-[#748371]   text-sm underline transition duration-200">Change Address</button>
            </div>

            <div className="flex justify-between font-semibold text-[#748371] mt-4">
              <span>Total</span>
              <span>{currencySymbol} {formatPrice(total)}</span>
            </div>

            <Link to="/final">
              <button className="w-full bg-[#D7CBB2] hover:bg-[#748371] text-white font-medium py-3 rounded-lg mt-6 transition duration-300 shadow-sm hover:shadow-md cursor-pointer">Finalize Purchase</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
