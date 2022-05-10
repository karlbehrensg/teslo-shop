import NextLink from "next/link";

import {
  Typography,
  Grid,
  Link,
  CardActionArea,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import { initialData } from "../../database/products";
import { ItemCouter } from "../ui";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList = () => {
  return (
    <>
      {productsInCart.map((product) => {
        return (
          <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              <NextLink href="/product/slug" passHref>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`products/${product.images[0]}`}
                      sx={{ borderRadius: "5px" }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body1">
                  Size: <strong>M</strong>
                </Typography>
                <ItemCouter />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1">{`$${product.price}`}</Typography>
              <Button variant="text" color="secondary">
                Remove
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
