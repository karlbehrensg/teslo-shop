import type { NextPage, GetServerSideProps } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { ProductList } from "../../components/products";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces/products";

interface Props {
  products: IProduct[];
}

const SearchPage: NextPage<Props> = ({ products }) => {
  return (
    <ShopLayout
      title={"Teslo-Shop - Search"}
      pageDescription={"Find the best Teslo products"}
    >
      <Typography variant="h1">Search product</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        ABC --- 123
      </Typography>

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

  // TODO: return other products if no products found

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
