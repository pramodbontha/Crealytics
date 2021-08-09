import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProductDialog from "../ProductDialog";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  gtin: string;
  gender: string;
  salePrice: string;
  price: string;
  imageLink: string;
  additionalImageLinks: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 80,
  },
});

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCloseDialog = (event: React.MouseEvent<unknown>) => {
    setDialogOpen(false);
  };
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imageLink}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Gtin: {props.gtin}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Gender: {props.gender}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sale price: {props.salePrice}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(e) => handleOpenDialog()}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
      <ProductDialog
        dialogOpen={dialogOpen}
        handleClose={handleCloseDialog}
        item={props}
      />
    </>
  );
};

export default ProductCard;
