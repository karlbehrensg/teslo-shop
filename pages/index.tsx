import type { NextPage } from "next";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ShopLayout } from "../components/layout";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Teslo-Shop"}
      pageDescription={"Find the best Teslo products"}
    >
      <Typography variant="h1">Shop</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products
      </Typography>

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item key={product.slug} xs={6} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`products/${product.images[0]}`}
                  alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
};

export default Home;
