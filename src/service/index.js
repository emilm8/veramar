import axios from "axios";

const BASE_URL = import.meta.env.VITE_VERAMAR_BACKEND_URL;

export async function getAllCategories() {
  try {
    console.log("BASE_URL:", BASE_URL);  
    const res = await axios.get(`${BASE_URL}/categories`);
    console.log("API cavabı:", res.data);
    return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}

export async function getProductById(productId) {
  try {
    const categories = await getAllCategories();
    const tiendas = categories.flatMap(cat => cat.Tienda);
    const allProducts = tiendas.flatMap(t => t.products);

    const product = allProducts.find(p => p.id === Number(productId));
    return product || null;
  } catch (err) {
    console.error(`Product (${productId}) tapılmadı:`, err);
    return null;
  }
}








export async function getAllGlasses() {
  try {
    console.log("BASE_URL:", BASE_URL);  
    const res = await axios.get(`${BASE_URL}/glasses`);
    console.log("API cavabı:", res.data);
    return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}
export async function getAllbathSuit() {
  try {
    console.log("BASE_URL:", BASE_URL);  
    const res = await axios.get(`${BASE_URL}/bathSuit`);
    console.log("API cavabı:", res.data);
    return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}
export async function getAllbags() {
  try {
    console.log("BASE_URL:", BASE_URL);  
    const res = await axios.get(`${BASE_URL}/bags`);
    console.log("API cavabı:", res.data);
    return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}
