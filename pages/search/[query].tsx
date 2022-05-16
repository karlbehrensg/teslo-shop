import type { NextPage, GetServerSideProps } from "next";
import { Typography, Box } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces/products";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={"Teslo-Shop - Search"}
      pageDescription={"Find the best Teslo products"}
    >
      <Typography variant="h1">Search product</Typography>

      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }}>
            {"We couldn't find any products matching your search"}
          </Typography>
          <Typography variant="h2" sx={{ ml: 1 }} color="secondary">
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  let foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
