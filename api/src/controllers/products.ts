// product controller here
import { Request, Response, NextFunction } from "express";

import Product from "../models/Product";
import {
    createProductService, 
    getProductByIdService,
    getProductListService    
} from "../services/products";


export const createProduct = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { designerId, category, subCategory, title, description, price, images, material, color, length, closureType, pendantDesign, size, gemstone, style, collections, occasions, salePrice, discountPercentage, designerTouch, availability } = request.body;

  
    const productInformation = new Product({
        designerId: designerId,
        category: category,
        subCategory: subCategory,
        title: title,
        description: description,
        price: price,
        images: images,
        material: material,
        color: color,
        length: length,
        closureType: closureType,
        pendantDesign: pendantDesign,
        size: size,
        gemstone: gemstone,
        style: style,
        collections: collections,
        occasions: occasions,
        salePrice: salePrice,
        discountPercentage: discountPercentage,
        designerTouch: designerTouch,
        availability: availability
    });

    try {
        const product = await createProductService(productInformation);
        response.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

export const getAllProducts = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const productList = await getProductListService();
        response.status(200).json(productList);
    } catch (error) {
        next(error);
    }
}

export const getProductById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const productId = request.params.id;
      const product = await getProductByIdService(productId);
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };



  
