import axios from "axios";
import { CartItemType } from "../types";

export const changeTotalPrice = async ({
  set,
  cartItems,
  userId,
}: {
  set: any;
  cartItems: CartItemType[];
  userId: number;
}) => {
  const newTotalPrice = cartItems.reduce((acc: number, item: CartItemType) => {
    if (item.isSale && item.priceWithSale) {
      return (acc + item.priceWithSale) * item.count;
    } else {
      return (acc + item.price) * item.count;
    }
  }, 0);
  await axios.patch(`${import.meta.env.VITE_MOKKY_URL}/users/${userId}`, {
    cartTotalPrice: newTotalPrice,
  });

  set({
    totalPrice: newTotalPrice,
  });
};
