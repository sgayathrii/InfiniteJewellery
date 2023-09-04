import { Request, Response, NextFunction } from "express";
import { createCategoryService, getAllCategoriesService, getProductsByCategoryService } from "../services/categories";
import Category from "../models/Category";

export const createCategory = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { categoryName, imageUrl } = request.body;

      const categoryInformation = new Category({
        categoryName: categoryName,
        imageUrl: imageUrl
      })
      const category = await createCategoryService(categoryInformation);
      response.status(201).json(category);
    } catch (error) {
      next(error);
    }
  };

  export const getAllCategories = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const categories = await getAllCategoriesService();
      response.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  };

  export const getProductsByCategory = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const category = request.params.category
    try {
        const productList = await getProductsByCategoryService(category);
        const productsByCategory = productList.filter(
            (product) => product.category === category
        );
        response.status(200).json(productsByCategory);
    } catch (error) {
        next(error);
    }
};



