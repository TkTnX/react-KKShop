import { useEffect } from "react";
import { useProductsStore } from "../../../../store/useProducts";
import Product from "../../../shared/Product";
import { useChangeParams } from "../../../../hooks/useChangeParams";
import { SortByType } from "../../../../types";

const CatalogItems = ({
  sortBy,
  setSortBy,
}: {
  sortBy: SortByType;
  setSortBy: (value: SortByType) => void;
}) => {
  const { products, fetchProducts, error, loading } = useProductsStore();

  useEffect(() => {
    const sortURL = useChangeParams(sortBy);
    fetchProducts(sortURL);
  }, [sortBy]);

  useEffect(() => {
    fetchProducts();
    const prices = products.map((p) => p.price);
    setSortBy({
      ...sortBy,
      priceFrom: Math.min(...prices),
      priceTo: Math.max(...prices),
    });
  }, [products && products.length > 0]);

  error && !loading && (
    <p className="text-pink text-center text-lg">
      Ошибка при получении продуктов
    </p>
  );

  return (
    <div className="mt-9 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-9 group">
      {loading && <p className="text-pink text-center text-lg">Загрузка...</p>}
      {products.length > 0
        ? products.map((product, index) => (
            <div
              className={`${index % 5 === 0 ? "md:col-span-2" : ""}`}
              key={product.id}
            >
              <Product isCatalogItem={true} product={product} />
            </div>
          ))
        : !loading && (
            <p className="text-pink text-center text-lg">Продукты не найдены</p>
          )}
    </div>
  );
};

export default CatalogItems;
