import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../ProductCard";

interface ProductListProps {
  items: any[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={1} data-testid="product-card-list">
          {items.slice(0, 100).map((item) => (
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
      </Container>
    </div>
  );
};

export default ProductList;
