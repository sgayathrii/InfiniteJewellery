import React, { } from "react";
import {useState,  useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
  Typography,
  IconButton,
  Portal
} from "@mui/material";
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  AppDispatch,
  ProductDetailDialogProps,
  ProductWithQuantity,
  RootState,
  Product
} from "../../types/types";
import { cartActions } from "../../redux/slices/carts";
import { fetchProductDetail } from "../../redux/thunks/productDetailThunk";
import CartSidebar from "../cart/CartSidebarList";

export default function ProductDetailsDialog({  
  open,
  onClose,
}: ProductDetailDialogProps) {

  const productDetails = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );

  const { productId } = useParams<{ productId: string }>();

  const dispatch = useDispatch<AppDispatch>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);

  if (!productDetails) {
    return null; // Or render a loading state or return an empty div, depending on your requirement.
  }

  const handleAddToCart = (product: Product) => {
    const productWithQuantity: ProductWithQuantity = {
      ...product,
      quantity: 1,
    };
    dispatch(cartActions.addToCart(productWithQuantity));
    setCartOpen(true);
  };

  const images = productDetails.images.map((image, index) => ({
    original: image,
    thumbnail: image,
    originalAlt: `Product Image ${index + 1}`,
    thumbnailAlt: `Product Image ${index + 1}`,
  }));

  const calculateEstimatedShippingDate = () => {
    const currentDate = new Date();
    const estimatedShippingDate = new Date(currentDate);
    estimatedShippingDate.setDate(estimatedShippingDate.getDate() + 5);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return estimatedShippingDate.toLocaleString("en-US", options);
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={1}>
            {/* Thumbnail Gallery */}
            <Grid item xs={3}>
              <Grid container spacing={1}>
                {productDetails.images.map((image, index) => (
                  <Grid item xs={12} key={index}>
                    <img
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      style={{
                        width: "70%",
                        cursor: "pointer",
                        border:
                          index === selectedImageIndex
                            ? "1px solid #0edbaf"
                            : "none",
                      }}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Main Image Gallery and Product Details */}
            <Grid item xs={9}>
              <Grid container spacing={2}>
                {/* Main Image Gallery */}
                <Grid item xs={12}>
                  <div className="custom-image-gallery-wrapper">
                    <ImageGallery
                      items={images}
                      showThumbnails={false}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      showBullets
                      startIndex={selectedImageIndex}
                      onSlide={(currentIndex: number) =>
                        setSelectedImageIndex(currentIndex)
                      }
                    />
                  </div>
                </Grid>

                {/* Product Details */}
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography variant="h5" style={{ marginBottom: "10px" }}>
                        {productDetails.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ marginBottom: "10px" }}
                      >
                        ${productDetails.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() =>handleAddToCart(productDetails)}
                      >
                        ADD TO BAG
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "13px", marginBottom: "8px" }}
                      >
                        <span>Ships out in 3-5 days.</span>
                        <br />
                        <span>
                          Estimated shipping date:{" "}
                          {calculateEstimatedShippingDate()}
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <hr
                        style={{
                          borderTop: "1px solid #ccc",
                          margin: "20px 0",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="space-between">
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: "12px", marginBottom: "4px" }}
                      >
                        <LocalShippingIcon style={{ marginRight: "4px" }} />
                        Free Shipping
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: "12px", marginBottom: "4px" }}
                      >
                        <AssignmentReturnIcon style={{ marginRight: "4px" }} />
                        100 Day Returns
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        style={{ fontSize: "12px", marginBottom: "4px" }}
                      >
                        <VerifiedUserIcon style={{ marginRight: "4px" }} />
                        100 Day Product Warranty
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>       
        </DialogContent>      
      </Dialog>
      {cartOpen && (
        <div className="cart-sidebar-container">
          <CartSidebar
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}        
            selectedImageIndex={selectedImageIndex}
          />
        </div>
      )}
      
    </div>
  );
}
