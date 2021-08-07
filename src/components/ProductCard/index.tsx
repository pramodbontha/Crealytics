import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface ProductCardProps {
  title: string;
  gtin: string;
  gender: string;
  salePrice: string;
  price: string;
  imageLink: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 80,
  },
});

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  gtin,
  gender,
  salePrice,
  price,
  imageLink,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageLink} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gtin: {gtin}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            sale price: {salePrice}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            price: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
