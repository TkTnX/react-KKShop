import { Link } from "react-router-dom";
import { useState } from "react";
import CatalogItems from "../components/shared/pages/Catalog/CatalogItems";

const Catalog = () => {
  const [sortBy, setSortBy] = useState<{
    sortBy: string;
    brand: string | null;
  }>({
    sortBy: "price",
    brand: null,
  });

  return (
    <div className="container">
      {/* BREADCRUMBS */}
      <div className="flex items-center gap-2 text-[#757575] text-sm mt-12">
        <Link className="hover:text-black" to="/">
          Главная
        </Link>
        <span>/</span> <p>Каталог</p>
      </div>

      {/* SORT */}

      <div className="flex items-center gap-7 mt-10">
        <select
          defaultValue="price"
          onChange={(e) => setSortBy({ ...sortBy, sortBy: e.target.value })}
          className="border-b border-b-black text-pink outline-none"
        >
          <option hidden value="hidden" className="text-pink">
            Сортировать
          </option>
          <option className="text-black" value="price">
            по цене ↑
          </option>
          <option className="text-black" value="-price">
            по цене ↓
          </option>
        </select>
        <select
          defaultValue="null"
          onChange={(e) => setSortBy({ ...sortBy, brand: e.target.value })}
          className="border-b border-b-black text-pink outline-none"
        >
          <option hidden value="hidden" className="text-pink">
            Бренд
          </option>
          <option className="text-black" value="de-lavo-garden">
            De Lavo Garden
          </option>
          <option className="text-black" value="dermaphilia">
            Dermaphilia
          </option>
          <option className="text-black" value="skindom">
            Skindom
          </option>
        </select>
        <button className="border-b border-b-black text-pink outline-none">
          Цена
        </button>
      </div>

      {/* CATALOG ITEMS */}

      <CatalogItems sortBy={sortBy} />
    </div>
  );
};

export default Catalog;
