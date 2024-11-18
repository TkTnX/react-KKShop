import { create } from "zustand";
import { OrderInfoType, OrderType, ProductType } from "../types";
import axios from "axios";
import { fetchCurrentUser } from "../lib/fetchCurrentUser";

interface OrderStore {
  orderInfo: OrderInfoType;
  loading: boolean;
  error: boolean;

  changeCity: (city: string) => void;
  changeDeliveryType: (deliveryType: "delivery" | "pickup") => void;
  changeAddress: (address: string) => void;
  changeDate: (date: string) => void;
  changePaymentType: (payType: "Card" | "Gpay" | "Cash") => void;
  createOrder: (
    data: OrderInfoType,
    products: ProductType[]
  ) => Promise<number>;
  fetchOneOrder: (id: string) => Promise<OrderType>;
  fetchUserOrders: (userId: number) => Promise<OrderType[]>;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  loading: false,
  error: false,
  orderInfo: {
    city: null,
    deliveryType: "Курьер",
    address: null,
    time: "Пн 10:00 - 20:00",
    paymentType: "Cash",
  },

  changeCity(city) {
    set({ orderInfo: { ...get().orderInfo, city } });
  },
  changeDeliveryType(deliveryType) {
    const deliveryTypeName =
      deliveryType === "delivery" ? "Курьер" : "Самовывоз";
    set({ orderInfo: { ...get().orderInfo, deliveryType: deliveryTypeName } });
  },
  changeAddress(address) {
    set({ orderInfo: { ...get().orderInfo, address } });
  },

  changeDate(date) {
    set({ orderInfo: { ...get().orderInfo, time: date } });
  },
  changePaymentType(payType) {
    set({ orderInfo: { ...get().orderInfo, paymentType: payType } });
  },

  createOrder: async (data, products) => {
    const currentUser = await fetchCurrentUser();
    if (!currentUser) return null;
    try {
      const newOrder = await axios.post(
        `${import.meta.env.VITE_MOKKY_URL}/orders`,
        {
          ...data,
          userId: currentUser.id,
          products,
        }
      );

      if (!newOrder.data) throw new Error("Order not created");

      await axios.patch(
        `${import.meta.env.VITE_MOKKY_URL}/users/${currentUser.id}`,
        {
          cartItems: [],
        }
      );

      return newOrder.data.id;
    } catch (error) {
      console.log(error);
    }
  },

  fetchOneOrder: async (id) => {
    try {
      set({ loading: true });
      const order = await axios.get(
        `${import.meta.env.VITE_MOKKY_URL}/orders/${id}`
      );

      return order.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchUserOrders: async (userId) => {
    try {
      set({ loading: true });
      const orders = await axios.get(
        `${import.meta.env.VITE_MOKKY_URL}/orders?userId=${userId}`
      );

      return orders.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
