import { Router } from "express";
import { createCategory, getAllCategories, getProductsByCategory} from "../controllers/categories";

const router = Router();

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:category", getProductsByCategory); 

export default router;