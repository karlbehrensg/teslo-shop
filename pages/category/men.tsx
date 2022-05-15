import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");

  return (
    <ShopLayout
      title={"Teslo-Shop"}
      pageDescription={"Find the best Teslo products"}
    >
      <Typography variant="h1">Men</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Men products
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
