import { ProductType } from "../../../../types";
import FavoritesListItem from "./FavoritesListItem";

const FavoritesList = ({ favoritesList }: { favoritesList: ProductType[] }) => {
  return (
    <div className="mt-5 grid gap-5">
      {favoritesList.map((product) => (
        <FavoritesListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FavoritesList;
