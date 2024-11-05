import { create } from "zustand";
import { ProductType } from "../types";
import axios from "axios";

interface ProductsStore {
  products: ProductType[];
  loading: boolean;
  error: boolean;

  fetchProducts: () => void;
  fetchProduct: (id: string) => Promise<ProductType>;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  loading: false,
  error: false,

  fetchProducts: async () => {
    try {
      set({ loading: true });
      const { data } = await axios.get(
        `${import.meta.env.VITE_MOKKY_URL}/products`
      );

      set({ products: data, error: false });
    } catch (err) {
      console.log(err);
      set({ error: true, products: [] });
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id) => {
    try {
      set({ loading: true });
      const { data } = await axios.get(
        `${import.meta.env.VITE_MOKKY_URL}/products/${id}`
      );

      if (!data) throw Error("Product not found");

      return data;
    } catch (err) {
      console.log(err);
      set({ error: true, products: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
