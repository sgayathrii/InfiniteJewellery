import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';
import { Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import shopBag from '../asserts/images/shop.gif';
import ImageSlider from "../components/ImageSlider";

const styles = {
  link: {
    marginRight: 10,
  },
  bagIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    marginLeft: 10,
  },
};

export default function FavoriteList() {
  const favoriteList = useSelector((state: RootState) => state.products.favoriteList);

  return (
    <Grid container spacing={2} margin={5}>
      {favoriteList.map((item) => (
        <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
          {/* <ProductCard product={product} /> */}
          <Card>
            <ImageSlider images={item.images} imageHeight={200}/>
            <CardContent>
            <h2>{item.title}</h2> 
              <Link to={`/products/${item._id}`} style={styles.link}>
                More Details
              </Link>
              <Button variant="text" color="primary">
                <div style={styles.bagIcon}>
                  <img src={shopBag} alt="loved" style={{ width: "100%", height: "100%" }} />
                </div>
              </Button>
          </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}