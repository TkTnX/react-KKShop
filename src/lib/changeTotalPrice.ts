import { CartItemType } from "../types";

export const changeTotalPrice = ({
  set,
  cartItems,
}: {
  set: any;
  cartItems: CartItemType[];
  type?: "decrease" | "increase";
}) => {
  set({
    totalPrice: cartItems.reduce((acc: number, item: CartItemType) => {
      if (item.isSale && item.priceWithSale) {
        return (acc + item.priceWithSale) * item.count;
      } else {
        return (acc + item.price) * item.count;
      }
    }, 0),
  });
};
