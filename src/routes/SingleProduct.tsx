import { useEffect, useState } from "react";
import { Link, redirect, useParams } from "react-router-dom";
import { ProductType } from "../types";
import { useProductsStore } from "../store/useProducts";
import InteractiveButtons from "../components/pages/SingleProduct/InteractiveButtons";


const SingleProduct = () => {
  const [product, setProduct] = useState<ProductType>();
  const { fetchProduct, loading, error } = useProductsStore();
  const params = useParams();
  if (!params.id) redirect("/catalog");

  useEffect(() => {
    const fetchProductFunc = async () => {
      const newProduct = await fetchProduct(String(params.id));

      setProduct(newProduct);
    };
    fetchProductFunc();
  }, [fetchProduct, params]);

  if (!product || error) return null;

  const firstWordOfTitle = product.title.split(" ")[0];
  const titleWithoutFirstWord = product.title.split(" ").slice(1).join(" ");
  return (
    <div className="container">
      {/* BREADCRUMBS */}
      <div className="flex items-center gap-2 text-[#757575] text-sm mt-12">
        <Link className="hover:text-black" to="/">
          Главная
        </Link>{" "}
        <span>/</span>{" "}
        <Link className="hover:text-black" to="/catalog">
          Каталог
        </Link>{" "}
        <span>/</span> <p>{product.title}</p>
      </div>

      {/* PRODUCT INFO */}

      <div className="mt-9 flex items-start flex-col sm:flex-row gap-16">
        {/* LEFT */}
        <div className="w-full xl:w-auto">
          <div className="w-full sm:w-auto lg:w-[540px] xl:w-[740px] lg:h-[385px] xl:h-[585px] flex items-center justify-center">
            {loading && (
              <div className="bg-lightGray w-full h-full flex items-center justify-center" />
            )}
            <img src={product.img} alt={product.title} />
          </div>
          <div className="hidden sm:flex flex-col lg:flex-row items-center gap-7 mt-8">
            <div className="flex items-center gap-3 lg:max-w-52">
              <img src="/product-page/01.png" alt="img" />
              <p className="text-sm">Бесплатная доставка от 1000 руб</p>
            </div>
            <div className="flex items-center gap-3 lg:max-w-52">
              <img src="/product-page/02.png" alt="img" />
              <p className="text-sm">Доставка по всей территории РФ</p>
            </div>
            <div className="flex items-center gap-3 lg:max-w-52">
              <img src="/product-page/03.png" alt="img" />
              <p className="text-sm">Гарантия качества продукции </p>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        {loading ? (
          <div className="w-full h-[336px] bg-lightGray" />
        ) : (
          <div className="min-w-64">
            <p className="text-sm text-[#434343]">{product.desc}</p>
            <h2 className="text-2xl md:text-5xl mt-2 tracking-[0.04em] flex items-center gap-2 flex-wrap font-bold">
              <span className="text-pink">{firstWordOfTitle}</span>
              {titleWithoutFirstWord}
            </h2>
            <p className="text-sm text-[#afafaf] mt-7">Артикул: {product.id}</p>
            <p className="text-[#323232] mt-7 flex items-center gap-2">
              <span className=" border border-black p-2 text-black w-14 h-12 flex items-center justify-center">
                {product.size}
              </span>
              объем / мл
            </p>
            <div className="mt-7 flex items-center gap-4">
              {product.isSale ? (
                <>
                  <div>
                    <h6 className="text-2xl font-bold">
                      {product.priceWithSale} руб
                    </h6>
                    <span className="text-pink text-xs">Со скидкой</span>
                  </div>
                  <div className="text-grey">
                    <h6 className="text-2xl font-bold line-through">
                      {product.price} руб
                    </h6>
                    <span className="text-xs">Без скидки</span>
                  </div>
                </>
              ) : (
                <h6 className="text-2xl font-bold">{product.price} руб</h6>
              )}
            </div>
            <InteractiveButtons />
          </div>
        )}
      </div>

      {/* DESCRIPTION */}

      <div className="border-t border-t-[#c4c4c4] mt-16">
        <p className="mt-3">{product.title}</p>
        <p className="text-sm text-[#afafaf] mt-2">Артикул: {product.id}</p>
        <p className="text-sm text-[#3c3c3c] mt-4 max-w-[1000px]">
          {product.desc} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem quia dolorem odio harum alias, nulla et similique
          vel. Quis, quia reiciendis quidem possimus ex voluptates commodi saepe
          doloremque tenetur voluptatibus a illum aperiam reprehenderit tempora,
          ratione numquam nisi ullam nostrum magnam excepturi molestias vero at
          quibusdam. Animi blanditiis ullam ut!
        </p>

        <div className="max-w-[900px] mt-11">
          <p className="text-sm">Подробные характеристики</p>
          <div className="grid gap-3 text-sm mt-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-14">
              <p className=" text-[#afafaf] sm:min-w-[150px]">Вид ухода</p>
              <p className="">{product.typeOfCare}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-14">
              <p className=" text-[#afafaf] sm:min-w-[150px]">Объем</p>
              <p className="">{product.size}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-14">
              <p className=" text-[#afafaf] sm:min-w-[150px]">
                Страна производитель
              </p>
              <p className="">{product.country}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-14">
              <p className=" text-[#afafaf] sm:min-w-[150px]">Тип волос</p>
              <p className="max-w-[600px]">{product.hairType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
