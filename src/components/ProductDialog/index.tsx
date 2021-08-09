import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";

interface ProductCardProps {
  title: string;
  gtin: string;
  gender: string;
  salePrice: string;
  price: string;
  imageLink: string;
  additionalImageLinks: string;
}

interface ProductDialogProps {
  dialogOpen: boolean;
  handleClose: (event: React.MouseEvent<unknown>) => void;
  item: ProductCardProps;
}

const ProductDialog: React.FC<ProductDialogProps> = ({
  dialogOpen,
  handleClose,
  item,
}) => {
  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{item?.title}</DialogTitle>
        <DialogContent>
          <Carousel>
            {item?.additionalImageLinks.split(",").map((imageLink, i) => (
              <img
                key={i}
                src={imageLink}
                alt={item.title}
                height="350"
                width="380"
              />
            ))}
          </Carousel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {"Close"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
