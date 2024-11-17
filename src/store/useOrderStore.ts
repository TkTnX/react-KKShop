import { create } from "zustand";

interface OrderStore {
  orderInfo: {
    city: string | null;
    deliveryType: "Курьер" | "Самовывоз";
    address: string | null;
    time: string | null;
    paymentType: "Card" | "Gpay" | "Cash";
  };

  changeDeliveryType: (deliveryType: "delivery" | "pickup") => void;
  changeAddress: (address: string) => void;
  changeDate: (date: string) => void;
  changePaymentType: (payType: "Card" | "Gpay" | "Cash") => void;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orderInfo: {
    city: null,
    deliveryType: "Курьер",
    address: null,
    time: null,
    paymentType: "Cash"
  },

  changeDeliveryType(deliveryType) {
    const deliveryTypeName = deliveryType === "delivery" ? "Курьер" : "Самовывоз";
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
}));
