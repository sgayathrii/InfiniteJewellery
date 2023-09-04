import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../types/types";
import { fetchProductDetail } from "../../redux/thunks/productDetailThunk";
import { Card, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProductDetail() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );

  const dispatch = useDispatch<AppDispatch>();
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const productDetailParams = useParams<{ id: string }>();
  const productId = productDetailParams.id;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);

  if (!productDetail) {
    return <div>No information available</div>;
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

  return (
    <div>
      <h3>{productDetail.title}</h3>
      <Card>
        <div style={{ maxWidth: "500px", margin: "30px" }}>
          <Carousel showThumbs={true}>
            {productDetail.images.map((image, index) => (
              <div key={index}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Product Image ${index}`}
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Card>
    </div>
  );
}
