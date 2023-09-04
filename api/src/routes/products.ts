import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,  
} from "../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/:id", getProductById);
router.get("/", getAllProducts);

export default router;
