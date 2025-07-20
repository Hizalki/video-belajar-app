import { getProducts } from "../api/productsAPI";
import {create} from "zustand";


interface Products {
  id: string;
  photos: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  mentor: string;
  rolmentor: string;
  avatar: string;
}

interface ProductState {
  products: Products[];
  loading: boolean;
  fetchProducts: () => Promise<void>;
}



export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await getProducts();
      set({ products: res.data });
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      set({ loading: false });
    }
  },
}));