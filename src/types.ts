export interface ProductType {
  id: number;
  img: string;
  title: string;
  desc: string;
  isSale: boolean;
  priceWithSale?: number;
  price: number;
  size: number;
  country: string;
  typeOfCare: string;
  hairType: string;
  brand: string;
}

export type CartItemType = ProductType & { count: number };

export type UserType = {
  name: string | null;
  email: string | null;
  password: string | null;
  avatarUrl: string | null;
  birthdayDate?: string | null;
  phoneNumber?: string | null;
  city?: string | null;
  cartItems: CartItemType[] | null;
  id: number | null;
  token?: string;
  favoritesItems: ProductType[] | null;
  cartTotalPrice: number;
};

export type PostType = {
  id: number;
  img: string;
  title: string;
  desc: string;
  createdAt: string;
};

export type SortByType = {
  sortBy: string;
  brand: string | null;
  priceFrom: number | null;
  priceTo: number | null;
};

export type OrderInfoType = {
  city: string | null;
  deliveryType: "Курьер" | "Самовывоз";
  address: string | null;
  time: string | null;
  paymentType: "Card" | "Gpay" | "Cash";
};

export type OrderType = OrderInfoType & {
  products: CartItemType[];
  userId: number;
  id: number;
  totalPrice: number;
};
