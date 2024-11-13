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
};
