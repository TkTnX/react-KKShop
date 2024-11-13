import { useEffect } from "react";
import FavoritesList from "../components/shared/pages/Favorites/FavoritesList";
import { useUserStore } from "../store/useUserStore";
import { useNavigate } from "react-router-dom";
import { useFavoritesStore } from "../store/useFavorites";

const Favorites = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const { favorites, fetchFavorites } = useFavoritesStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/sign-in");
    }
    fetchFavorites();
  }, [currentUser]);
  return (
    <>
      <h2 className="text-5xl md:text-8xl 5xl:text-9xl font-bold ">
        Мой лист пожеланий
      </h2>
      {favorites && favorites.length > 0 ? (
        <FavoritesList favoritesList={favorites} />
      ) : (
        <p className="text-2xl mt-10">В листе пожеланий пусто.</p>
      )}
    </>
  );
};

export default Favorites;
