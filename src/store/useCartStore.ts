import { create } from "zustand";
import { CartItemType, ProductType } from "../types";
import { changeTotalPrice } from "../lib/changeTotalPrice";
import axios from "axios";
import { fetchCurrentUser } from "../lib/fetchCurrentUser";

interface CartStore {
  cartItems: CartItemType[];
  totalPrice: number;
  totalPriceWithSale: number;
  loading: boolean;
  error: boolean;

  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  decreaseCount: (product: ProductType) => void;
  increaseCount: (product: ProductType) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  totalPrice: 0,
  totalPriceWithSale: 0,
  loading: false,
  error: false,

  addToCart: async (product) => {
    const currentUser = await fetchCurrentUser();

    if (!currentUser) {
      set({ error: true });
      return null;
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
    }

    //   обновляем общую сумму
    changeTotalPrice({ set, product });

    if (product.isSale) {
      const totalPriceWithoutSale = get().cartItems.reduce((acc, item) => {
        return acc + item.price;
      }, 0);

      const totalPriceWithSale = get().cartItems.reduce((acc, item) => {
        return acc + item.priceWithSale!;
      }, 0);

      //   обновляем общую сумму со скидкой
      set((state) => ({
        ...state,
        totalPriceWithSale: get().cartItems.reduce((acc, item) => {
          return (totalPriceWithoutSale - totalPriceWithSale) * item.count;
        }, 0),
      }));
    }
  },

  removeFromCart: async (product) => {
    const currentUser = await fetchCurrentUser();
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

    changeTotalPrice({ set, product, type: "decrease" });

    const totalPriceWithoutSale = get().cartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    const totalPriceWithSale = get().cartItems.reduce((acc, item) => {
      return acc + item.priceWithSale!;
    }, 0);

    //   обновляем общую сумму со скидкой
    set((state) => ({
      ...state,
      totalPriceWithSale: get().cartItems.reduce((acc, item) => {
        return (totalPriceWithoutSale - totalPriceWithSale) * item.count;
      }, 0),
    }));
  },

  decreaseCount: async (product) => {
    const currentUser = await fetchCurrentUser();

    set((state) => ({
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === product.id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
    }));

    // Уменьшаем количество товара в БД

    const newItems = await axios.patch(
      `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
      {
        cartItems: get().cartItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        ),
      }
    );

    set((state) => ({
      ...state,
      cartItems: newItems.data.cartItems,
    }));

    changeTotalPrice({ set, product, type: "decrease" });

    const totalPriceWithoutSale = get().cartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    const totalPriceWithSale = get().cartItems.reduce((acc, item) => {
      return acc + item.priceWithSale!;
    }, 0);

    //   обновляем общую сумму со скидкой
    set((state) => ({
      ...state,
      totalPriceWithSale: get().cartItems.reduce((acc, item) => {
        return (totalPriceWithoutSale - totalPriceWithSale) * item.count;
      }, 0),
    }));
  },

  increaseCount: async (product) => {
    const currentUser = await fetchCurrentUser();

    set((state) => ({
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ),
    }));

    // Уменьшаем количество товара в БД

    const newItems = await axios.patch(
      `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
      {
        cartItems: get().cartItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        ),
      }
    );

    set((state) => ({
      ...state,
      cartItems: newItems.data.cartItems,
    }));

    changeTotalPrice({ set, product });

    const totalPriceWithoutSale = get().cartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    const totalPriceWithSale = get().cartItems.reduce((acc, item) => {
      return acc + item.priceWithSale!;
    }, 0);

    //   обновляем общую сумму со скидкой
    set((state) => ({
      ...state,
      totalPriceWithSale: get().cartItems.reduce((acc, item) => {
        return (totalPriceWithoutSale - totalPriceWithSale) * item.count;
      }, 0),
    }));
  },
}));
