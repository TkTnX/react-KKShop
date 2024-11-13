import FavoritesList from "../components/shared/pages/Favorites/FavoritesList";
import { ProductType } from "../types";

const Favorites = () => {
  const favoritesList: ProductType[] = [
    {
      id: 1,
      img: "/products/01.png",
      title: "Комплекс для выпрямления волос c экстрактом хны",
      desc: "R&B Henna Spa Therapy Magic Straight Cream",
      isSale: true,
      priceWithSale: 1300,
      price: 2300,
      size: 50,
      country: "Россия",
      typeOfCare: "Женский",
      hairType: "Короткие волосы",
      brand: "R&B",
    },
  ];
  return (
    <>
      <h2 className="text-5xl md:text-8xl 5xl:text-9xl font-bold ">Мой лист пожеланий</h2>
      {favoritesList.length > 0 ? (
        <FavoritesList favoritesList={favoritesList} />
      ) : (
        <p className="text-2xl mt-10">В листе пожеланий пусто.</p>
      )}
    </>
  );
};

export default Favorites;
