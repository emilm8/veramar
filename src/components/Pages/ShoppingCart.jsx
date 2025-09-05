import React from "react";
import { useCart } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const {
    cartItems,
    removeFromCart,
    updateAmount,
    updateItemSize,
    subtotal,
    shippingCost,
    total,
    clearCart,
  } = useCart();

  const currencySymbol = "Q";

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

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
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl text-[#6c745f] mb-6 md:mb-8 font-light">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 border rounded-lg p-4 md:p-6 bg-white shadow-sm">
          {cartItems.length === 0 ? (
            <p className="text-[#6c745f]">Your cart is empty.</p>
          ) : (
            <>

              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-[#6c745f] text-sm md:text-base">
                  <thead>
                    <tr className="text-left border-b">
                      <th></th>
                      <th>Product</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-t hover:bg-[#faf9f7] transition"
                      >

                        <td className="py-3 md:py-4">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-xl hover:text-red-500 transition"
                          >
                            ×
                          </button>
                        </td>


                        <td className="py-3 md:py-4 flex items-center gap-3">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-md border"
                          />
                          <span className="font-medium">{item.name}</span>
                        </td>


                        <td className="py-3 md:py-4">
                          <select
                            value={item.size || ""}
                            onChange={(e) =>
                              updateItemSize(item.id, e.target.value)
                            }
                            className="border rounded px-2 py-1 bg-white"
                          >
                            {sizesList.map((s) => (
                              <option key={s} value={s}>
                                {s || "Select"}
                              </option>
                            ))}
                          </select>
                        </td>


                        <td className="py-3 md:py-4 font-medium">
                          {currencySymbol} {formatPrice(item.price)}
                        </td>


                        <td className="py-3 md:py-4 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => decrement(item.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c8bea6] text-[#6c745f] hover:bg-[#e7e1d6] transition"
                          >
                            −
                          </button>

                          <input
                            type="number"
                            min="0"
                            value={item.amount}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              if (val <= 0) removeFromCart(item.id);
                              else updateAmount(item.id, val);
                            }}
                            className="w-14 text-center rounded-md border border-[#c8bea6] py-1"
                          />

                          <button
                            type="button"
                            onClick={() => increment(item.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c8bea6] text-[#6c745f] hover:bg-[#e7e1d6] transition"
                          >
                            +
                          </button>
                        </td>


                        <td className="py-3 md:py-4 font-semibold">
                          {currencySymbol} {formatPrice(item.price * item.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              <div className="space-y-4 md:hidden">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-lg p-3 shadow-sm flex flex-col gap-3"
                  >

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md border"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xl hover:text-red-500 transition"
                      >
                        ×
                      </button>
                    </div>

                    {/* Size */}
                    <div>
                      <label className="text-sm">Size:</label>
                      <select
                        value={item.size || ""}
                        onChange={(e) =>
                          updateItemSize(item.id, e.target.value)
                        }
                        className="border rounded px-2 py-1 w-full mt-1"
                      >
                        {sizesList.map((s) => (
                          <option key={s} value={s}>
                            {s || "Select"}
                          </option>
                        ))}
                      </select>
                    </div>

                     <div className="flex justify-between text-sm">
                      <span>
                        Price: {currencySymbol} {formatPrice(item.price)}
                      </span>
                      <span className="font-semibold">
                        Subtotal: {currencySymbol}{" "}
                        {formatPrice(item.price * item.amount)}
                      </span>
                    </div>


                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c8bea6] text-[#6c745f] hover:bg-[#e7e1d6] transition"
                      >
                        −
                      </button>

                      <input
                        type="number"
                        min="0"
                        value={item.amount}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val <= 0) removeFromCart(item.id);
                          else updateAmount(item.id, val);
                        }}
                        className="w-14 text-center rounded-md border border-[#c8bea6] py-1"
                      />

                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#c8bea6] text-[#6c745f] hover:bg-[#e7e1d6] transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>


              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="bg-[#e7e1d6] text-[#6c745f] px-4 md:px-6 py-2 rounded-md"
                  disabled
                >
                  Update cart
                </button>
                <button
                  type="button"
                  className="bg-red-50 hover:bg-red-100 text-red-600 px-4 md:px-6 py-2 rounded-md border border-red-200 transition"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            </>
          )}
        </div>


        <div className="border rounded-lg p-4 md:p-6 text-[#6c745f] bg-white shadow-sm">
          <h2 className="text-base md:text-lg mb-4 font-medium">
            Cart Totals
          </h2>

          <div className="flex justify-between mb-2 text-sm md:text-base">
            <span>Subtotal</span>
            <span>
              {currencySymbol} {formatPrice(subtotal)}
            </span>
          </div>

          <div className="mb-2 text-sm md:text-base">
            <p>Shipping</p>
            <p>
              Fixed price: {currencySymbol} {formatPrice(shippingCost)}
            </p>
            <p>Send to Azerbaijan.</p>
            <button className="underline hover:text-[#4b5242] transition">
              Change address
            </button>
          </div>

          <div className="flex justify-between font-semibold mt-4 text-sm md:text-base">
            <span>Total</span>
            <span>
              {currencySymbol} {formatPrice(total)}
            </span>
          </div>

            <Link to="/final">
          <button className="bg-gradient-to-r from-[#c8bea6] to-[#e7e1d6] text-[#4b5242] font-medium w-full py-2 md:py-3 rounded-lg mt-4 md:mt-6 shadow hover:shadow-md transition">
            Finalize Purchase
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
