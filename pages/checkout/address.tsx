import NextLink from "next/link";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layout";

const AddressPage = () => {
  return (
    <ShopLayout title={"Address"} pageDescription={"Confirm address"}>
      <Typography component="h1" variant="h1">
        Address
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Address" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Address 2" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="Country" value={1}>
              <MenuItem value={1}>Chile</MenuItem>
              <MenuItem value={2}>Uruguay</MenuItem>
              <MenuItem value={3}>Germany</MenuItem>
              <MenuItem value={4}>South Korea</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Phone" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <NextLink href="/checkout/summary" passHref>
          <Button color="secondary" className="circular-btn" size="large">
            Check order
          </Button>
        </NextLink>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
