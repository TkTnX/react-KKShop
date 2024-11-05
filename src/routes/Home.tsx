import { useEffect } from "react";
import About from "../components/pages/Home/About";
import Hero from "../components/pages/Home/Hero";
import Mailing from "../components/pages/Home/Mailing";
import NewProducts from "../components/pages/Home/NewProducts";
import ProductsWithSale from "../components/pages/Home/ProductsWithSale";
import { useProductsStore } from "../store/useProducts";

const Home = () => {
  const { products, fetchProducts, error, loading } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* NEW PRODUCTS */}
      <NewProducts products={products.slice(0, 5)} loading={loading} error={error} />

      {/* PRODUCTS WITH SALE */}
      <ProductsWithSale products={products.filter((p) => p.isSale)} loading={loading} error={error} />

      {/* MAILING */}
      <Mailing />
    </>
  );
};

export default Home;
