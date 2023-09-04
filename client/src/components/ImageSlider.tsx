import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ImageSliderProps } from '../types/types';


const ImageSlider = ({ images, imageHeight }:ImageSliderProps) => {
  return (
    <Carousel>
      {images.map((image: string, index: number) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} height={imageHeight} width="200px" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;