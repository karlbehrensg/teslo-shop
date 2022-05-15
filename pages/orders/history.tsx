import NextLink from "next/link";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ShopLayout } from "../../components/layout/ShopLayout";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Fullname", width: 300 },
  {
    field: "paid",
    headerName: "Paid",
    description: "Show if the order is already paid",
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Not payed" variant="outlined" />
      );
    },
  },
  {
    field: "order",
    headerName: "See order",
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href="/orders/[id]" as={`/orders/${params.row.id}`} passHref>
          <Link underline="always">See order</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: "John Doe" },
  { id: 2, paid: true, fullname: "Jane Doe" },
  { id: 3, paid: false, fullname: "Karl Behrens" },
  { id: 4, paid: false, fullname: "Jorge Tapia" },
  { id: 5, paid: true, fullname: "Alexis Ponce" },
];

const HistoryPage = () => {
  return (
    <ShopLayout title="Order History" pageDescription="Order History">
      <Typography variant="h1" component="h1">
        Order History
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50, 100]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
