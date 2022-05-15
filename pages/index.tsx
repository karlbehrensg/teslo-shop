import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layout";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks";

const Home: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout
      title={"Teslo-Shop"}
      pageDescription={"Find the best Teslo products"}
    >
      <Typography variant="h1">Shop</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products
      </Typography>

      {isLoading ? <h1>Loading ....</h1> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default Home;
