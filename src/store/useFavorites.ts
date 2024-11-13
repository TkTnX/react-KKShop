import { create } from "zustand";
import { ProductType } from "../types";
import axios from "axios";
import { fetchCurrentUser } from "../lib/fetchCurrentUser";

interface FavoritesStore {
  favorites: ProductType[];
  loading: boolean;
  error: boolean;

  fetchFavorites: () => void;
  switchFavorites: (product: ProductType) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  loading: false,
  error: false,

  fetchFavorites: async () => {
    try {
      set({ loading: true });
      const currentUser = await fetchCurrentUser();
      set({ favorites: currentUser.favoritesItems });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  switchFavorites: async (product) => {
    try {
      set({ loading: true });
      const currentUser = await fetchCurrentUser();
      if (!currentUser) {
        throw new Error("User not found");
      }
      set({ favorites: currentUser.favoritesItems });

      const findProductInFavorites = currentUser.favoritesItems.find(
        (item: ProductType) => item.id === product.id
      );

      if (findProductInFavorites) {
        const res = await axios.patch(
          `
        ${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
          {
            favoritesItems: get().favorites.filter(
              (item) => item.id !== product.id
            ),
          }
        );
        set({ favorites: res.data.favoritesItems });
      } else {
        const res = await axios.patch(
          `
        ${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
          {
            favoritesItems: [...get().favorites, product],
          }
        );
        set({ favorites: res.data.favoritesItems });
      }
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
