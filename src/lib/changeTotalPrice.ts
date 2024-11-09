import { ProductType } from "../types";

export const changeTotalPrice = ({
  set,
  product,
  type = "increase",
}: {
  set: any;
  product: ProductType;
  type?: "decrease" | "increase";
}) => {
  if (type === "decrease") {
    set((state: any) => ({
      ...state,
      totalPrice:
        product.isSale && product.priceWithSale
          ? state.totalPrice - product.priceWithSale
          : state.totalPrice - product.price,
    }));
  } else {
    set((state: any) => ({
      ...state,
      totalPrice:
        product.isSale && product.priceWithSale
          ? state.totalPrice + product.priceWithSale
          : state.totalPrice + product.price,
    }));
  }
};
