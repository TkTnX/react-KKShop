import { create } from "zustand";
import { CartItemType, ProductType } from "../types";
import { changeTotalPrice } from "../lib/changeTotalPrice";
import axios from "axios";
import { fetchCurrentUser } from "../lib/fetchCurrentUser";

interface CartStore {
  cartItems: CartItemType[];
  totalPrice: number;
  loading: boolean;
  error: boolean;

  fetchCart: () => void;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  decreaseCount: (product: ProductType) => void;
  increaseCount: (product: ProductType) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  totalPrice: 0,
  loading: false,
  error: false,

  fetchCart: async () => {
    try {
      set({ loading: true });
      const currentUser = await fetchCurrentUser();
      if (!currentUser) {
        throw new Error("User not found");
      }
      set({ cartItems: currentUser.cartItems });

      changeTotalPrice({ set, cartItems: currentUser.cartItems });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addToCart: async (product) => {
    const currentUser = await fetchCurrentUser();
    try {
      set({ loading: true });

      if (!currentUser) {
        throw new Error("User not found");
      }
      const findProductInCart = get().cartItems.some(
        (item) => item.id === product.id
      );
      const findProductInUserCart = currentUser.cartItems.some(
        (item: ProductType) => item.id === product.id
      );
      //   Если товар найден - увеличиваем его количество
      if (findProductInCart || findProductInUserCart) {
        set((state) => ({
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          ),
        }));

        // Изменяем количество товара
        const newItems = await axios.patch(
          `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
          {
            cartItems: get().cartItems.map((item) =>
              item.id === product.id ? { ...item, count: item.count++ } : item
            ),
          }
        );
        set((state) => ({
          ...state,
          cartItems: newItems.data.cartItems,
        }));
        changeTotalPrice({ set, cartItems: newItems.data.cartItems });

        //   если нет - добавляем
      } else {
        set((state) => ({
          ...state,
          cartItems: [...state.cartItems, { ...product, count: 1 }],
        }));
        // Добавляем товар в БД
        const newItems = await axios.patch(
          `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
          { cartItems: [...currentUser.cartItems, { ...product, count: 1 }] }
        );

        set((state) => ({
          ...state,
          cartItems: newItems.data.cartItems,
        }));
        changeTotalPrice({ set, cartItems: newItems.data.cartItems });
      }
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeFromCart: async (product) => {
    const currentUser = await fetchCurrentUser();
    try {
      set({ loading: true });
      if (!currentUser) {
        throw new Error("User not found");
      }
      set({
        cartItems: get().cartItems.filter((item) => item.id !== product.id),
      });

      // Удаляем товар из БД

      const newItems = await axios.patch(
        `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
        {
          cartItems: get().cartItems.filter((item) => item.id !== product.id),
        }
      );

      set((state) => ({
        ...state,
        cartItems: newItems.data.cartItems,
      }));
      changeTotalPrice({ set, cartItems: newItems.data.cartItems });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  decreaseCount: async (product) => {
    const currentUser = await fetchCurrentUser();
    try {
      set({ loading: true });
      if (!currentUser) {
        throw new Error("User not found");
      }

      const res = await axios.patch(
        `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
        {
          cartItems: get().cartItems.map((item) =>
            item.id === product.id ? { ...item, count: item.count - 1 } : item
          ),
        }
      );
      set({ cartItems: res.data.cartItems });
      changeTotalPrice({ set, cartItems: res.data.cartItems });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  increaseCount: async (product) => {
    const currentUser = await fetchCurrentUser();
    try {
      set({ loading: true });
      if (!currentUser) {
        throw new Error("User not found");
      }

      const res = await axios.patch(
        `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
        {
          cartItems: get().cartItems.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          ),
        }
      );
      set({ cartItems: res.data.cartItems });
      changeTotalPrice({ set, cartItems: res.data.cartItems });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
