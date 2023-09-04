import { NotFoundError } from "../helpers/apiError";
import Category, { CategoryDocument } from "../models/Category";
import Product, { ProductDocument } from "../models/Product";

export const createCategoryService = async (
  category: CategoryDocument
): Promise<CategoryDocument> => {
  return await category.save();
};

export const getAllCategoriesService = async (): Promise<CategoryDocument[]> => {
  return await Category.find();
};

export const getProductsByCategoryService = async (category: string): Promise<ProductDocument[]> => {
  return await Product.find({ category: category });
};
