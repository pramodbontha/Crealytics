import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../ProductCard";
import Pagination from "@material-ui/lab/Pagination";
import Paper from "@material-ui/core/Paper";

interface ProductListProps {
  items: any[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Paper className="sb-paper">
          <Pagination
            count={100}
            page={page}
            onChange={handleChange}
            color="primary"
            style={{ float: "right" }}
          />
          <Grid container spacing={1} data-testid="product-card-list">
            {items
              .slice((page - 1) * 100, (page - 1) * 100 + 100)
              .map((item) => (
                <Grid item xs={3} key={item[1]}>
                  <ProductCard
                    title={item[0]}
                    gtin={item[1]}
                    gender={item[2]}
                    salePrice={item[3]}
                    price={item[4]}
                    imageLink={item[5]}
                  />
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default ProductList;
