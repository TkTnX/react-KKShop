export interface ProductType {
    id: number;
    img: string,
    title: string,
    desc: string,
    isSale: boolean,
    priceWithSale?: number,
    price: number,
    size: number,
    country: string,
    typeOfCare: string,
    hairType: string
}