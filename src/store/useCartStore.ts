import { create } from "zustand";
import { CartItemType, ProductType } from "../types";
import { changeTotalPrice } from "../lib/changeTotalPrice";

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

  addToCart: (product) => {
    const findProductInCart = get().cartItems.some(
      (item) => item.id === product.id
    );
    //   Если товар найден - увеличиваем его количество
    if (findProductInCart) {
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

  removeFromCart: (product) => {
    set({
      cartItems: get().cartItems.filter((item) => item.id !== product.id),
    });

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

  decreaseCount: (product) => {
    set((state) => ({
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === product.id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
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

  increaseCount: (product) => {
    set((state) => ({
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ),
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
