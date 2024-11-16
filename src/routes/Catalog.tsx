import { Link } from "react-router-dom";
import { useState } from "react";
import CatalogItems from "../components/shared/pages/Catalog/CatalogItems";
import PriceDropdown from "../components/shared/pages/Catalog/PriceDropdown";
import { SortByType } from "../types";



const Catalog = () => {
  const [sortBy, setSortBy] = useState<SortByType>({
    sortBy: "price",
    brand: null,
    priceFrom: 0,
    priceTo: null,
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
        <PriceDropdown setSortBy={setSortBy} sortBy={sortBy}>
          <button className="border-b border-b-black text-pink outline-none">
            Цена
          </button>
        </PriceDropdown>
      </div>

      {/* CATALOG ITEMS */}

      <CatalogItems setSortBy={setSortBy} sortBy={sortBy} />
    </div>
  );
};

export default Catalog;
