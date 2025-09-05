import React, { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext(null);

function makeItemKey(productId, size) {
  return `${productId}-${size ?? ""}`;
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return parsed.map((it) => {
        const productId = it.productId ?? it.id ?? it.product?.id ?? it.productId;
        const size = it.size ?? "";
        const id = makeItemKey(productId, size);
        return {
          id,
          productId,
          name: it.name,
          price: Number(it.price) || 0,
          amount: Number(it.amount) || 1,
          img: it.img || (it.images ? it.images[0] : "") || "",
          size,
        };
      });
    } catch {
      return [];
    }
  });

  const shippingCost = 0;

  const save = (items) => {
    setCartItems(items);
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {}
  };

  const addToCart = (product, quantity = 1) => {
    if (!product || (product.id === undefined && product.productId === undefined)) return;
    const qty = Math.max(1, Number(quantity) || 1);
    const productId = product.id ?? product.productId;
    const size = product.size ?? "";
    const itemKey = makeItemKey(productId, size);

    setCartItems((prev) => {
      const exists = prev.find((p) => String(p.id) === String(itemKey));
      let next;
      if (exists) {
        next = prev.map((p) =>
          String(p.id) === String(itemKey) ? { ...p, amount: p.amount + qty } : p
        );
      } else {
        const item = {
          id: itemKey,
          productId,
          name: product.name ?? "Product",
          price: Number(product.price) || 0,
          amount: qty,
          img:
            product.img ||
            (Array.isArray(product.images) ? product.images[0] : "") ||
            "",
          size,
        };
        next = [...prev, item];
      }
      try {
        localStorage.setItem("cart", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const removeFromCart = (id) => {
    const next = cartItems.filter((p) => String(p.id) !== String(id));
    save(next);
  };

  const updateAmount = (id, newAmount) => {
    const n = Math.max(1, Number(newAmount) || 1);
    const next = cartItems.map((p) => (String(p.id) === String(id) ? { ...p, amount: n } : p));
    save(next);
  };

  const updateItemSize = (id, newSize) => {
    const item = cartItems.find((p) => String(p.id) === String(id));
    if (!item) return;

    const newKey = makeItemKey(item.productId, newSize ?? "");
    if (newKey === item.id) return;

    const existing = cartItems.find((p) => p.id === newKey);

    let next = cartItems.filter((p) => p.id !== item.id);  
    if (existing) {
      next = next.map((p) =>
        p.id === existing.id ? { ...p, amount: p.amount + item.amount } : p
      );
    } else {
      const newItem = { ...item, id: newKey, size: newSize };
      next = [...next, newItem];
    }
    save(next);
  };

  const clearCart = () => save([]);

  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.amount, 0);
  const total = subtotal + shippingCost;

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateAmount,
        updateItemSize,
        clearCart,
        subtotal,
        shippingCost,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
