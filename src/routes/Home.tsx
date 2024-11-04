import About from "../components/pages/Home/About";
import Hero from "../components/pages/Home/Hero";
import Mailing from "../components/pages/Home/Mailing";
import NewProducts from "../components/pages/Home/NewProducts";
import ProductsWithSale from "../components/pages/Home/ProductsWithSale";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* NEW PRODUCTS */}
      <NewProducts />

      {/* PRODUCTS WITH SALE */}
      <ProductsWithSale />

      {/* MAILING */}
      <Mailing />
    </>
  );
};

export default Home;
