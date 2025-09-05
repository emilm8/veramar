import axios from "axios";

const BASE_URL = import.meta.env.VITE_VERAMAR_BACKEND_URL;

export async function getAllCategories() {
  try {
    const res = await axios.get(`${BASE_URL}/categories`);
     return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}


export async function getProductByCategoryId(cat, id) {
  try {
    const res = await axios.get(`${BASE_URL}/${cat}/${id}`);
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
    const res = await axios.get(`${BASE_URL}/glasses`);
     return res.data;  
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}


export async function getAllbathSuit() {
  try {
    const res = await axios.get(`${BASE_URL}/bathSuit`);
     return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}


export async function getAllbags() {
  try {
    const res = await axios.get(`${BASE_URL}/bags`);
     return res.data;
  } catch (err) {
    console.error("Kategoriya çəkilmədi:", err);
    return [];
  }
}




