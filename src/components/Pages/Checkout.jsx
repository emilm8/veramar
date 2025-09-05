import React from "react";
import { useCart } from "../../Contexts/CartContext";

export default function Checkout() {
  const { cartItems, subtotal, shippingCost, total } = useCart();
  const currencySymbol = "Q";

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
    
    
    <div className="lg:col-span-2 border rounded-2xl p-8 shadow-md bg-white">
      <h2 className="text-3xl font-serif mb-8 border-b pb-4">
        Finalize Purchase
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2 font-medium">Name *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="block text-sm mb-2 font-medium">Last name *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Last names"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-2 font-medium">Address *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Street address"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-2 font-medium">
            Colony, apartment (optional)
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Colony, no. apartment"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">Municipality *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">Department *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">Postal code (optional)</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">Phone *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Phone"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">Email address *</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">NIT *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="NIT / CF"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded" /> Create an account?
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded" /> Ship to another address?
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-2 font-medium">Order Notes (optional)</label>
          <textarea
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            rows={3}
            placeholder="Notes about your order..."
          />
        </div>
      </form>
    </div>

   
    <div className="space-y-8">
       
      <div className="border rounded-2xl p-6 shadow-md bg-gray-50">
        <h3 className="text-xl font-semibold mb-6">Your Order</h3>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between py-2 text-sm"
                >
                  <span>
                    {item.name} {item.size ? `– ${item.size}` : ""} ×{" "}
                    {item.amount}
                  </span>
                  <span>
                    {currencySymbol} {formatPrice(item.price * item.amount)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-sm mt-4">
              <span>Subtotal</span>
              <span>
                {currencySymbol} {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Envío</span>
              <span>
                Precio fijo: {currencySymbol} {formatPrice(shippingCost)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
              <span>Total</span>
              <span>
                {currencySymbol} {formatPrice(total)}
              </span>
            </div>
          </>
        )}
      </div>

       
      <div className="border rounded-2xl p-6 shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-6">Card Payment</h3>
        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-2 font-medium">Name on card *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-medium">Card number *</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-2 font-medium">Expiry *</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-2 font-medium">CVV *</label>
              <input
                type="text"
                placeholder="CVV"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2 font-medium">Choose Installments</label>
            <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none">
              <option>1 cuota</option>
              <option>3 cuotas</option>
              <option>6 cuotas</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
