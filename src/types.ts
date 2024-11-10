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

export type RegisterDataType = {
  name: string;
  email: string;
  password: string;
}